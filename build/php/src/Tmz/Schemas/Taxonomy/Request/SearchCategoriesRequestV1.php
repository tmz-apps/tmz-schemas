<?php
// @link https://schemas.tmz.com/json-schema/tmz/taxonomy/request/search-categories-request/1-0-0.json#
namespace Tmz\Schemas\Taxonomy\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1 as GdbotsNcrSearchNodesRequestV1;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1Mixin as GdbotsNcrSearchNodesRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1 as GdbotsPbjxRequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin as GdbotsPbjxRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait as GdbotsPbjxRequestV1Trait;
use Triniti\Schemas\Taxonomy\Mixin\SearchCategoriesRequest\SearchCategoriesRequestV1 as TrinitiTaxonomySearchCategoriesRequestV1;
use Triniti\Schemas\Taxonomy\Mixin\SearchCategoriesRequest\SearchCategoriesRequestV1Mixin as TrinitiTaxonomySearchCategoriesRequestV1Mixin;

final class SearchCategoriesRequestV1 extends AbstractMessage implements
    SearchCategoriesRequest,
    GdbotsPbjxRequestV1,
    GdbotsNcrSearchNodesRequestV1,
    TrinitiTaxonomySearchCategoriesRequestV1
{
    use GdbotsPbjxRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:taxonomy:request:search-categories-request:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxRequestV1Mixin::create(),
                GdbotsNcrSearchNodesRequestV1Mixin::create(),
                TrinitiTaxonomySearchCategoriesRequestV1Mixin::create(),
            ]
        );
    }
}
