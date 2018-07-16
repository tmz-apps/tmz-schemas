<?php
// @link http://schemas.tmz.com/json-schema/tmz/people/request/search-people-request/1-0-0.json#
namespace Tmz\Schemas\People\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1 as GdbotsNcrSearchNodesRequestV1;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1Mixin as GdbotsNcrSearchNodesRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1 as GdbotsPbjxRequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin as GdbotsPbjxRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait as GdbotsPbjxRequestV1Trait;
use Triniti\Schemas\People\Mixin\SearchPeopleRequest\SearchPeopleRequestV1 as TrinitiPeopleSearchPeopleRequestV1;
use Triniti\Schemas\People\Mixin\SearchPeopleRequest\SearchPeopleRequestV1Mixin as TrinitiPeopleSearchPeopleRequestV1Mixin;

final class SearchPeopleRequestV1 extends AbstractMessage implements
    SearchPeopleRequest,
    GdbotsPbjxRequestV1,
    GdbotsNcrSearchNodesRequestV1,
    TrinitiPeopleSearchPeopleRequestV1
{
    use GdbotsPbjxRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:people:request:search-people-request:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxRequestV1Mixin::create(),
                GdbotsNcrSearchNodesRequestV1Mixin::create(),
                TrinitiPeopleSearchPeopleRequestV1Mixin::create(),
            ]
        );
    }
}
