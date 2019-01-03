<?php
// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/youtube-playlist-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\YoutubePlaylistBlock\YoutubePlaylistBlockV1 as TrinitiCanvasYoutubePlaylistBlockV1;
use Triniti\Schemas\Canvas\Mixin\YoutubePlaylistBlock\YoutubePlaylistBlockV1Mixin as TrinitiCanvasYoutubePlaylistBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\YoutubePlaylistBlock\YoutubePlaylistBlockV1Trait as TrinitiCanvasYoutubePlaylistBlockV1Trait;

final class YoutubePlaylistBlockV1 extends AbstractMessage implements
    YoutubePlaylistBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasYoutubePlaylistBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasYoutubePlaylistBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:youtube-playlist-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasYoutubePlaylistBlockV1Mixin::create(),
            ]
        );
    }
}
