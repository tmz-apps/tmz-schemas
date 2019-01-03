<?php
// @link https://schemas.tmz.com/json-schema/tmz/curator/request/search-timelines-request/1-0-0.json#
namespace Tmz\Schemas\Curator\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1 as GdbotsNcrSearchNodesRequestV1;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1Mixin as GdbotsNcrSearchNodesRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1 as GdbotsPbjxRequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin as GdbotsPbjxRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait as GdbotsPbjxRequestV1Trait;
use Triniti\Schemas\Curator\Mixin\SearchTimelinesRequest\SearchTimelinesRequestV1 as TrinitiCuratorSearchTimelinesRequestV1;
use Triniti\Schemas\Curator\Mixin\SearchTimelinesRequest\SearchTimelinesRequestV1Mixin as TrinitiCuratorSearchTimelinesRequestV1Mixin;

final class SearchTimelinesRequestV1 extends AbstractMessage implements
    SearchTimelinesRequest,
    GdbotsPbjxRequestV1,
    GdbotsNcrSearchNodesRequestV1,
    TrinitiCuratorSearchTimelinesRequestV1
{
    use GdbotsPbjxRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:curator:request:search-timelines-request:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxRequestV1Mixin::create(),
                GdbotsNcrSearchNodesRequestV1Mixin::create(),
                TrinitiCuratorSearchTimelinesRequestV1Mixin::create(),
            ]
        );
    }
}
