<?php
// @link http://schemas.tmz.com/json-schema/tmz/curator/command/sync-teaser/1-0-0.json#
namespace Tmz\Schemas\Curator\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;
use Triniti\Schemas\Curator\Mixin\SyncTeaser\SyncTeaserV1 as TrinitiCuratorSyncTeaserV1;
use Triniti\Schemas\Curator\Mixin\SyncTeaser\SyncTeaserV1Mixin as TrinitiCuratorSyncTeaserV1Mixin;

final class SyncTeaserV1 extends AbstractMessage implements
    SyncTeaser,
    GdbotsPbjxCommandV1,
    TrinitiCuratorSyncTeaserV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:curator:command:sync-teaser:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                TrinitiCuratorSyncTeaserV1Mixin::create(),
            ]
        );
    }
}
