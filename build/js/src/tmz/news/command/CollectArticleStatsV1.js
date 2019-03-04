// @link https://schemas.tmz.com/json-schema/tmz/news/command/collect-article-stats/1-0-0.json#
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiNewsCollectArticleStatsV1Mixin from '@triniti/schemas/triniti/news/mixin/collect-article-stats/CollectArticleStatsV1Mixin';

export default class CollectArticleStatsV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:news:command:collect-article-stats:1-0-0', CollectArticleStatsV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        TrinitiNewsCollectArticleStatsV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(CollectArticleStatsV1);
MessageResolver.register('tmz:news:command:collect-article-stats', CollectArticleStatsV1);
Object.freeze(CollectArticleStatsV1);
Object.freeze(CollectArticleStatsV1.prototype);
