<?php
// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/tiktok-embed-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\TiktokEmbedBlock\TiktokEmbedBlockV1 as TrinitiCanvasTiktokEmbedBlockV1;
use Triniti\Schemas\Canvas\Mixin\TiktokEmbedBlock\TiktokEmbedBlockV1Mixin as TrinitiCanvasTiktokEmbedBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\TiktokEmbedBlock\TiktokEmbedBlockV1Trait as TrinitiCanvasTiktokEmbedBlockV1Trait;

final class TiktokEmbedBlockV1 extends AbstractMessage implements
    TiktokEmbedBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasTiktokEmbedBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasTiktokEmbedBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:tiktok-embed-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasTiktokEmbedBlockV1Mixin::create(),
            ]
        );
    }
}
