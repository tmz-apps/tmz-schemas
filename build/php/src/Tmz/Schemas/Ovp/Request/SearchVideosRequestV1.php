<?php
// @link http://schemas.tmz.com/json-schema/tmz/ovp/request/search-videos-request/1-0-0.json#
namespace Tmz\Schemas\Ovp\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1 as GdbotsNcrSearchNodesRequestV1;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1Mixin as GdbotsNcrSearchNodesRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1 as GdbotsPbjxRequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin as GdbotsPbjxRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait as GdbotsPbjxRequestV1Trait;
use Triniti\Schemas\Ovp\Mixin\SearchVideosRequest\SearchVideosRequestV1 as TrinitiOvpSearchVideosRequestV1;
use Triniti\Schemas\Ovp\Mixin\SearchVideosRequest\SearchVideosRequestV1Mixin as TrinitiOvpSearchVideosRequestV1Mixin;

final class SearchVideosRequestV1 extends AbstractMessage implements
    SearchVideosRequest,
    GdbotsPbjxRequestV1,
    GdbotsNcrSearchNodesRequestV1,
    TrinitiOvpSearchVideosRequestV1
{
    use GdbotsPbjxRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:ovp:request:search-videos-request:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxRequestV1Mixin::create(),
                GdbotsNcrSearchNodesRequestV1Mixin::create(),
                TrinitiOvpSearchVideosRequestV1Mixin::create(),
            ]
        );
    }
}
