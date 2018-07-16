<?php
// @link http://schemas.tmz.com/json-schema/tmz/news/command/lock-article/1-0-0.json#
namespace Tmz\Schemas\News\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\LockNode\LockNodeV1 as GdbotsNcrLockNodeV1;
use Gdbots\Schemas\Ncr\Mixin\LockNode\LockNodeV1Mixin as GdbotsNcrLockNodeV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;

final class LockArticleV1 extends AbstractMessage implements
    LockArticle,
    GdbotsPbjxCommandV1,
    GdbotsNcrLockNodeV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:news:command:lock-article:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                GdbotsNcrLockNodeV1Mixin::create(),
            ]
        );
    }
}
