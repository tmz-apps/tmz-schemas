<?php
// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/youtube-video-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\YoutubeVideoBlock\YoutubeVideoBlockV1 as TrinitiCanvasYoutubeVideoBlockV1;
use Triniti\Schemas\Canvas\Mixin\YoutubeVideoBlock\YoutubeVideoBlockV1Mixin as TrinitiCanvasYoutubeVideoBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\YoutubeVideoBlock\YoutubeVideoBlockV1Trait as TrinitiCanvasYoutubeVideoBlockV1Trait;

final class YoutubeVideoBlockV1 extends AbstractMessage implements
    YoutubeVideoBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasYoutubeVideoBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasYoutubeVideoBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:youtube-video-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasYoutubeVideoBlockV1Mixin::create(),
            ]
        );
    }
}
