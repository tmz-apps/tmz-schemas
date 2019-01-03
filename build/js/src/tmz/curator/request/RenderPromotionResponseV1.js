// @link https://schemas.tmz.com/json-schema/tmz/curator/request/render-promotion-response/1-0-0.json#
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCuratorRenderPromotionResponseV1Mixin from '@triniti/schemas/triniti/curator/mixin/render-promotion-response/RenderPromotionResponseV1Mixin';

export default class RenderPromotionResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:request:render-promotion-response:1-0-0', RenderPromotionResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        TrinitiCuratorRenderPromotionResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(RenderPromotionResponseV1);
MessageResolver.register('tmz:curator:request:render-promotion-response', RenderPromotionResponseV1);
Object.freeze(RenderPromotionResponseV1);
Object.freeze(RenderPromotionResponseV1.prototype);
