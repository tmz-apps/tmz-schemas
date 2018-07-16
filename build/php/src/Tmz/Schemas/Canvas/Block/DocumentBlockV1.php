<?php
// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/document-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\DocumentBlock\DocumentBlockV1 as TrinitiCanvasDocumentBlockV1;
use Triniti\Schemas\Canvas\Mixin\DocumentBlock\DocumentBlockV1Mixin as TrinitiCanvasDocumentBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\DocumentBlock\DocumentBlockV1Trait as TrinitiCanvasDocumentBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\NodeRefBlock\NodeRefBlockV1 as TrinitiCanvasNodeRefBlockV1;
use Triniti\Schemas\Canvas\Mixin\NodeRefBlock\NodeRefBlockV1Mixin as TrinitiCanvasNodeRefBlockV1Mixin;

final class DocumentBlockV1 extends AbstractMessage implements
    DocumentBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasNodeRefBlockV1,
    TrinitiCanvasDocumentBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasDocumentBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:document-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasNodeRefBlockV1Mixin::create(),
                TrinitiCanvasDocumentBlockV1Mixin::create(),
            ]
        );
    }
}
