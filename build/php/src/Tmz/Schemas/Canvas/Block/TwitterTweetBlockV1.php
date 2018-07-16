<?php
// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/twitter-tweet-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\TwitterTweetBlock\TwitterTweetBlockV1 as TrinitiCanvasTwitterTweetBlockV1;
use Triniti\Schemas\Canvas\Mixin\TwitterTweetBlock\TwitterTweetBlockV1Mixin as TrinitiCanvasTwitterTweetBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\TwitterTweetBlock\TwitterTweetBlockV1Trait as TrinitiCanvasTwitterTweetBlockV1Trait;

final class TwitterTweetBlockV1 extends AbstractMessage implements
    TwitterTweetBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasTwitterTweetBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasTwitterTweetBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:twitter-tweet-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasTwitterTweetBlockV1Mixin::create(),
            ]
        );
    }
}
