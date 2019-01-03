<?php
// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/image-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\ImageBlock\ImageBlockV1 as TrinitiCanvasImageBlockV1;
use Triniti\Schemas\Canvas\Mixin\ImageBlock\ImageBlockV1Mixin as TrinitiCanvasImageBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\ImageBlock\ImageBlockV1Trait as TrinitiCanvasImageBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\NodeRefBlock\NodeRefBlockV1 as TrinitiCanvasNodeRefBlockV1;
use Triniti\Schemas\Canvas\Mixin\NodeRefBlock\NodeRefBlockV1Mixin as TrinitiCanvasNodeRefBlockV1Mixin;

final class ImageBlockV1 extends AbstractMessage implements
    ImageBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasNodeRefBlockV1,
    TrinitiCanvasImageBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasImageBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:image-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasNodeRefBlockV1Mixin::create(),
                TrinitiCanvasImageBlockV1Mixin::create(),
            ]
        );
    }
}
