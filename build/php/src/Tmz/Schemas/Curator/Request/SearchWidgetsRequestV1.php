<?php
// @link https://schemas.tmz.com/json-schema/tmz/curator/request/search-widgets-request/1-0-0.json#
namespace Tmz\Schemas\Curator\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1 as GdbotsNcrSearchNodesRequestV1;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1Mixin as GdbotsNcrSearchNodesRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1 as GdbotsPbjxRequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin as GdbotsPbjxRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait as GdbotsPbjxRequestV1Trait;
use Triniti\Schemas\Curator\Mixin\SearchWidgetsRequest\SearchWidgetsRequestV1 as TrinitiCuratorSearchWidgetsRequestV1;
use Triniti\Schemas\Curator\Mixin\SearchWidgetsRequest\SearchWidgetsRequestV1Mixin as TrinitiCuratorSearchWidgetsRequestV1Mixin;

final class SearchWidgetsRequestV1 extends AbstractMessage implements
    SearchWidgetsRequest,
    GdbotsPbjxRequestV1,
    GdbotsNcrSearchNodesRequestV1,
    TrinitiCuratorSearchWidgetsRequestV1
{
    use GdbotsPbjxRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:curator:request:search-widgets-request:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxRequestV1Mixin::create(),
                GdbotsNcrSearchNodesRequestV1Mixin::create(),
                TrinitiCuratorSearchWidgetsRequestV1Mixin::create(),
            ]
        );
    }
}
