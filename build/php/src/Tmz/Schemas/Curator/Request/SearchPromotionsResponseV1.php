<?php
// @link https://schemas.tmz.com/json-schema/tmz/curator/request/search-promotions-response/1-0-0.json#
namespace Tmz\Schemas\Curator\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesResponse\SearchNodesResponseV1 as GdbotsNcrSearchNodesResponseV1;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesResponse\SearchNodesResponseV1Mixin as GdbotsNcrSearchNodesResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1 as GdbotsPbjxResponseV1;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Mixin as GdbotsPbjxResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Trait as GdbotsPbjxResponseV1Trait;
use Triniti\Schemas\Curator\Mixin\SearchPromotionsResponse\SearchPromotionsResponseV1 as TrinitiCuratorSearchPromotionsResponseV1;
use Triniti\Schemas\Curator\Mixin\SearchPromotionsResponse\SearchPromotionsResponseV1Mixin as TrinitiCuratorSearchPromotionsResponseV1Mixin;

final class SearchPromotionsResponseV1 extends AbstractMessage implements
    SearchPromotionsResponse,
    GdbotsPbjxResponseV1,
    GdbotsNcrSearchNodesResponseV1,
    TrinitiCuratorSearchPromotionsResponseV1
{
    use GdbotsPbjxResponseV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:curator:request:search-promotions-response:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxResponseV1Mixin::create(),
                GdbotsNcrSearchNodesResponseV1Mixin::create(),
                TrinitiCuratorSearchPromotionsResponseV1Mixin::create(),
            ]
        );
    }
}
