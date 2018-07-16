<?php
// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/twitter-collection-timeline-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\TwitterCollectionTimelineBlock\TwitterCollectionTimelineBlockV1 as TrinitiCanvasTwitterCollectionTimelineBlockV1;
use Triniti\Schemas\Canvas\Mixin\TwitterCollectionTimelineBlock\TwitterCollectionTimelineBlockV1Mixin as TrinitiCanvasTwitterCollectionTimelineBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\TwitterCollectionTimelineBlock\TwitterCollectionTimelineBlockV1Trait as TrinitiCanvasTwitterCollectionTimelineBlockV1Trait;

final class TwitterCollectionTimelineBlockV1 extends AbstractMessage implements
    TwitterCollectionTimelineBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasTwitterCollectionTimelineBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasTwitterCollectionTimelineBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:twitter-collection-timeline-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasTwitterCollectionTimelineBlockV1Mixin::create(),
            ]
        );
    }
}
