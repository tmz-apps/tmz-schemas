<?php
// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/spotify-track-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\SpotifyTrackBlock\SpotifyTrackBlockV1 as TrinitiCanvasSpotifyTrackBlockV1;
use Triniti\Schemas\Canvas\Mixin\SpotifyTrackBlock\SpotifyTrackBlockV1Mixin as TrinitiCanvasSpotifyTrackBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\SpotifyTrackBlock\SpotifyTrackBlockV1Trait as TrinitiCanvasSpotifyTrackBlockV1Trait;

final class SpotifyTrackBlockV1 extends AbstractMessage implements
    SpotifyTrackBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasSpotifyTrackBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasSpotifyTrackBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:spotify-track-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasSpotifyTrackBlockV1Mixin::create(),
            ]
        );
    }
}
