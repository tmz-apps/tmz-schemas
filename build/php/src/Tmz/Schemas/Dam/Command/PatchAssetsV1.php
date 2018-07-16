<?php
// @link http://schemas.tmz.com/json-schema/tmz/dam/command/patch-assets/1-0-0.json#
namespace Tmz\Schemas\Dam\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\PatchNodes\PatchNodesV1 as GdbotsNcrPatchNodesV1;
use Gdbots\Schemas\Ncr\Mixin\PatchNodes\PatchNodesV1Mixin as GdbotsNcrPatchNodesV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;
use Triniti\Schemas\Dam\Mixin\PatchAssets\PatchAssetsV1 as TrinitiDamPatchAssetsV1;
use Triniti\Schemas\Dam\Mixin\PatchAssets\PatchAssetsV1Mixin as TrinitiDamPatchAssetsV1Mixin;

final class PatchAssetsV1 extends AbstractMessage implements
    PatchAssets,
    GdbotsPbjxCommandV1,
    GdbotsNcrPatchNodesV1,
    TrinitiDamPatchAssetsV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:dam:command:patch-assets:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                GdbotsNcrPatchNodesV1Mixin::create(),
                TrinitiDamPatchAssetsV1Mixin::create(),
            ]
        );
    }
}
