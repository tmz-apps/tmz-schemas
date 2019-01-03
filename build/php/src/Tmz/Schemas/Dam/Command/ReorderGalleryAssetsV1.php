<?php
// @link https://schemas.tmz.com/json-schema/tmz/dam/command/reorder-gallery-assets/1-0-0.json#
namespace Tmz\Schemas\Dam\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;
use Triniti\Schemas\Dam\Mixin\ReorderGalleryAssets\ReorderGalleryAssetsV1 as TrinitiDamReorderGalleryAssetsV1;
use Triniti\Schemas\Dam\Mixin\ReorderGalleryAssets\ReorderGalleryAssetsV1Mixin as TrinitiDamReorderGalleryAssetsV1Mixin;

final class ReorderGalleryAssetsV1 extends AbstractMessage implements
    ReorderGalleryAssets,
    GdbotsPbjxCommandV1,
    TrinitiDamReorderGalleryAssetsV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:dam:command:reorder-gallery-assets:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                TrinitiDamReorderGalleryAssetsV1Mixin::create(),
            ]
        );
    }
}
