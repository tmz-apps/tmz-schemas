<?php
// @link https://schemas.tmz.com/json-schema/tmz/apollo/request/search-polls-response/1-0-0.json#
namespace Tmz\Schemas\Apollo\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesResponse\SearchNodesResponseV1 as GdbotsNcrSearchNodesResponseV1;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesResponse\SearchNodesResponseV1Mixin as GdbotsNcrSearchNodesResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1 as GdbotsPbjxResponseV1;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Mixin as GdbotsPbjxResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Trait as GdbotsPbjxResponseV1Trait;
use Triniti\Schemas\Apollo\Mixin\SearchPollsResponse\SearchPollsResponseV1 as TrinitiApolloSearchPollsResponseV1;
use Triniti\Schemas\Apollo\Mixin\SearchPollsResponse\SearchPollsResponseV1Mixin as TrinitiApolloSearchPollsResponseV1Mixin;

final class SearchPollsResponseV1 extends AbstractMessage implements
    SearchPollsResponse,
    GdbotsPbjxResponseV1,
    GdbotsNcrSearchNodesResponseV1,
    TrinitiApolloSearchPollsResponseV1
{
    use GdbotsPbjxResponseV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:apollo:request:search-polls-response:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxResponseV1Mixin::create(),
                GdbotsNcrSearchNodesResponseV1Mixin::create(),
                TrinitiApolloSearchPollsResponseV1Mixin::create(),
            ]
        );
    }
}
