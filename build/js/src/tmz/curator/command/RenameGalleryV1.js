// @link https://schemas.tmz.com/json-schema/tmz/curator/command/rename-gallery/1-0-0.json#
import GdbotsNcrRenameNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/rename-node/RenameNodeV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class RenameGalleryV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:command:rename-gallery:1-0-0', RenameGalleryV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrRenameNodeV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(RenameGalleryV1);
MessageResolver.register('tmz:curator:command:rename-gallery', RenameGalleryV1);
Object.freeze(RenameGalleryV1);
Object.freeze(RenameGalleryV1.prototype);
