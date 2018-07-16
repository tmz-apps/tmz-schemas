<?php
// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/twitter-hashtag-button-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\TwitterHashtagButtonBlock\TwitterHashtagButtonBlockV1 as TrinitiCanvasTwitterHashtagButtonBlockV1;
use Triniti\Schemas\Canvas\Mixin\TwitterHashtagButtonBlock\TwitterHashtagButtonBlockV1Mixin as TrinitiCanvasTwitterHashtagButtonBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\TwitterHashtagButtonBlock\TwitterHashtagButtonBlockV1Trait as TrinitiCanvasTwitterHashtagButtonBlockV1Trait;

final class TwitterHashtagButtonBlockV1 extends AbstractMessage implements
    TwitterHashtagButtonBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasTwitterHashtagButtonBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasTwitterHashtagButtonBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:twitter-hashtag-button-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasTwitterHashtagButtonBlockV1Mixin::create(),
            ]
        );
    }
}
