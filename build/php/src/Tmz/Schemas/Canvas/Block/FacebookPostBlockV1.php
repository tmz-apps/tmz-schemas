<?php
// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/facebook-post-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\FacebookPostBlock\FacebookPostBlockV1 as TrinitiCanvasFacebookPostBlockV1;
use Triniti\Schemas\Canvas\Mixin\FacebookPostBlock\FacebookPostBlockV1Mixin as TrinitiCanvasFacebookPostBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\FacebookPostBlock\FacebookPostBlockV1Trait as TrinitiCanvasFacebookPostBlockV1Trait;

final class FacebookPostBlockV1 extends AbstractMessage implements
    FacebookPostBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasFacebookPostBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasFacebookPostBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:facebook-post-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasFacebookPostBlockV1Mixin::create(),
            ]
        );
    }
}
