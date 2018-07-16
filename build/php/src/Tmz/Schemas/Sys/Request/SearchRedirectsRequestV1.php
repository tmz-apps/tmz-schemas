<?php
// @link http://schemas.tmz.com/json-schema/tmz/sys/request/search-redirects-request/1-0-0.json#
namespace Tmz\Schemas\Sys\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1 as GdbotsNcrSearchNodesRequestV1;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1Mixin as GdbotsNcrSearchNodesRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1 as GdbotsPbjxRequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin as GdbotsPbjxRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait as GdbotsPbjxRequestV1Trait;
use Triniti\Schemas\Sys\Mixin\SearchRedirectsRequest\SearchRedirectsRequestV1 as TrinitiSysSearchRedirectsRequestV1;
use Triniti\Schemas\Sys\Mixin\SearchRedirectsRequest\SearchRedirectsRequestV1Mixin as TrinitiSysSearchRedirectsRequestV1Mixin;

final class SearchRedirectsRequestV1 extends AbstractMessage implements
    SearchRedirectsRequest,
    GdbotsPbjxRequestV1,
    GdbotsNcrSearchNodesRequestV1,
    TrinitiSysSearchRedirectsRequestV1
{
    use GdbotsPbjxRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:sys:request:search-redirects-request:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxRequestV1Mixin::create(),
                GdbotsNcrSearchNodesRequestV1Mixin::create(),
                TrinitiSysSearchRedirectsRequestV1Mixin::create(),
            ]
        );
    }
}
