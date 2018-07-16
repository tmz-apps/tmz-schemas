<?php
// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/vimeo-video-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\VimeoVideoBlock\VimeoVideoBlockV1 as TrinitiCanvasVimeoVideoBlockV1;
use Triniti\Schemas\Canvas\Mixin\VimeoVideoBlock\VimeoVideoBlockV1Mixin as TrinitiCanvasVimeoVideoBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\VimeoVideoBlock\VimeoVideoBlockV1Trait as TrinitiCanvasVimeoVideoBlockV1Trait;

final class VimeoVideoBlockV1 extends AbstractMessage implements
    VimeoVideoBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasVimeoVideoBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasVimeoVideoBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:vimeo-video-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasVimeoVideoBlockV1Mixin::create(),
            ]
        );
    }
}
