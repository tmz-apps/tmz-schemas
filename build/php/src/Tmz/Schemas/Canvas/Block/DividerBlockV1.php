<?php
// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/divider-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\DividerBlock\DividerBlockV1 as TrinitiCanvasDividerBlockV1;
use Triniti\Schemas\Canvas\Mixin\DividerBlock\DividerBlockV1Mixin as TrinitiCanvasDividerBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\DividerBlock\DividerBlockV1Trait as TrinitiCanvasDividerBlockV1Trait;

final class DividerBlockV1 extends AbstractMessage implements
    DividerBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasDividerBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasDividerBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:divider-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasDividerBlockV1Mixin::create(),
            ]
        );
    }
}
