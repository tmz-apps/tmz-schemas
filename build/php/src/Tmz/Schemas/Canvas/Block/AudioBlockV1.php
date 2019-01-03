<?php
// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/audio-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\AudioBlock\AudioBlockV1 as TrinitiCanvasAudioBlockV1;
use Triniti\Schemas\Canvas\Mixin\AudioBlock\AudioBlockV1Mixin as TrinitiCanvasAudioBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\AudioBlock\AudioBlockV1Trait as TrinitiCanvasAudioBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\NodeRefBlock\NodeRefBlockV1 as TrinitiCanvasNodeRefBlockV1;
use Triniti\Schemas\Canvas\Mixin\NodeRefBlock\NodeRefBlockV1Mixin as TrinitiCanvasNodeRefBlockV1Mixin;

final class AudioBlockV1 extends AbstractMessage implements
    AudioBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasNodeRefBlockV1,
    TrinitiCanvasAudioBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasAudioBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:audio-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasNodeRefBlockV1Mixin::create(),
                TrinitiCanvasAudioBlockV1Mixin::create(),
            ]
        );
    }
}
