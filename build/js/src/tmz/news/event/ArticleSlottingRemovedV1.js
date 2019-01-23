// @link https://schemas.tmz.com/json-schema/tmz/news/event/article-slotting-removed/1-0-0.json#
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiNewsArticleSlottingRemovedV1Mixin from '@triniti/schemas/triniti/news/mixin/article-slotting-removed/ArticleSlottingRemovedV1Mixin';

export default class ArticleSlottingRemovedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:news:event:article-slotting-removed:1-0-0', ArticleSlottingRemovedV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        TrinitiNewsArticleSlottingRemovedV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(ArticleSlottingRemovedV1);
MessageResolver.register('tmz:news:event:article-slotting-removed', ArticleSlottingRemovedV1);
Object.freeze(ArticleSlottingRemovedV1);
Object.freeze(ArticleSlottingRemovedV1.prototype);
