<?php
// @link http://schemas.tmz.com/json-schema/tmz/sys/request/search-redirects-response/1-0-0.json#
namespace Tmz\Schemas\Sys\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesResponse\SearchNodesResponseV1 as GdbotsNcrSearchNodesResponseV1;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesResponse\SearchNodesResponseV1Mixin as GdbotsNcrSearchNodesResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1 as GdbotsPbjxResponseV1;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Mixin as GdbotsPbjxResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Trait as GdbotsPbjxResponseV1Trait;
use Triniti\Schemas\Sys\Mixin\SearchRedirectsResponse\SearchRedirectsResponseV1 as TrinitiSysSearchRedirectsResponseV1;
use Triniti\Schemas\Sys\Mixin\SearchRedirectsResponse\SearchRedirectsResponseV1Mixin as TrinitiSysSearchRedirectsResponseV1Mixin;

final class SearchRedirectsResponseV1 extends AbstractMessage implements
    SearchRedirectsResponse,
    GdbotsPbjxResponseV1,
    GdbotsNcrSearchNodesResponseV1,
    TrinitiSysSearchRedirectsResponseV1
{
    use GdbotsPbjxResponseV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:sys:request:search-redirects-response:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxResponseV1Mixin::create(),
                GdbotsNcrSearchNodesResponseV1Mixin::create(),
                TrinitiSysSearchRedirectsResponseV1Mixin::create(),
            ]
        );
    }
}
