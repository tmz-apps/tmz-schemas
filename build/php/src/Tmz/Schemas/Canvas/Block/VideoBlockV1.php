<?php
// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/video-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\NodeRefBlock\NodeRefBlockV1 as TrinitiCanvasNodeRefBlockV1;
use Triniti\Schemas\Canvas\Mixin\NodeRefBlock\NodeRefBlockV1Mixin as TrinitiCanvasNodeRefBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\VideoBlock\VideoBlockV1 as TrinitiCanvasVideoBlockV1;
use Triniti\Schemas\Canvas\Mixin\VideoBlock\VideoBlockV1Mixin as TrinitiCanvasVideoBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\VideoBlock\VideoBlockV1Trait as TrinitiCanvasVideoBlockV1Trait;

final class VideoBlockV1 extends AbstractMessage implements
    VideoBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasNodeRefBlockV1,
    TrinitiCanvasVideoBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasVideoBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:video-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasNodeRefBlockV1Mixin::create(),
                TrinitiCanvasVideoBlockV1Mixin::create(),
            ]
        );
    }
}
