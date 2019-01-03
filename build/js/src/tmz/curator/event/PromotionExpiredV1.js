// @link https://schemas.tmz.com/json-schema/tmz/curator/event/promotion-expired/1-0-0.json#
import GdbotsNcrNodeExpiredV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node-expired/NodeExpiredV1Mixin';
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class PromotionExpiredV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:event:promotion-expired:1-0-0', PromotionExpiredV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsNcrNodeExpiredV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(PromotionExpiredV1);
MessageResolver.register('tmz:curator:event:promotion-expired', PromotionExpiredV1);
Object.freeze(PromotionExpiredV1);
Object.freeze(PromotionExpiredV1.prototype);
