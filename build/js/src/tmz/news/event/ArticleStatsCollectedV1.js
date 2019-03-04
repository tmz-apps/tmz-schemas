// @link https://schemas.tmz.com/json-schema/tmz/news/event/article-stats-collected/1-0-0.json#
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiNewsArticleStatsCollectedV1Mixin from '@triniti/schemas/triniti/news/mixin/article-stats-collected/ArticleStatsCollectedV1Mixin';

export default class ArticleStatsCollectedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:news:event:article-stats-collected:1-0-0', ArticleStatsCollectedV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        TrinitiNewsArticleStatsCollectedV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(ArticleStatsCollectedV1);
MessageResolver.register('tmz:news:event:article-stats-collected', ArticleStatsCollectedV1);
Object.freeze(ArticleStatsCollectedV1);
Object.freeze(ArticleStatsCollectedV1.prototype);
