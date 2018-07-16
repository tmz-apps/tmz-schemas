<?php
// @link http://schemas.tmz.com/json-schema/tmz/apollo/request/search-polls-request/1-0-0.json#
namespace Tmz\Schemas\Apollo\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1 as GdbotsNcrSearchNodesRequestV1;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1Mixin as GdbotsNcrSearchNodesRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1 as GdbotsPbjxRequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin as GdbotsPbjxRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait as GdbotsPbjxRequestV1Trait;
use Triniti\Schemas\Apollo\Mixin\SearchPollsRequest\SearchPollsRequestV1 as TrinitiApolloSearchPollsRequestV1;
use Triniti\Schemas\Apollo\Mixin\SearchPollsRequest\SearchPollsRequestV1Mixin as TrinitiApolloSearchPollsRequestV1Mixin;

final class SearchPollsRequestV1 extends AbstractMessage implements
    SearchPollsRequest,
    GdbotsPbjxRequestV1,
    GdbotsNcrSearchNodesRequestV1,
    TrinitiApolloSearchPollsRequestV1
{
    use GdbotsPbjxRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:apollo:request:search-polls-request:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxRequestV1Mixin::create(),
                GdbotsNcrSearchNodesRequestV1Mixin::create(),
                TrinitiApolloSearchPollsRequestV1Mixin::create(),
            ]
        );
    }
}
