<?php
// @link https://schemas.tmz.com/json-schema/tmz/dam/event/asset-linked/1-0-0.json#
namespace Tmz\Schemas\Dam\Event;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1 as GdbotsPbjxEventV1;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Mixin as GdbotsPbjxEventV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Trait as GdbotsPbjxEventV1Trait;
use Triniti\Schemas\Dam\Mixin\AssetLinked\AssetLinkedV1 as TrinitiDamAssetLinkedV1;
use Triniti\Schemas\Dam\Mixin\AssetLinked\AssetLinkedV1Mixin as TrinitiDamAssetLinkedV1Mixin;

final class AssetLinkedV1 extends AbstractMessage implements
    AssetLinked,
    GdbotsPbjxEventV1,
    TrinitiDamAssetLinkedV1
{
    use GdbotsPbjxEventV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:dam:event:asset-linked:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxEventV1Mixin::create(),
                TrinitiDamAssetLinkedV1Mixin::create(),
            ]
        );
    }
}
