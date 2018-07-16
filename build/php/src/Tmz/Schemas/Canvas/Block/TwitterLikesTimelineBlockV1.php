<?php
// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/twitter-likes-timeline-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\TwitterLikesTimelineBlock\TwitterLikesTimelineBlockV1 as TrinitiCanvasTwitterLikesTimelineBlockV1;
use Triniti\Schemas\Canvas\Mixin\TwitterLikesTimelineBlock\TwitterLikesTimelineBlockV1Mixin as TrinitiCanvasTwitterLikesTimelineBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\TwitterLikesTimelineBlock\TwitterLikesTimelineBlockV1Trait as TrinitiCanvasTwitterLikesTimelineBlockV1Trait;

final class TwitterLikesTimelineBlockV1 extends AbstractMessage implements
    TwitterLikesTimelineBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasTwitterLikesTimelineBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasTwitterLikesTimelineBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:twitter-likes-timeline-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasTwitterLikesTimelineBlockV1Mixin::create(),
            ]
        );
    }
}
