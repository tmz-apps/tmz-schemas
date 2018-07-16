<?php
// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/pinterest-pin-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\PinterestPinBlock\PinterestPinBlockV1 as TrinitiCanvasPinterestPinBlockV1;
use Triniti\Schemas\Canvas\Mixin\PinterestPinBlock\PinterestPinBlockV1Mixin as TrinitiCanvasPinterestPinBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\PinterestPinBlock\PinterestPinBlockV1Trait as TrinitiCanvasPinterestPinBlockV1Trait;

final class PinterestPinBlockV1 extends AbstractMessage implements
    PinterestPinBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasPinterestPinBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasPinterestPinBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:pinterest-pin-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasPinterestPinBlockV1Mixin::create(),
            ]
        );
    }
}
