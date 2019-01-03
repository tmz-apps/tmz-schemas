<?php
// @link https://schemas.tmz.com/json-schema/tmz/boost/request/search-sponsors-request/1-0-0.json#
namespace Tmz\Schemas\Boost\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1 as GdbotsNcrSearchNodesRequestV1;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1Mixin as GdbotsNcrSearchNodesRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1 as GdbotsPbjxRequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin as GdbotsPbjxRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait as GdbotsPbjxRequestV1Trait;
use Triniti\Schemas\Boost\Mixin\SearchSponsorsRequest\SearchSponsorsRequestV1 as TrinitiBoostSearchSponsorsRequestV1;
use Triniti\Schemas\Boost\Mixin\SearchSponsorsRequest\SearchSponsorsRequestV1Mixin as TrinitiBoostSearchSponsorsRequestV1Mixin;

final class SearchSponsorsRequestV1 extends AbstractMessage implements
    SearchSponsorsRequest,
    GdbotsPbjxRequestV1,
    GdbotsNcrSearchNodesRequestV1,
    TrinitiBoostSearchSponsorsRequestV1
{
    use GdbotsPbjxRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:boost:request:search-sponsors-request:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxRequestV1Mixin::create(),
                GdbotsNcrSearchNodesRequestV1Mixin::create(),
                TrinitiBoostSearchSponsorsRequestV1Mixin::create(),
            ]
        );
    }
}
