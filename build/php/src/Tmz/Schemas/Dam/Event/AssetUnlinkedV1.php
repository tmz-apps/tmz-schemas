<?php
// @link https://schemas.tmz.com/json-schema/tmz/dam/event/asset-unlinked/1-0-0.json#
namespace Tmz\Schemas\Dam\Event;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1 as GdbotsPbjxEventV1;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Mixin as GdbotsPbjxEventV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Trait as GdbotsPbjxEventV1Trait;
use Triniti\Schemas\Dam\Mixin\AssetUnlinked\AssetUnlinkedV1 as TrinitiDamAssetUnlinkedV1;
use Triniti\Schemas\Dam\Mixin\AssetUnlinked\AssetUnlinkedV1Mixin as TrinitiDamAssetUnlinkedV1Mixin;

final class AssetUnlinkedV1 extends AbstractMessage implements
    AssetUnlinked,
    GdbotsPbjxEventV1,
    TrinitiDamAssetUnlinkedV1
{
    use GdbotsPbjxEventV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:dam:event:asset-unlinked:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxEventV1Mixin::create(),
                TrinitiDamAssetUnlinkedV1Mixin::create(),
            ]
        );
    }
}
