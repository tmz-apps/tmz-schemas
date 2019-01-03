// @link https://schemas.tmz.com/json-schema/tmz/curator/command/expire-promotion/1-0-0.json#
import GdbotsNcrExpireNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/expire-node/ExpireNodeV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class ExpirePromotionV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:command:expire-promotion:1-0-0', ExpirePromotionV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrExpireNodeV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(ExpirePromotionV1);
MessageResolver.register('tmz:curator:command:expire-promotion', ExpirePromotionV1);
Object.freeze(ExpirePromotionV1);
Object.freeze(ExpirePromotionV1.prototype);
