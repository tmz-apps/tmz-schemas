<?php
// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/imgur-post-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\ImgurPostBlock\ImgurPostBlockV1 as TrinitiCanvasImgurPostBlockV1;
use Triniti\Schemas\Canvas\Mixin\ImgurPostBlock\ImgurPostBlockV1Mixin as TrinitiCanvasImgurPostBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\ImgurPostBlock\ImgurPostBlockV1Trait as TrinitiCanvasImgurPostBlockV1Trait;

final class ImgurPostBlockV1 extends AbstractMessage implements
    ImgurPostBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasImgurPostBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasImgurPostBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:imgur-post-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasImgurPostBlockV1Mixin::create(),
            ]
        );
    }
}
