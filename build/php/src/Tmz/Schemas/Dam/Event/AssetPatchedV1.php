<?php
// @link https://schemas.tmz.com/json-schema/tmz/dam/event/asset-patched/1-0-0.json#
namespace Tmz\Schemas\Dam\Event;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\NodePatched\NodePatchedV1 as GdbotsNcrNodePatchedV1;
use Gdbots\Schemas\Ncr\Mixin\NodePatched\NodePatchedV1Mixin as GdbotsNcrNodePatchedV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1 as GdbotsPbjxEventV1;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Mixin as GdbotsPbjxEventV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Trait as GdbotsPbjxEventV1Trait;
use Triniti\Schemas\Dam\Mixin\AssetPatched\AssetPatchedV1 as TrinitiDamAssetPatchedV1;
use Triniti\Schemas\Dam\Mixin\AssetPatched\AssetPatchedV1Mixin as TrinitiDamAssetPatchedV1Mixin;

final class AssetPatchedV1 extends AbstractMessage implements
    AssetPatched,
    GdbotsPbjxEventV1,
    GdbotsNcrNodePatchedV1,
    TrinitiDamAssetPatchedV1
{
    use GdbotsPbjxEventV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:dam:event:asset-patched:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxEventV1Mixin::create(),
                GdbotsNcrNodePatchedV1Mixin::create(),
                TrinitiDamAssetPatchedV1Mixin::create(),
            ]
        );
    }
}
