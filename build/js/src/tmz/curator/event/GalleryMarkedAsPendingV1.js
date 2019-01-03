// @link https://schemas.tmz.com/json-schema/tmz/curator/event/gallery-marked-as-pending/1-0-0.json#
import GdbotsNcrNodeMarkedAsPendingV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node-marked-as-pending/NodeMarkedAsPendingV1Mixin';
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class GalleryMarkedAsPendingV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:event:gallery-marked-as-pending:1-0-0', GalleryMarkedAsPendingV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsNcrNodeMarkedAsPendingV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(GalleryMarkedAsPendingV1);
MessageResolver.register('tmz:curator:event:gallery-marked-as-pending', GalleryMarkedAsPendingV1);
Object.freeze(GalleryMarkedAsPendingV1);
Object.freeze(GalleryMarkedAsPendingV1.prototype);
