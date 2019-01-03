<?php
// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/iframe-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\IframeBlock\IframeBlockV1 as TrinitiCanvasIframeBlockV1;
use Triniti\Schemas\Canvas\Mixin\IframeBlock\IframeBlockV1Mixin as TrinitiCanvasIframeBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\IframeBlock\IframeBlockV1Trait as TrinitiCanvasIframeBlockV1Trait;

final class IframeBlockV1 extends AbstractMessage implements
    IframeBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasIframeBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasIframeBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:iframe-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasIframeBlockV1Mixin::create(),
            ]
        );
    }
}
