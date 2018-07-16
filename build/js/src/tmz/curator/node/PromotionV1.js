// @link http://schemas.tmz.com/json-schema/tmz/curator/node/promotion/1-0-0.json#
import GdbotsCommonTaggableV1Mixin from '@gdbots/schemas/gdbots/common/mixin/taggable/TaggableV1Mixin';
import GdbotsNcrExpirableV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/expirable/ExpirableV1Mixin';
import GdbotsNcrIndexedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/indexed/IndexedV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import GdbotsNcrPublishableV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/publishable/PublishableV1Mixin';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCuratorPromotionV1Mixin from '@triniti/schemas/triniti/curator/mixin/promotion/PromotionV1Mixin';
import TrinitiCuratorPromotionV1Trait from '@triniti/schemas/triniti/curator/mixin/promotion/PromotionV1Trait';

export default class PromotionV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:node:promotion:1-0-0', PromotionV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        TrinitiCuratorPromotionV1Mixin.create(),
        GdbotsCommonTaggableV1Mixin.create(),
        GdbotsNcrExpirableV1Mixin.create(),
        GdbotsNcrIndexedV1Mixin.create(),
        GdbotsNcrPublishableV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(PromotionV1);
TrinitiCuratorPromotionV1Trait(PromotionV1);
MessageResolver.register('tmz:curator:node:promotion', PromotionV1);
Object.freeze(PromotionV1);
Object.freeze(PromotionV1.prototype);
