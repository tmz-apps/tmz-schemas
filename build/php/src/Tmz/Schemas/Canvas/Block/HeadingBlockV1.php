<?php
// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/heading-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\HeadingBlock\HeadingBlockV1 as TrinitiCanvasHeadingBlockV1;
use Triniti\Schemas\Canvas\Mixin\HeadingBlock\HeadingBlockV1Mixin as TrinitiCanvasHeadingBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\HeadingBlock\HeadingBlockV1Trait as TrinitiCanvasHeadingBlockV1Trait;

final class HeadingBlockV1 extends AbstractMessage implements
    HeadingBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasHeadingBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasHeadingBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:heading-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasHeadingBlockV1Mixin::create(),
            ]
        );
    }
}
