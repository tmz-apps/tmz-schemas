<?php
// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/facebook-video-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\FacebookVideoBlock\FacebookVideoBlockV1 as TrinitiCanvasFacebookVideoBlockV1;
use Triniti\Schemas\Canvas\Mixin\FacebookVideoBlock\FacebookVideoBlockV1Mixin as TrinitiCanvasFacebookVideoBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\FacebookVideoBlock\FacebookVideoBlockV1Trait as TrinitiCanvasFacebookVideoBlockV1Trait;

final class FacebookVideoBlockV1 extends AbstractMessage implements
    FacebookVideoBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasFacebookVideoBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasFacebookVideoBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:facebook-video-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasFacebookVideoBlockV1Mixin::create(),
            ]
        );
    }
}
