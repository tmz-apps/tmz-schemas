<?php
// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/google-map-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\GoogleMapBlock\GoogleMapBlockV1 as TrinitiCanvasGoogleMapBlockV1;
use Triniti\Schemas\Canvas\Mixin\GoogleMapBlock\GoogleMapBlockV1Mixin as TrinitiCanvasGoogleMapBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\GoogleMapBlock\GoogleMapBlockV1Trait as TrinitiCanvasGoogleMapBlockV1Trait;

final class GoogleMapBlockV1 extends AbstractMessage implements
    GoogleMapBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasGoogleMapBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasGoogleMapBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:google-map-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasGoogleMapBlockV1Mixin::create(),
            ]
        );
    }
}
