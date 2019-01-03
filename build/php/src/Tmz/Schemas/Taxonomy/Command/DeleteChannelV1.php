<?php
// @link https://schemas.tmz.com/json-schema/tmz/taxonomy/command/delete-channel/1-0-0.json#
namespace Tmz\Schemas\Taxonomy\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\DeleteNode\DeleteNodeV1 as GdbotsNcrDeleteNodeV1;
use Gdbots\Schemas\Ncr\Mixin\DeleteNode\DeleteNodeV1Mixin as GdbotsNcrDeleteNodeV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;

final class DeleteChannelV1 extends AbstractMessage implements
    DeleteChannel,
    GdbotsPbjxCommandV1,
    GdbotsNcrDeleteNodeV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:taxonomy:command:delete-channel:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                GdbotsNcrDeleteNodeV1Mixin::create(),
            ]
        );
    }
}
