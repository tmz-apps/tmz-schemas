<?php
// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/twitter-moment-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\TwitterMomentBlock\TwitterMomentBlockV1 as TrinitiCanvasTwitterMomentBlockV1;
use Triniti\Schemas\Canvas\Mixin\TwitterMomentBlock\TwitterMomentBlockV1Mixin as TrinitiCanvasTwitterMomentBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\TwitterMomentBlock\TwitterMomentBlockV1Trait as TrinitiCanvasTwitterMomentBlockV1Trait;

final class TwitterMomentBlockV1 extends AbstractMessage implements
    TwitterMomentBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasTwitterMomentBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasTwitterMomentBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:twitter-moment-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasTwitterMomentBlockV1Mixin::create(),
            ]
        );
    }
}
