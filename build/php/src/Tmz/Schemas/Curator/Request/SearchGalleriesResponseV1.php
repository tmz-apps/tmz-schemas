<?php
// @link http://schemas.tmz.com/json-schema/tmz/curator/request/search-galleries-response/1-0-0.json#
namespace Tmz\Schemas\Curator\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesResponse\SearchNodesResponseV1 as GdbotsNcrSearchNodesResponseV1;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesResponse\SearchNodesResponseV1Mixin as GdbotsNcrSearchNodesResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1 as GdbotsPbjxResponseV1;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Mixin as GdbotsPbjxResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Trait as GdbotsPbjxResponseV1Trait;
use Triniti\Schemas\Curator\Mixin\SearchGalleriesResponse\SearchGalleriesResponseV1 as TrinitiCuratorSearchGalleriesResponseV1;
use Triniti\Schemas\Curator\Mixin\SearchGalleriesResponse\SearchGalleriesResponseV1Mixin as TrinitiCuratorSearchGalleriesResponseV1Mixin;
use Triniti\Schemas\Curator\Mixin\WidgetSearchResponse\WidgetSearchResponseV1 as TrinitiCuratorWidgetSearchResponseV1;
use Triniti\Schemas\Curator\Mixin\WidgetSearchResponse\WidgetSearchResponseV1Mixin as TrinitiCuratorWidgetSearchResponseV1Mixin;

final class SearchGalleriesResponseV1 extends AbstractMessage implements
    SearchGalleriesResponse,
    GdbotsPbjxResponseV1,
    GdbotsNcrSearchNodesResponseV1,
    TrinitiCuratorWidgetSearchResponseV1,
    TrinitiCuratorSearchGalleriesResponseV1
{
    use GdbotsPbjxResponseV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:curator:request:search-galleries-response:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxResponseV1Mixin::create(),
                GdbotsNcrSearchNodesResponseV1Mixin::create(),
                TrinitiCuratorWidgetSearchResponseV1Mixin::create(),
                TrinitiCuratorSearchGalleriesResponseV1Mixin::create(),
            ]
        );
    }
}
