<?php
// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/pinterest-profile-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\PinterestProfileBlock\PinterestProfileBlockV1 as TrinitiCanvasPinterestProfileBlockV1;
use Triniti\Schemas\Canvas\Mixin\PinterestProfileBlock\PinterestProfileBlockV1Mixin as TrinitiCanvasPinterestProfileBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\PinterestProfileBlock\PinterestProfileBlockV1Trait as TrinitiCanvasPinterestProfileBlockV1Trait;

final class PinterestProfileBlockV1 extends AbstractMessage implements
    PinterestProfileBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasPinterestProfileBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasPinterestProfileBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:pinterest-profile-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasPinterestProfileBlockV1Mixin::create(),
            ]
        );
    }
}
