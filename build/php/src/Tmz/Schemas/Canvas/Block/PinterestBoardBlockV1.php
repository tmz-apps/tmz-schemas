<?php
// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/pinterest-board-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\PinterestBoardBlock\PinterestBoardBlockV1 as TrinitiCanvasPinterestBoardBlockV1;
use Triniti\Schemas\Canvas\Mixin\PinterestBoardBlock\PinterestBoardBlockV1Mixin as TrinitiCanvasPinterestBoardBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\PinterestBoardBlock\PinterestBoardBlockV1Trait as TrinitiCanvasPinterestBoardBlockV1Trait;

final class PinterestBoardBlockV1 extends AbstractMessage implements
    PinterestBoardBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasPinterestBoardBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasPinterestBoardBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:pinterest-board-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasPinterestBoardBlockV1Mixin::create(),
            ]
        );
    }
}
