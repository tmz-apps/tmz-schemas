<?php
// @link https://schemas.tmz.com/json-schema/tmz/dam/request/search-assets-response/1-0-0.json#
namespace Tmz\Schemas\Dam\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesResponse\SearchNodesResponseV1 as GdbotsNcrSearchNodesResponseV1;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesResponse\SearchNodesResponseV1Mixin as GdbotsNcrSearchNodesResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1 as GdbotsPbjxResponseV1;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Mixin as GdbotsPbjxResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Trait as GdbotsPbjxResponseV1Trait;
use Triniti\Schemas\Dam\Mixin\SearchAssetsResponse\SearchAssetsResponseV1 as TrinitiDamSearchAssetsResponseV1;
use Triniti\Schemas\Dam\Mixin\SearchAssetsResponse\SearchAssetsResponseV1Mixin as TrinitiDamSearchAssetsResponseV1Mixin;

final class SearchAssetsResponseV1 extends AbstractMessage implements
    SearchAssetsResponse,
    GdbotsPbjxResponseV1,
    GdbotsNcrSearchNodesResponseV1,
    TrinitiDamSearchAssetsResponseV1
{
    use GdbotsPbjxResponseV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:dam:request:search-assets-response:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxResponseV1Mixin::create(),
                GdbotsNcrSearchNodesResponseV1Mixin::create(),
                TrinitiDamSearchAssetsResponseV1Mixin::create(),
            ]
        );
    }
}
