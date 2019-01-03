// @link https://schemas.tmz.com/json-schema/tmz/news/command/mark-article-as-pending/1-0-0.json#
import GdbotsNcrMarkNodeAsPendingV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/mark-node-as-pending/MarkNodeAsPendingV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class MarkArticleAsPendingV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:news:command:mark-article-as-pending:1-0-0', MarkArticleAsPendingV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrMarkNodeAsPendingV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(MarkArticleAsPendingV1);
MessageResolver.register('tmz:news:command:mark-article-as-pending', MarkArticleAsPendingV1);
Object.freeze(MarkArticleAsPendingV1);
Object.freeze(MarkArticleAsPendingV1.prototype);
