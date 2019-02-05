<?php
// @link https://schemas.tmz.com/json-schema/tmz/apollo/node/poll-stats/1-0-0.json#
namespace Tmz\Schemas\Apollo\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\Indexed\IndexedV1 as GdbotsNcrIndexedV1;
use Gdbots\Schemas\Ncr\Mixin\Indexed\IndexedV1Mixin as GdbotsNcrIndexedV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1 as GdbotsNcrNodeV1;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin as GdbotsNcrNodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Trait as GdbotsNcrNodeV1Trait;
use Triniti\Schemas\Apollo\Mixin\PollStats\PollStatsV1 as TrinitiApolloPollStatsV1;
use Triniti\Schemas\Apollo\Mixin\PollStats\PollStatsV1Mixin as TrinitiApolloPollStatsV1Mixin;
use Triniti\Schemas\Apollo\Mixin\PollStats\PollStatsV1Trait as TrinitiApolloPollStatsV1Trait;

final class PollStatsV1 extends AbstractMessage implements
    PollStats,
    GdbotsNcrNodeV1,
    TrinitiApolloPollStatsV1,
    GdbotsNcrIndexedV1
{
    use GdbotsNcrNodeV1Trait;
    use TrinitiApolloPollStatsV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:apollo:node:poll-stats:1-0-0', __CLASS__,
            [],
            [
                GdbotsNcrNodeV1Mixin::create(),
                TrinitiApolloPollStatsV1Mixin::create(),
                GdbotsNcrIndexedV1Mixin::create(),
            ]
        );
    }
}
