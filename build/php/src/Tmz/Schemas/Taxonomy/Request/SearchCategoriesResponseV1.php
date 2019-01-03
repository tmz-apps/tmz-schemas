<?php
// @link https://schemas.tmz.com/json-schema/tmz/taxonomy/request/search-categories-response/1-0-0.json#
namespace Tmz\Schemas\Taxonomy\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesResponse\SearchNodesResponseV1 as GdbotsNcrSearchNodesResponseV1;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesResponse\SearchNodesResponseV1Mixin as GdbotsNcrSearchNodesResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1 as GdbotsPbjxResponseV1;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Mixin as GdbotsPbjxResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Trait as GdbotsPbjxResponseV1Trait;
use Triniti\Schemas\Taxonomy\Mixin\SearchCategoriesResponse\SearchCategoriesResponseV1 as TrinitiTaxonomySearchCategoriesResponseV1;
use Triniti\Schemas\Taxonomy\Mixin\SearchCategoriesResponse\SearchCategoriesResponseV1Mixin as TrinitiTaxonomySearchCategoriesResponseV1Mixin;

final class SearchCategoriesResponseV1 extends AbstractMessage implements
    SearchCategoriesResponse,
    GdbotsPbjxResponseV1,
    GdbotsNcrSearchNodesResponseV1,
    TrinitiTaxonomySearchCategoriesResponseV1
{
    use GdbotsPbjxResponseV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:taxonomy:request:search-categories-response:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxResponseV1Mixin::create(),
                GdbotsNcrSearchNodesResponseV1Mixin::create(),
                TrinitiTaxonomySearchCategoriesResponseV1Mixin::create(),
            ]
        );
    }
}
