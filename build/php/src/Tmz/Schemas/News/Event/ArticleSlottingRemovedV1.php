<?php
// @link https://schemas.tmz.com/json-schema/tmz/news/event/article-slotting-removed/1-0-0.json#
namespace Tmz\Schemas\News\Event;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1 as GdbotsPbjxEventV1;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Mixin as GdbotsPbjxEventV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Trait as GdbotsPbjxEventV1Trait;
use Triniti\Schemas\News\Mixin\ArticleSlottingRemoved\ArticleSlottingRemovedV1 as TrinitiNewsArticleSlottingRemovedV1;
use Triniti\Schemas\News\Mixin\ArticleSlottingRemoved\ArticleSlottingRemovedV1Mixin as TrinitiNewsArticleSlottingRemovedV1Mixin;

final class ArticleSlottingRemovedV1 extends AbstractMessage implements
    ArticleSlottingRemoved,
    GdbotsPbjxEventV1,
    TrinitiNewsArticleSlottingRemovedV1
{
    use GdbotsPbjxEventV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:news:event:article-slotting-removed:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxEventV1Mixin::create(),
                TrinitiNewsArticleSlottingRemovedV1Mixin::create(),
            ]
        );
    }
}
