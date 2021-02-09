<?php
declare(strict_types=1);

// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/twitter-tweet-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\TwitterTweetBlock\TwitterTweetBlockV1Mixin as TrinitiCanvasTwitterTweetBlockV1Mixin;

final class TwitterTweetBlockV1 extends AbstractMessage
{
    const SCHEMA_ID = 'pbj:tmz:canvas:block:twitter-tweet-block:1-0-0';
    const SCHEMA_CURIE = 'tmz:canvas:block:twitter-tweet-block';
    const SCHEMA_CURIE_MAJOR = 'tmz:canvas:block:twitter-tweet-block:v1';
    const MIXINS = [
      'triniti:canvas:mixin:block:v1',
      'triniti:canvas:mixin:block',
      'triniti:canvas:mixin:twitter-tweet-block:v1',
      'triniti:canvas:mixin:twitter-tweet-block',
    ];

    use TrinitiCanvasBlockV1Mixin;

    use TrinitiCanvasTwitterTweetBlockV1Mixin;

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
                Fb::create('screen_name', T\StringType::create())
                    ->required()
                    ->pattern('^\w{1,15}$')
                    ->build(),
                Fb::create('tweet_id', T\StringType::create())
                    ->required()
                    ->pattern('^\d+$')
                    ->build(),
                Fb::create('tweet_text', T\TextType::create())
                    ->maxLength(5000)
                    ->build(),
                Fb::create('hide_media', T\BooleanType::create())
                    ->build(),
                Fb::create('hide_thread', T\BooleanType::create())
                    ->build(),
            ],
            self::MIXINS
        );
    }
}
