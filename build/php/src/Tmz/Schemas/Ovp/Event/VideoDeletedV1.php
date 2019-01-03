<?php
// @link https://schemas.tmz.com/json-schema/tmz/ovp/event/video-deleted/1-0-0.json#
namespace Tmz\Schemas\Ovp\Event;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\NodeDeleted\NodeDeletedV1 as GdbotsNcrNodeDeletedV1;
use Gdbots\Schemas\Ncr\Mixin\NodeDeleted\NodeDeletedV1Mixin as GdbotsNcrNodeDeletedV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1 as GdbotsPbjxEventV1;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Mixin as GdbotsPbjxEventV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Trait as GdbotsPbjxEventV1Trait;

final class VideoDeletedV1 extends AbstractMessage implements
    VideoDeleted,
    GdbotsPbjxEventV1,
    GdbotsNcrNodeDeletedV1
{
    use GdbotsPbjxEventV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:ovp:event:video-deleted:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxEventV1Mixin::create(),
                GdbotsNcrNodeDeletedV1Mixin::create(),
            ]
        );
    }
}
