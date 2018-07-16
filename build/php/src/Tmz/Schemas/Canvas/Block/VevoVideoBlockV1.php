<?php
// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/vevo-video-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\VevoVideoBlock\VevoVideoBlockV1 as TrinitiCanvasVevoVideoBlockV1;
use Triniti\Schemas\Canvas\Mixin\VevoVideoBlock\VevoVideoBlockV1Mixin as TrinitiCanvasVevoVideoBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\VevoVideoBlock\VevoVideoBlockV1Trait as TrinitiCanvasVevoVideoBlockV1Trait;

final class VevoVideoBlockV1 extends AbstractMessage implements
    VevoVideoBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasVevoVideoBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasVevoVideoBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:vevo-video-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasVevoVideoBlockV1Mixin::create(),
            ]
        );
    }
}
