<?php
// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/gallery-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\GalleryBlock\GalleryBlockV1 as TrinitiCanvasGalleryBlockV1;
use Triniti\Schemas\Canvas\Mixin\GalleryBlock\GalleryBlockV1Mixin as TrinitiCanvasGalleryBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\GalleryBlock\GalleryBlockV1Trait as TrinitiCanvasGalleryBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\NodeRefBlock\NodeRefBlockV1 as TrinitiCanvasNodeRefBlockV1;
use Triniti\Schemas\Canvas\Mixin\NodeRefBlock\NodeRefBlockV1Mixin as TrinitiCanvasNodeRefBlockV1Mixin;

final class GalleryBlockV1 extends AbstractMessage implements
    GalleryBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasNodeRefBlockV1,
    TrinitiCanvasGalleryBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasGalleryBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:gallery-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasNodeRefBlockV1Mixin::create(),
                TrinitiCanvasGalleryBlockV1Mixin::create(),
            ]
        );
    }
}
