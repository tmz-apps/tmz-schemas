// @link https://schemas.tmz.com/json-schema/tmz/news/node/article-stats/1-0-0.json#
import GdbotsNcrIndexedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/indexed/IndexedV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiNewsArticleStatsV1Mixin from '@triniti/schemas/triniti/news/mixin/article-stats/ArticleStatsV1Mixin';
import TrinitiNewsArticleStatsV1Trait from '@triniti/schemas/triniti/news/mixin/article-stats/ArticleStatsV1Trait';

export default class ArticleStatsV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:news:node:article-stats:1-0-0', ArticleStatsV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        TrinitiNewsArticleStatsV1Mixin.create(),
        GdbotsNcrIndexedV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(ArticleStatsV1);
TrinitiNewsArticleStatsV1Trait(ArticleStatsV1);
MessageResolver.register('tmz:news:node:article-stats', ArticleStatsV1);
Object.freeze(ArticleStatsV1);
Object.freeze(ArticleStatsV1.prototype);
