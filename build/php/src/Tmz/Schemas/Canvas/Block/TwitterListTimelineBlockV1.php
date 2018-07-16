<?php
// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/twitter-list-timeline-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\TwitterListTimelineBlock\TwitterListTimelineBlockV1 as TrinitiCanvasTwitterListTimelineBlockV1;
use Triniti\Schemas\Canvas\Mixin\TwitterListTimelineBlock\TwitterListTimelineBlockV1Mixin as TrinitiCanvasTwitterListTimelineBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\TwitterListTimelineBlock\TwitterListTimelineBlockV1Trait as TrinitiCanvasTwitterListTimelineBlockV1Trait;

final class TwitterListTimelineBlockV1 extends AbstractMessage implements
    TwitterListTimelineBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasTwitterListTimelineBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasTwitterListTimelineBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:twitter-list-timeline-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasTwitterListTimelineBlockV1Mixin::create(),
            ]
        );
    }
}
