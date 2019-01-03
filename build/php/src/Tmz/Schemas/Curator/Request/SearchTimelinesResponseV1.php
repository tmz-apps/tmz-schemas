<?php
// @link https://schemas.tmz.com/json-schema/tmz/curator/request/search-timelines-response/1-0-0.json#
namespace Tmz\Schemas\Curator\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesResponse\SearchNodesResponseV1 as GdbotsNcrSearchNodesResponseV1;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesResponse\SearchNodesResponseV1Mixin as GdbotsNcrSearchNodesResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1 as GdbotsPbjxResponseV1;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Mixin as GdbotsPbjxResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Trait as GdbotsPbjxResponseV1Trait;
use Triniti\Schemas\Curator\Mixin\SearchTimelinesResponse\SearchTimelinesResponseV1 as TrinitiCuratorSearchTimelinesResponseV1;
use Triniti\Schemas\Curator\Mixin\SearchTimelinesResponse\SearchTimelinesResponseV1Mixin as TrinitiCuratorSearchTimelinesResponseV1Mixin;

final class SearchTimelinesResponseV1 extends AbstractMessage implements
    SearchTimelinesResponse,
    GdbotsPbjxResponseV1,
    GdbotsNcrSearchNodesResponseV1,
    TrinitiCuratorSearchTimelinesResponseV1
{
    use GdbotsPbjxResponseV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:curator:request:search-timelines-response:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxResponseV1Mixin::create(),
                GdbotsNcrSearchNodesResponseV1Mixin::create(),
                TrinitiCuratorSearchTimelinesResponseV1Mixin::create(),
            ]
        );
    }
}
