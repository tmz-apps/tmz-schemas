<?php
// @link https://schemas.tmz.com/json-schema/tmz/ovp/event/video-updated/1-0-0.json#
namespace Tmz\Schemas\Ovp\Event;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\NodeUpdated\NodeUpdatedV1 as GdbotsNcrNodeUpdatedV1;
use Gdbots\Schemas\Ncr\Mixin\NodeUpdated\NodeUpdatedV1Mixin as GdbotsNcrNodeUpdatedV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1 as GdbotsPbjxEventV1;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Mixin as GdbotsPbjxEventV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Trait as GdbotsPbjxEventV1Trait;

final class VideoUpdatedV1 extends AbstractMessage implements
    VideoUpdated,
    GdbotsPbjxEventV1,
    GdbotsNcrNodeUpdatedV1
{
    use GdbotsPbjxEventV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:ovp:event:video-updated:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxEventV1Mixin::create(),
                GdbotsNcrNodeUpdatedV1Mixin::create(),
            ]
        );
    }
}
