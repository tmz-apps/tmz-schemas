// @link https://schemas.tmz.com/json-schema/tmz/curator/event/gallery-marked-as-draft/1-0-0.json#
import GdbotsNcrNodeMarkedAsDraftV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node-marked-as-draft/NodeMarkedAsDraftV1Mixin';
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class GalleryMarkedAsDraftV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:event:gallery-marked-as-draft:1-0-0', GalleryMarkedAsDraftV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsNcrNodeMarkedAsDraftV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(GalleryMarkedAsDraftV1);
MessageResolver.register('tmz:curator:event:gallery-marked-as-draft', GalleryMarkedAsDraftV1);
Object.freeze(GalleryMarkedAsDraftV1);
Object.freeze(GalleryMarkedAsDraftV1.prototype);
