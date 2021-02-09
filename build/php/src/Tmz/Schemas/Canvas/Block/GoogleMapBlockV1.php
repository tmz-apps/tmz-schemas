<?php
declare(strict_types=1);

// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/google-map-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\GoogleMapBlock\GoogleMapBlockV1Mixin as TrinitiCanvasGoogleMapBlockV1Mixin;

final class GoogleMapBlockV1 extends AbstractMessage
{
    const SCHEMA_ID = 'pbj:tmz:canvas:block:google-map-block:1-0-0';
    const SCHEMA_CURIE = 'tmz:canvas:block:google-map-block';
    const SCHEMA_CURIE_MAJOR = 'tmz:canvas:block:google-map-block:v1';
    const MIXINS = [
      'triniti:canvas:mixin:block:v1',
      'triniti:canvas:mixin:block',
      'triniti:canvas:mixin:google-map-block:v1',
      'triniti:canvas:mixin:google-map-block',
    ];

    use TrinitiCanvasBlockV1Mixin;

    use TrinitiCanvasGoogleMapBlockV1Mixin;

    protected static function defineSchema(): Schema
    {
        return new Schema(self::SCHEMA_ID, __CLASS__,
            [
                Fb::create('etag', T\StringType::create())
                    ->maxLength(100)
                    ->pattern('^[\w\.:-]+$')
                    ->build(),
                /*
                 * In rendering environments that support HTML the css_class
                 * can be appended to the dom elements' class attribute.
                 */
                Fb::create('css_class', T\StringType::create())
                    ->pattern('^[\w\s-]+$')
                    ->build(),
                /*
                 * Represents an update that occurred on the node this block
                 * is attached to. DOES NOT indicate an update to the block itself.
                 * eg an article with a twitter block with updated_date means that
                 * the article was updated to include that twitter block.
                 */
                Fb::create('updated_date', T\DateTimeType::create())
                    ->build(),
                /*
                 * When true it means this block represents a portion of a document
                 * whose content is only indirectly related to the document's main content.
                 * Asides are frequently presented as sidebars or call-out boxes.
                 */
                Fb::create('aside', T\BooleanType::create())
                    ->build(),
                Fb::create('q', T\StringType::create())
                    ->build(),
                Fb::create('center', T\GeoPointType::create())
                    ->build(),
                Fb::create('zoom', T\TinyIntType::create())
                    ->max(21)
                    ->build(),
                Fb::create('maptype', T\StringType::create())
                    ->pattern('^(roadmap|satellite)$')
                    ->withDefault("roadmap")
                    ->build(),
            ],
            self::MIXINS
        );
    }
}
