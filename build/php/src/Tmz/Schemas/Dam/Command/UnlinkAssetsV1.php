<?php
// @link https://schemas.tmz.com/json-schema/tmz/dam/command/unlink-assets/1-0-0.json#
namespace Tmz\Schemas\Dam\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;
use Triniti\Schemas\Dam\Mixin\UnlinkAssets\UnlinkAssetsV1 as TrinitiDamUnlinkAssetsV1;
use Triniti\Schemas\Dam\Mixin\UnlinkAssets\UnlinkAssetsV1Mixin as TrinitiDamUnlinkAssetsV1Mixin;

final class UnlinkAssetsV1 extends AbstractMessage implements
    UnlinkAssets,
    GdbotsPbjxCommandV1,
    TrinitiDamUnlinkAssetsV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:dam:command:unlink-assets:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                TrinitiDamUnlinkAssetsV1Mixin::create(),
            ]
        );
    }
}
