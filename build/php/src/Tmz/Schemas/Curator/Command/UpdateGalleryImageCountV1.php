<?php
// @link https://schemas.tmz.com/json-schema/tmz/curator/command/update-gallery-image-count/1-0-0.json#
namespace Tmz\Schemas\Curator\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;
use Triniti\Schemas\Curator\Mixin\UpdateGalleryImageCount\UpdateGalleryImageCountV1 as TrinitiCuratorUpdateGalleryImageCountV1;
use Triniti\Schemas\Curator\Mixin\UpdateGalleryImageCount\UpdateGalleryImageCountV1Mixin as TrinitiCuratorUpdateGalleryImageCountV1Mixin;

final class UpdateGalleryImageCountV1 extends AbstractMessage implements
    UpdateGalleryImageCount,
    GdbotsPbjxCommandV1,
    TrinitiCuratorUpdateGalleryImageCountV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:curator:command:update-gallery-image-count:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                TrinitiCuratorUpdateGalleryImageCountV1Mixin::create(),
            ]
        );
    }
}
