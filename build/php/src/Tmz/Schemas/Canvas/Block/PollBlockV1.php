<?php
// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/poll-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\NodeRefBlock\NodeRefBlockV1 as TrinitiCanvasNodeRefBlockV1;
use Triniti\Schemas\Canvas\Mixin\NodeRefBlock\NodeRefBlockV1Mixin as TrinitiCanvasNodeRefBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\PollBlock\PollBlockV1 as TrinitiCanvasPollBlockV1;
use Triniti\Schemas\Canvas\Mixin\PollBlock\PollBlockV1Mixin as TrinitiCanvasPollBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\PollBlock\PollBlockV1Trait as TrinitiCanvasPollBlockV1Trait;

final class PollBlockV1 extends AbstractMessage implements
    PollBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasNodeRefBlockV1,
    TrinitiCanvasPollBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasPollBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:poll-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasNodeRefBlockV1Mixin::create(),
                TrinitiCanvasPollBlockV1Mixin::create(),
            ]
        );
    }
}
