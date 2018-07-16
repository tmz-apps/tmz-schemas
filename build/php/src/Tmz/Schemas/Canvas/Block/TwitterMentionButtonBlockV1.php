<?php
// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/twitter-mention-button-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\TwitterMentionButtonBlock\TwitterMentionButtonBlockV1 as TrinitiCanvasTwitterMentionButtonBlockV1;
use Triniti\Schemas\Canvas\Mixin\TwitterMentionButtonBlock\TwitterMentionButtonBlockV1Mixin as TrinitiCanvasTwitterMentionButtonBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\TwitterMentionButtonBlock\TwitterMentionButtonBlockV1Trait as TrinitiCanvasTwitterMentionButtonBlockV1Trait;

final class TwitterMentionButtonBlockV1 extends AbstractMessage implements
    TwitterMentionButtonBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasTwitterMentionButtonBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasTwitterMentionButtonBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:twitter-mention-button-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasTwitterMentionButtonBlockV1Mixin::create(),
            ]
        );
    }
}
