<?php
// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/tumblr-post-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\TumblrPostBlock\TumblrPostBlockV1 as TrinitiCanvasTumblrPostBlockV1;
use Triniti\Schemas\Canvas\Mixin\TumblrPostBlock\TumblrPostBlockV1Mixin as TrinitiCanvasTumblrPostBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\TumblrPostBlock\TumblrPostBlockV1Trait as TrinitiCanvasTumblrPostBlockV1Trait;

final class TumblrPostBlockV1 extends AbstractMessage implements
    TumblrPostBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasTumblrPostBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasTumblrPostBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:tumblr-post-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasTumblrPostBlockV1Mixin::create(),
            ]
        );
    }
}
