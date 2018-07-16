<?php
// @link http://schemas.tmz.com/json-schema/tmz/dam/request/search-assets-request/1-0-0.json#
namespace Tmz\Schemas\Dam\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1 as GdbotsNcrSearchNodesRequestV1;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1Mixin as GdbotsNcrSearchNodesRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1 as GdbotsPbjxRequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin as GdbotsPbjxRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait as GdbotsPbjxRequestV1Trait;
use Triniti\Schemas\Dam\Mixin\SearchAssetsRequest\SearchAssetsRequestV1 as TrinitiDamSearchAssetsRequestV1;
use Triniti\Schemas\Dam\Mixin\SearchAssetsRequest\SearchAssetsRequestV1Mixin as TrinitiDamSearchAssetsRequestV1Mixin;

final class SearchAssetsRequestV1 extends AbstractMessage implements
    SearchAssetsRequest,
    GdbotsPbjxRequestV1,
    GdbotsNcrSearchNodesRequestV1,
    TrinitiDamSearchAssetsRequestV1
{
    use GdbotsPbjxRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:dam:request:search-assets-request:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxRequestV1Mixin::create(),
                GdbotsNcrSearchNodesRequestV1Mixin::create(),
                TrinitiDamSearchAssetsRequestV1Mixin::create(),
            ]
        );
    }
}
