<?php
// @link https://schemas.tmz.com/json-schema/tmz/news/node/article-stats/1-0-0.json#
namespace Tmz\Schemas\News\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\Indexed\IndexedV1 as GdbotsNcrIndexedV1;
use Gdbots\Schemas\Ncr\Mixin\Indexed\IndexedV1Mixin as GdbotsNcrIndexedV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1 as GdbotsNcrNodeV1;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin as GdbotsNcrNodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Trait as GdbotsNcrNodeV1Trait;
use Triniti\Schemas\News\Mixin\ArticleStats\ArticleStatsV1 as TrinitiNewsArticleStatsV1;
use Triniti\Schemas\News\Mixin\ArticleStats\ArticleStatsV1Mixin as TrinitiNewsArticleStatsV1Mixin;
use Triniti\Schemas\News\Mixin\ArticleStats\ArticleStatsV1Trait as TrinitiNewsArticleStatsV1Trait;

final class ArticleStatsV1 extends AbstractMessage implements
    ArticleStats,
    GdbotsNcrNodeV1,
    TrinitiNewsArticleStatsV1,
    GdbotsNcrIndexedV1
{
    use GdbotsNcrNodeV1Trait;
    use TrinitiNewsArticleStatsV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:news:node:article-stats:1-0-0', __CLASS__,
            [],
            [
                GdbotsNcrNodeV1Mixin::create(),
                TrinitiNewsArticleStatsV1Mixin::create(),
                GdbotsNcrIndexedV1Mixin::create(),
            ]
        );
    }
}
