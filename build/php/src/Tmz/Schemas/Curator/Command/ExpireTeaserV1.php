<?php
// @link https://schemas.tmz.com/json-schema/tmz/curator/command/expire-teaser/1-0-0.json#
namespace Tmz\Schemas\Curator\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\ExpireNode\ExpireNodeV1 as GdbotsNcrExpireNodeV1;
use Gdbots\Schemas\Ncr\Mixin\ExpireNode\ExpireNodeV1Mixin as GdbotsNcrExpireNodeV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;

final class ExpireTeaserV1 extends AbstractMessage implements
    ExpireTeaser,
    GdbotsPbjxCommandV1,
    GdbotsNcrExpireNodeV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:curator:command:expire-teaser:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                GdbotsNcrExpireNodeV1Mixin::create(),
            ]
        );
    }
}
