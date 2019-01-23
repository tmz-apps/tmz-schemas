<?php
// @link https://schemas.tmz.com/json-schema/tmz/news/command/remove-article-slotting/1-0-0.json#
namespace Tmz\Schemas\News\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;
use Triniti\Schemas\News\Mixin\RemoveArticleSlotting\RemoveArticleSlottingV1 as TrinitiNewsRemoveArticleSlottingV1;
use Triniti\Schemas\News\Mixin\RemoveArticleSlotting\RemoveArticleSlottingV1Mixin as TrinitiNewsRemoveArticleSlottingV1Mixin;

final class RemoveArticleSlottingV1 extends AbstractMessage implements
    RemoveArticleSlotting,
    GdbotsPbjxCommandV1,
    TrinitiNewsRemoveArticleSlottingV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:news:command:remove-article-slotting:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                TrinitiNewsRemoveArticleSlottingV1Mixin::create(),
            ]
        );
    }
}
