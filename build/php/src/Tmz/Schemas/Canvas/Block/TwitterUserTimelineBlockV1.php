<?php
// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/twitter-user-timeline-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\TwitterUserTimelineBlock\TwitterUserTimelineBlockV1 as TrinitiCanvasTwitterUserTimelineBlockV1;
use Triniti\Schemas\Canvas\Mixin\TwitterUserTimelineBlock\TwitterUserTimelineBlockV1Mixin as TrinitiCanvasTwitterUserTimelineBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\TwitterUserTimelineBlock\TwitterUserTimelineBlockV1Trait as TrinitiCanvasTwitterUserTimelineBlockV1Trait;

final class TwitterUserTimelineBlockV1 extends AbstractMessage implements
    TwitterUserTimelineBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasTwitterUserTimelineBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasTwitterUserTimelineBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:twitter-user-timeline-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasTwitterUserTimelineBlockV1Mixin::create(),
            ]
        );
    }
}
