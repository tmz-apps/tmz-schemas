<?php
// @link http://schemas.tmz.com/json-schema/tmz/curator/command/unpublish-timeline/1-0-0.json#
namespace Tmz\Schemas\Curator\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\UnpublishNode\UnpublishNodeV1 as GdbotsNcrUnpublishNodeV1;
use Gdbots\Schemas\Ncr\Mixin\UnpublishNode\UnpublishNodeV1Mixin as GdbotsNcrUnpublishNodeV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;

final class UnpublishTimelineV1 extends AbstractMessage implements
    UnpublishTimeline,
    GdbotsPbjxCommandV1,
    GdbotsNcrUnpublishNodeV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:curator:command:unpublish-timeline:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                GdbotsNcrUnpublishNodeV1Mixin::create(),
            ]
        );
    }
}
