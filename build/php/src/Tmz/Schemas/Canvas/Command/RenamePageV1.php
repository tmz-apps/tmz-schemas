<?php
// @link https://schemas.tmz.com/json-schema/tmz/canvas/command/rename-page/1-0-0.json#
namespace Tmz\Schemas\Canvas\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\RenameNode\RenameNodeV1 as GdbotsNcrRenameNodeV1;
use Gdbots\Schemas\Ncr\Mixin\RenameNode\RenameNodeV1Mixin as GdbotsNcrRenameNodeV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;

final class RenamePageV1 extends AbstractMessage implements
    RenamePage,
    GdbotsPbjxCommandV1,
    GdbotsNcrRenameNodeV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:command:rename-page:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                GdbotsNcrRenameNodeV1Mixin::create(),
            ]
        );
    }
}
