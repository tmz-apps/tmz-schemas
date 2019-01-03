<?php
// @link https://schemas.tmz.com/json-schema/tmz/curator/event/gallery-marked-as-draft/1-0-0.json#
namespace Tmz\Schemas\Curator\Event;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\NodeMarkedAsDraft\NodeMarkedAsDraftV1 as GdbotsNcrNodeMarkedAsDraftV1;
use Gdbots\Schemas\Ncr\Mixin\NodeMarkedAsDraft\NodeMarkedAsDraftV1Mixin as GdbotsNcrNodeMarkedAsDraftV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1 as GdbotsPbjxEventV1;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Mixin as GdbotsPbjxEventV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Trait as GdbotsPbjxEventV1Trait;

final class GalleryMarkedAsDraftV1 extends AbstractMessage implements
    GalleryMarkedAsDraft,
    GdbotsPbjxEventV1,
    GdbotsNcrNodeMarkedAsDraftV1
{
    use GdbotsPbjxEventV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:curator:event:gallery-marked-as-draft:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxEventV1Mixin::create(),
                GdbotsNcrNodeMarkedAsDraftV1Mixin::create(),
            ]
        );
    }
}
