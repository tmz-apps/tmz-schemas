<?php
// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/spotify-embed-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\SpotifyEmbedBlock\SpotifyEmbedBlockV1 as TrinitiCanvasSpotifyEmbedBlockV1;
use Triniti\Schemas\Canvas\Mixin\SpotifyEmbedBlock\SpotifyEmbedBlockV1Mixin as TrinitiCanvasSpotifyEmbedBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\SpotifyEmbedBlock\SpotifyEmbedBlockV1Trait as TrinitiCanvasSpotifyEmbedBlockV1Trait;

final class SpotifyEmbedBlockV1 extends AbstractMessage implements
    SpotifyEmbedBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasSpotifyEmbedBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasSpotifyEmbedBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:spotify-embed-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasSpotifyEmbedBlockV1Mixin::create(),
            ]
        );
    }
}
