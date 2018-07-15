<?php

require_once '../../vendor/autoload.php';

use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin;

// fixme: add static endpoints like /me
class CreatePostmanCollection
{
    public function execute()
    {
        print("Generating postman collection\n\n");

        $description = <<<TEXT
The TMZ API is an RPC-like HTTP service.  Read about pbjx here:

* <https://github.com/gdbots/pbjx-php>
* <https://github.com/gdbots/pbjx-bundle-php#pbjx-http-endpoints>
* <https://github.com/gdbots/pbjc-php>

Responses from a pbjx endpoint will return a JSON [envelope](http://schemas.tmz.com/json-schema/gdbots/pbjx/envelope/latest.json).

Documentation for pbjx endpoints may provide a __Request Body__ and __Response Body__ schema link.  The response body refers to the data in the `message` key of the envelope json mentioned above.  You can browse through all schemas at <http://schemas.tmz.com/>.

> Commands only return a `message_ref` when used over HTTP as they are only accepted by the server if valid and permission is allowed.  They are processed asynchronously.

TEXT;

        $collection = [
            'info'  => [
                'name'        => 'api.tmz.com',
                '_postman_id' => 'bc216095-10f2-3532-67b5-e1ccfe7dda70',
                'description' => $description,
                'schema'      => 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',
            ],
            'item'  => [],
            'auth'  => [
                'type'   => 'bearer',
                'bearer' => [
                    [
                        'key'   => 'token',
                        'value' => '{{access_token}}',
                        'type'  => 'string',
                    ],
                ],
            ],
            'event' => [
                [
                    'listen' => 'prerequest',
                    'script' => [
                        'id'   => '1e9795d3-a122-4b38-92c9-8f9129e548c6',
                        'type' => 'text/javascript',
                        'exec' => explode(PHP_EOL, file_get_contents('prerequest.js')),
                    ],
                ],
                [
                    'listen' => 'test',
                    'script' => [
                        'id'   => '4f055876-354b-4eec-8909-5be985a78c71',
                        'type' => 'text/javascript',
                        'exec' => [
                            '// todo: write a global test?',
                        ],
                    ],
                ],
            ],
        ];

        /** @var \Gdbots\Pbj\Schema[] $preFiltered */
        $preFiltered = array_merge(CommandV1Mixin::findAll(), RequestV1Mixin::findAll());
        /** @var \Gdbots\Pbj\Schema[] $schemas */
        $schemas = [];

        foreach ($preFiltered as $schema) {
            $schemas[$schema->getCurie()->toString()] = $schema;
        }

        ksort($schemas);
        $schemas = array_values($schemas);

        foreach ($schemas as $schema) {
            if ($this->shouldIgnore($schema)) {
                continue;
            }

            print("Building {$schema->getCurie()}\n");

            $curie = $schema->getCurie();
            $category = $curie->getCategory();
            $package = $curie->getPackage();
            $vendor = $curie->getVendor();
            $message = $curie->getMessage();
            $fields = $schema->getFields();

            $dryRun = $this->shouldUseDryRun($schema);
            $folderName = $vendor . ':' . $package;

            $urlParts = [
                '{{pbjx_endpoint}}',
                $vendor,
                $package,
                $category,
                $message,
            ];

            $url = implode('/', $urlParts);

            // Create namespace folder
            if (($folderIndex = $this->itemFolderExists($collection, $folderName)) === false) {
                $collection['item'][] = [
                    'name'        => $folderName,
                    'description' => '',
                    'item'        => [],
                ];
                $folderIndex = count($collection['item']) - 1;
            }

            // Create message category (e.g. category or request) folder
            if (($folderIndex2 = $this->itemFolderExists($collection['item'][$folderIndex], $category)) === false) {
                $collection['item'][$folderIndex]['item'][] = [
                    'name'                 => $category,
                    'description'          => '',
                    'item'                 => [],
                    '_postman_isSubFolder' => true,
                ];
                $folderIndex2 = count($collection['item'][$folderIndex]['item']) - 1;
            }

            $item = [
                'name'     => ucwords(str_replace('-', ' ', $message)),
                'event'    => [
                    [
                        'listen' => 'test',
                        'script' => [
                            'type' => 'text/javascript',
                            //TODO: use this as a global post-request script?
                            'exec' => [
                                "const response = JSON.parse(responseBody);",
                                "tests['Command Accepted'] = response.ok === true;",
                                "",
                            ],
                        ],
                    ],
                ],
                'request'  => [
                    'method'      => 'POST',
                    'header'      => [
                        [
                            'key'   => 'Content-Type',
                            'value' => 'application/json',
                        ],
                    ],
                    'body'        => [
                        'mode' => 'raw',
                        'raw'  => '{}',
                    ],
                    'url'         => [
                        'raw'  => $url,
                        'host' => [
                            '{{pbjx_endpoint}}',
                        ],
                        'path' => array_slice($urlParts, 1),
                    ],
                    'description' => "#### Request Body\nhttp://schemas.tmz.com/json-schema/{$vendor}/{$package}/{$category}/{$message}/latest.json",
                ],
                'response' => [],
            ];

            if ($category === 'request') {
                // Include response schema link in request description on all requests
                $responseMessage = str_replace('-request', '-response', $message);
                $item['request']['description'] .= "\n#### Response Body\nhttp://schemas.tmz.com/json-schema/{$vendor}/{$package}/{$category}/{$responseMessage}/latest.json";
                if (!$dryRun) {
                    $item['event'][0]['script']['exec'] += $this->generateTestsForResponse($schema);
                }
            }

            // Populate message defaults
            // todo: use $schema->createMessage() and deal with required fields
            $body = [];
            foreach ($fields as $field) {
                if ($default = $field->getDefault()) {
                    $body[$field->getName()] = $default;
                }
            }

            unset($body['_schema']);
            unset($body['command_id']);
            unset($body['request_id']);
            unset($body['occurred_at']);

            if (!empty($body)) {
                $item['request']['body']['raw'] = json_encode($body, JSON_PRETTY_PRINT);
            }

            if ($this->shouldUsePbjxToken($schema)) {
                $item['request']['header'][] = [
                    'key'   => 'x-pbjx-token',
                    'value' => '{{pbjx_token}}',
                ];
            }

            if ($dryRun) {
                $item['request']['header'][] = [
                    'key'   => 'x-pbjx-dry-run',
                    'value' => '1',
                ];
            }

            $collection['item'][$folderIndex]['item'][$folderIndex2]['item'][] = $item;
        }

        file_put_contents('collection.json', json_encode($collection, JSON_PRETTY_PRINT));

        print("\nFinished, file written to collection.json\n\n");
    }

    /**
     * @param array  $collection
     * @param string $folderName
     *
     * @return bool|int|string
     */
    private function itemFolderExists(array $collection, string $folderName)
    {
        foreach ($collection['item'] as $key => $itemArray) {
            if ($itemArray['name'] === $folderName) {
                return $key;
            };
        };

        return false;
    }

    /**
     * @param \Gdbots\Pbj\Schema $schema
     *
     * @return array
     */
    private function generateTestsForResponse(\Gdbots\Pbj\Schema $schema)
    {
        // Search requests can return no nodes and still allow us to verify
        // structure of the response so do not enable dry run
        $isSearchRequest = $schema->hasMixin('gdbots:ncr:mixin:search-nodes-request');

        // Use associated response class to create meaningful unit tests
        $responseCurie = \Gdbots\Pbj\SchemaCurie::fromString(
            str_replace('-request', '-response', $schema->getCurie())
        );
        /** @var \Gdbots\Pbj\Message $response */
        $response = \Gdbots\Pbj\MessageResolver::resolveCurie($responseCurie);
        $fields = $response::schema()->getFields();

        $skipFields = ['nodes', 'cursors'];
        $tests = [];

        foreach ($fields as $field) {
            $fieldName = $field->getName();
            if ($isSearchRequest && in_array($fieldName, $skipFields)) {
                continue;
            }

            $tests[] = "tests['Has {$fieldName} Field'] = response.message.{$fieldName} !== undefined;";
            //TODO: inject regex patterns to validate field value in postman sandbox
        }
        return $tests;
    }

    /**
     * @param \Gdbots\Pbj\Schema $schema
     *
     * @return bool
     */
    private function shouldUseDryRun(\Gdbots\Pbj\Schema $schema): bool
    {
        $ignored = [
            'gdbots:pbjx:mixin:command',
            'gdbots:ncr:mixin:get-node-request',
            'gdbots:ncr:mixin:get-node-batch-request',
            'gdbots:pbjx:mixin:get-events-request',
        ];

        foreach ($ignored as $curie) {
            if ($curie === $schema->getCurie()->toString() || $schema->hasMixin($curie)) {
                return true;
            }
        }

        return false;
    }

    /**
     * @param \Gdbots\Pbj\Schema $schema
     *
     * @return bool
     */
    private function shouldIgnore(\Gdbots\Pbj\Schema $schema): bool
    {
        $ignored = [
            'gdbots:ncr:command:create-edge',
            'gdbots:ncr:command:delete-edge',
            'gdbots:ncr:request:get-node-batch-request',
        ];

        foreach ($ignored as $curie) {
            if ($curie === $schema->getCurie()->toString() || $schema->hasMixin($curie)) {
                return true;
            }
        }

        return false;
    }

    /**
     * @param \Gdbots\Pbj\Schema $schema
     *
     * @return bool
     */
    private function shouldUsePbjxToken(\Gdbots\Pbj\Schema $schema): bool
    {
        $bypass = [
            // curies
        ];

        foreach ($bypass as $curie) {
            if ($curie === $schema->getCurie()->toString() || $schema->hasMixin($curie)) {
                return false;
            }
        }

        return true;
    }
}

$command = new CreatePostmanCollection();
$command->execute();
