<?php
// @link https://schemas.tmz.com/json-schema/tmz/news/command/publish-article/1-0-0.json#
namespace Tmz\Schemas\News\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\PublishNode\PublishNodeV1 as GdbotsNcrPublishNodeV1;
use Gdbots\Schemas\Ncr\Mixin\PublishNode\PublishNodeV1Mixin as GdbotsNcrPublishNodeV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;

final class PublishArticleV1 extends AbstractMessage implements
    PublishArticle,
    GdbotsPbjxCommandV1,
    GdbotsNcrPublishNodeV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:news:command:publish-article:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                GdbotsNcrPublishNodeV1Mixin::create(),
            ]
        );
    }
}
