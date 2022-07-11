<?php
declare(strict_types=1);

// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/image-block/1-0-1.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Enum\Format;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\ImageBlock\ImageBlockV1Mixin as TrinitiCanvasImageBlockV1Mixin;
use Triniti\Schemas\Common\Enum\AspectRatio;

final class ImageBlockV1 extends AbstractMessage
{
    const SCHEMA_ID = 'pbj:tmz:canvas:block:image-block:1-0-1';
    const SCHEMA_CURIE = 'tmz:canvas:block:image-block';
    const SCHEMA_CURIE_MAJOR = 'tmz:canvas:block:image-block:v1';
    const MIXINS = [
      'triniti:canvas:mixin:block:v1',
      'triniti:canvas:mixin:block',
      'triniti:canvas:mixin:node-ref-block:v1',
      'triniti:canvas:mixin:node-ref-block',
      'triniti:canvas:mixin:image-block:v1',
      'triniti:canvas:mixin:image-block',
      'triniti:common:mixin:themeable:v1',
      'triniti:common:mixin:themeable',
    ];

    use TrinitiCanvasBlockV1Mixin;

    use TrinitiCanvasImageBlockV1Mixin;

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
                Fb::create('node_ref', T\NodeRefType::create())
                    ->required()
                    ->build(),
                /*
                 * An optional override for the title of the node.
                 */
                Fb::create('title', T\StringType::create())
                    ->build(),
                Fb::create('caption', T\TextType::create())
                    ->maxLength(5000)
                    ->build(),
                Fb::create('is_nsfw', T\BooleanType::create())
                    ->build(),
                Fb::create('url', T\TextType::create())
                    ->format(Format::URL)
                    ->build(),
                Fb::create('launch_text', T\StringType::create())
                    ->build(),
                Fb::create('aspect_ratio', T\StringEnumType::create())
                    ->className(AspectRatio::class)
                    ->build(),
                /*
                 * For imported image blocks it may be necessary to store the old URL.
                 */
                Fb::create('fallback_src_url', T\TextType::create())
                    ->format(Format::URL)
                    ->build(),
                /*
                 * A string used to indicate that a visual treatment should be
                 * applied to a piece of content, e.g. "christmas" or "taco".
                 */
                Fb::create('theme', T\StringType::create())
                    ->format(Format::SLUG)
                    ->build(),
            ],
            self::MIXINS
        );
    }
}
