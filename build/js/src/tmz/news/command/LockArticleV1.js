// @link http://schemas.tmz.com/json-schema/tmz/news/command/lock-article/1-0-0.json#
import GdbotsNcrLockNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/lock-node/LockNodeV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class LockArticleV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:news:command:lock-article:1-0-0', LockArticleV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrLockNodeV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(LockArticleV1);
MessageResolver.register('tmz:news:command:lock-article', LockArticleV1);
Object.freeze(LockArticleV1);
Object.freeze(LockArticleV1.prototype);
