<?php
declare(strict_types=1);

// @link https://schemas.tmz.com/json-schema/tmz/sys/node/flagset/1-0-0.json#
namespace Tmz\Schemas\Sys\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Ncr\Enum\NodeStatus;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin as GdbotsNcrNodeV1Mixin;
use Triniti\Schemas\Sys\FlagsetId;
use Triniti\Schemas\Sys\Mixin\Flagset\FlagsetV1Mixin as TrinitiSysFlagsetV1Mixin;

final class FlagsetV1 extends AbstractMessage
{
    const SCHEMA_ID = 'pbj:tmz:sys:node:flagset:1-0-0';
    const SCHEMA_CURIE = 'tmz:sys:node:flagset';
    const SCHEMA_CURIE_MAJOR = 'tmz:sys:node:flagset:v1';
    const MIXINS = [
      'gdbots:ncr:mixin:node:v1',
      'gdbots:ncr:mixin:node',
      'triniti:sys:mixin:flagset:v1',
      'triniti:sys:mixin:flagset',
    ];

    use GdbotsNcrNodeV1Mixin;

    use TrinitiSysFlagsetV1Mixin;

    protected static function defineSchema(): Schema
    {
        return new Schema(self::SCHEMA_ID, __CLASS__,
            [
                Fb::create('_id', T\IdentifierType::create())
                    ->required()
                    ->className(FlagsetId::class)
                    ->overridable(true)
                    ->build(),
                Fb::create('status', T\StringEnumType::create())
                    ->withDefault("draft")
                    ->className(NodeStatus::class)
                    ->build(),
                Fb::create('etag', T\StringType::create())
                    ->maxLength(100)
                    ->pattern('^[\w\.:-]+$')
                    ->build(),
                Fb::create('created_at', T\MicrotimeType::create())
                    ->build(),
                /*
                 * A fully qualified reference to what created this node. This is intentionally a message-ref
                 * and not a user id because it is often a program that creates nodes, not a user.
                 */
                Fb::create('creator_ref', T\MessageRefType::create())
                    ->build(),
                Fb::create('updated_at', T\MicrotimeType::create())
                    ->useTypeDefault(false)
                    ->build(),
                /*
                 * A fully qualified reference to what updated this node. This is intentionally a message-ref
                 * and not a user id because it is often a program that updates nodes, not a user.
                 * E.g. "acme:iam:node:app:cli-scheduler" or "acme:iam:node:user:60c71df0-fda8-11e5-bfb9-30342d363854"
                 */
                Fb::create('updater_ref', T\MessageRefType::create())
                    ->build(),
                /*
                 * A reference to the last event that changed the state of this node.
                 * E.g. "acme:blog:event:article-published:60c71df0-fda8-11e5-bfb9-30342d363854"
                 */
                Fb::create('last_event_ref', T\MessageRefType::create())
                    ->build(),
                Fb::create('title', T\StringType::create())
                    ->build(),
                Fb::create('booleans', T\BooleanType::create())
                    ->asAMap()
                    ->build(),
                Fb::create('floats', T\FloatType::create())
                    ->asAMap()
                    ->build(),
                Fb::create('ints', T\IntType::create())
                    ->asAMap()
                    ->build(),
                Fb::create('strings', T\StringType::create())
                    ->asAMap()
                    ->build(),
                Fb::create('trinaries', T\TrinaryType::create())
                    ->asAMap()
                    ->build(),
            ],
            self::MIXINS
        );
    }
}
