<?php
// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/twitter-video-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\TwitterVideoBlock\TwitterVideoBlockV1 as TrinitiCanvasTwitterVideoBlockV1;
use Triniti\Schemas\Canvas\Mixin\TwitterVideoBlock\TwitterVideoBlockV1Mixin as TrinitiCanvasTwitterVideoBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\TwitterVideoBlock\TwitterVideoBlockV1Trait as TrinitiCanvasTwitterVideoBlockV1Trait;

final class TwitterVideoBlockV1 extends AbstractMessage implements
    TwitterVideoBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasTwitterVideoBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasTwitterVideoBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:twitter-video-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasTwitterVideoBlockV1Mixin::create(),
            ]
        );
    }
}
