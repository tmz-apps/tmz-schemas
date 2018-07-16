<?php
// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/text-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\TextBlock\TextBlockV1 as TrinitiCanvasTextBlockV1;
use Triniti\Schemas\Canvas\Mixin\TextBlock\TextBlockV1Mixin as TrinitiCanvasTextBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\TextBlock\TextBlockV1Trait as TrinitiCanvasTextBlockV1Trait;

final class TextBlockV1 extends AbstractMessage implements
    TextBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasTextBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasTextBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:text-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasTextBlockV1Mixin::create(),
            ]
        );
    }
}
