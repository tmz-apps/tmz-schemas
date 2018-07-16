<?php
// @link http://schemas.tmz.com/json-schema/tmz/dam/command/link-assets/1-0-0.json#
namespace Tmz\Schemas\Dam\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;
use Triniti\Schemas\Dam\Mixin\LinkAssets\LinkAssetsV1 as TrinitiDamLinkAssetsV1;
use Triniti\Schemas\Dam\Mixin\LinkAssets\LinkAssetsV1Mixin as TrinitiDamLinkAssetsV1Mixin;

final class LinkAssetsV1 extends AbstractMessage implements
    LinkAssets,
    GdbotsPbjxCommandV1,
    TrinitiDamLinkAssetsV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:dam:command:link-assets:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                TrinitiDamLinkAssetsV1Mixin::create(),
            ]
        );
    }
}
