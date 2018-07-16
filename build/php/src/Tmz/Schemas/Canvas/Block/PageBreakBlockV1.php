<?php
// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/page-break-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\PageBreakBlock\PageBreakBlockV1 as TrinitiCanvasPageBreakBlockV1;
use Triniti\Schemas\Canvas\Mixin\PageBreakBlock\PageBreakBlockV1Mixin as TrinitiCanvasPageBreakBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\PageBreakBlock\PageBreakBlockV1Trait as TrinitiCanvasPageBreakBlockV1Trait;

final class PageBreakBlockV1 extends AbstractMessage implements
    PageBreakBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasPageBreakBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasPageBreakBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:page-break-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasPageBreakBlockV1Mixin::create(),
            ]
        );
    }
}
