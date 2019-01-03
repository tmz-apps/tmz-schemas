// @link https://schemas.tmz.com/json-schema/tmz/curator/command/unpublish-gallery/1-0-0.json#
import GdbotsNcrUnpublishNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/unpublish-node/UnpublishNodeV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class UnpublishGalleryV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:command:unpublish-gallery:1-0-0', UnpublishGalleryV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrUnpublishNodeV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(UnpublishGalleryV1);
MessageResolver.register('tmz:curator:command:unpublish-gallery', UnpublishGalleryV1);
Object.freeze(UnpublishGalleryV1);
Object.freeze(UnpublishGalleryV1.prototype);
