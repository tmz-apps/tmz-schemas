<?php
// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/soundcloud-audio-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\SoundcloudAudioBlock\SoundcloudAudioBlockV1 as TrinitiCanvasSoundcloudAudioBlockV1;
use Triniti\Schemas\Canvas\Mixin\SoundcloudAudioBlock\SoundcloudAudioBlockV1Mixin as TrinitiCanvasSoundcloudAudioBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\SoundcloudAudioBlock\SoundcloudAudioBlockV1Trait as TrinitiCanvasSoundcloudAudioBlockV1Trait;

final class SoundcloudAudioBlockV1 extends AbstractMessage implements
    SoundcloudAudioBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasSoundcloudAudioBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasSoundcloudAudioBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:soundcloud-audio-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasSoundcloudAudioBlockV1Mixin::create(),
            ]
        );
    }
}
