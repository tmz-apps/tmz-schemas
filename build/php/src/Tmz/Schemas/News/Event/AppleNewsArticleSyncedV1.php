<?php
// @link https://schemas.tmz.com/json-schema/tmz/news/event/apple-news-article-synced/1-0-0.json#
namespace Tmz\Schemas\News\Event;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1 as GdbotsPbjxEventV1;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Mixin as GdbotsPbjxEventV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Trait as GdbotsPbjxEventV1Trait;
use Triniti\Schemas\News\Mixin\AppleNewsArticleSynced\AppleNewsArticleSyncedV1 as TrinitiNewsAppleNewsArticleSyncedV1;
use Triniti\Schemas\News\Mixin\AppleNewsArticleSynced\AppleNewsArticleSyncedV1Mixin as TrinitiNewsAppleNewsArticleSyncedV1Mixin;

final class AppleNewsArticleSyncedV1 extends AbstractMessage implements
    AppleNewsArticleSynced,
    GdbotsPbjxEventV1,
    TrinitiNewsAppleNewsArticleSyncedV1
{
    use GdbotsPbjxEventV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:news:event:apple-news-article-synced:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxEventV1Mixin::create(),
                TrinitiNewsAppleNewsArticleSyncedV1Mixin::create(),
            ]
        );
    }
}
