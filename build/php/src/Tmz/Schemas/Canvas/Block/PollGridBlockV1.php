<?php
// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/poll-grid-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\PollGridBlock\PollGridBlockV1 as TrinitiCanvasPollGridBlockV1;
use Triniti\Schemas\Canvas\Mixin\PollGridBlock\PollGridBlockV1Mixin as TrinitiCanvasPollGridBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\PollGridBlock\PollGridBlockV1Trait as TrinitiCanvasPollGridBlockV1Trait;

final class PollGridBlockV1 extends AbstractMessage implements
    PollGridBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasPollGridBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasPollGridBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:poll-grid-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasPollGridBlockV1Mixin::create(),
            ]
        );
    }
}
