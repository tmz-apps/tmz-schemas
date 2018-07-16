<?php
// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/twitter-search-timeline-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\TwitterSearchTimelineBlock\TwitterSearchTimelineBlockV1 as TrinitiCanvasTwitterSearchTimelineBlockV1;
use Triniti\Schemas\Canvas\Mixin\TwitterSearchTimelineBlock\TwitterSearchTimelineBlockV1Mixin as TrinitiCanvasTwitterSearchTimelineBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\TwitterSearchTimelineBlock\TwitterSearchTimelineBlockV1Trait as TrinitiCanvasTwitterSearchTimelineBlockV1Trait;

final class TwitterSearchTimelineBlockV1 extends AbstractMessage implements
    TwitterSearchTimelineBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasTwitterSearchTimelineBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasTwitterSearchTimelineBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:twitter-search-timeline-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasTwitterSearchTimelineBlockV1Mixin::create(),
            ]
        );
    }
}
