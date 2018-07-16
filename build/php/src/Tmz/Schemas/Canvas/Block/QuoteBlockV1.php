<?php
// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/quote-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\QuoteBlock\QuoteBlockV1 as TrinitiCanvasQuoteBlockV1;
use Triniti\Schemas\Canvas\Mixin\QuoteBlock\QuoteBlockV1Mixin as TrinitiCanvasQuoteBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\QuoteBlock\QuoteBlockV1Trait as TrinitiCanvasQuoteBlockV1Trait;

final class QuoteBlockV1 extends AbstractMessage implements
    QuoteBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasQuoteBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasQuoteBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:quote-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasQuoteBlockV1Mixin::create(),
            ]
        );
    }
}
