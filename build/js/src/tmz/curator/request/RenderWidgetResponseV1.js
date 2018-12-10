// @link http://schemas.tmz.com/json-schema/tmz/curator/request/render-widget-response/1-0-0.json#
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCuratorRenderWidgetResponseV1Mixin from '@triniti/schemas/triniti/curator/mixin/render-widget-response/RenderWidgetResponseV1Mixin';

export default class RenderWidgetResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:request:render-widget-response:1-0-0', RenderWidgetResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        TrinitiCuratorRenderWidgetResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(RenderWidgetResponseV1);
MessageResolver.register('tmz:curator:request:render-widget-response', RenderWidgetResponseV1);
Object.freeze(RenderWidgetResponseV1);
Object.freeze(RenderWidgetResponseV1.prototype);
