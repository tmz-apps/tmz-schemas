<?php
// @link http://schemas.tmz.com/json-schema/tmz/people/request/search-people-response/1-0-0.json#
namespace Tmz\Schemas\People\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesResponse\SearchNodesResponseV1 as GdbotsNcrSearchNodesResponseV1;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesResponse\SearchNodesResponseV1Mixin as GdbotsNcrSearchNodesResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1 as GdbotsPbjxResponseV1;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Mixin as GdbotsPbjxResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Trait as GdbotsPbjxResponseV1Trait;
use Triniti\Schemas\People\Mixin\SearchPeopleResponse\SearchPeopleResponseV1 as TrinitiPeopleSearchPeopleResponseV1;
use Triniti\Schemas\People\Mixin\SearchPeopleResponse\SearchPeopleResponseV1Mixin as TrinitiPeopleSearchPeopleResponseV1Mixin;

final class SearchPeopleResponseV1 extends AbstractMessage implements
    SearchPeopleResponse,
    GdbotsPbjxResponseV1,
    GdbotsNcrSearchNodesResponseV1,
    TrinitiPeopleSearchPeopleResponseV1
{
    use GdbotsPbjxResponseV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:people:request:search-people-response:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxResponseV1Mixin::create(),
                GdbotsNcrSearchNodesResponseV1Mixin::create(),
                TrinitiPeopleSearchPeopleResponseV1Mixin::create(),
            ]
        );
    }
}
