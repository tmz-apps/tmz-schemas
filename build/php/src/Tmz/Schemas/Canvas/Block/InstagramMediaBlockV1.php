<?php
// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/instagram-media-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\InstagramMediaBlock\InstagramMediaBlockV1 as TrinitiCanvasInstagramMediaBlockV1;
use Triniti\Schemas\Canvas\Mixin\InstagramMediaBlock\InstagramMediaBlockV1Mixin as TrinitiCanvasInstagramMediaBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\InstagramMediaBlock\InstagramMediaBlockV1Trait as TrinitiCanvasInstagramMediaBlockV1Trait;

final class InstagramMediaBlockV1 extends AbstractMessage implements
    InstagramMediaBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasInstagramMediaBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasInstagramMediaBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:instagram-media-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasInstagramMediaBlockV1Mixin::create(),
            ]
        );
    }
}
