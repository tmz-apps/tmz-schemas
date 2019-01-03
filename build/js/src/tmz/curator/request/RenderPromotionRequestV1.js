// @link https://schemas.tmz.com/json-schema/tmz/curator/request/render-promotion-request/1-0-0.json#
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import GdbotsPbjxRequestV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCuratorRenderPromotionRequestV1Mixin from '@triniti/schemas/triniti/curator/mixin/render-promotion-request/RenderPromotionRequestV1Mixin';

export default class RenderPromotionRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:request:render-promotion-request:1-0-0', RenderPromotionRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        TrinitiCuratorRenderPromotionRequestV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxRequestV1Trait(RenderPromotionRequestV1);
MessageResolver.register('tmz:curator:request:render-promotion-request', RenderPromotionRequestV1);
Object.freeze(RenderPromotionRequestV1);
Object.freeze(RenderPromotionRequestV1.prototype);
