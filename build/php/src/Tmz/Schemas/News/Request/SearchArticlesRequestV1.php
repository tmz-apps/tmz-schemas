<?php
// @link http://schemas.tmz.com/json-schema/tmz/news/request/search-articles-request/1-0-0.json#
namespace Tmz\Schemas\News\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1 as GdbotsNcrSearchNodesRequestV1;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1Mixin as GdbotsNcrSearchNodesRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1 as GdbotsPbjxRequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin as GdbotsPbjxRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait as GdbotsPbjxRequestV1Trait;
use Triniti\Schemas\Curator\Mixin\WidgetSearchRequest\WidgetSearchRequestV1 as TrinitiCuratorWidgetSearchRequestV1;
use Triniti\Schemas\Curator\Mixin\WidgetSearchRequest\WidgetSearchRequestV1Mixin as TrinitiCuratorWidgetSearchRequestV1Mixin;
use Triniti\Schemas\News\Mixin\SearchArticlesRequest\SearchArticlesRequestV1 as TrinitiNewsSearchArticlesRequestV1;
use Triniti\Schemas\News\Mixin\SearchArticlesRequest\SearchArticlesRequestV1Mixin as TrinitiNewsSearchArticlesRequestV1Mixin;

final class SearchArticlesRequestV1 extends AbstractMessage implements
    SearchArticlesRequest,
    GdbotsPbjxRequestV1,
    GdbotsNcrSearchNodesRequestV1,
    TrinitiNewsSearchArticlesRequestV1,
    TrinitiCuratorWidgetSearchRequestV1
{
    use GdbotsPbjxRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:news:request:search-articles-request:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxRequestV1Mixin::create(),
                GdbotsNcrSearchNodesRequestV1Mixin::create(),
                TrinitiNewsSearchArticlesRequestV1Mixin::create(),
                TrinitiCuratorWidgetSearchRequestV1Mixin::create(),
            ]
        );
    }
}
