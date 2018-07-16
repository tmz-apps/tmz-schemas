<?php
// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/code-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\CodeBlock\CodeBlockV1 as TrinitiCanvasCodeBlockV1;
use Triniti\Schemas\Canvas\Mixin\CodeBlock\CodeBlockV1Mixin as TrinitiCanvasCodeBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\CodeBlock\CodeBlockV1Trait as TrinitiCanvasCodeBlockV1Trait;

final class CodeBlockV1 extends AbstractMessage implements
    CodeBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasCodeBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasCodeBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:code-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasCodeBlockV1Mixin::create(),
            ]
        );
    }
}
