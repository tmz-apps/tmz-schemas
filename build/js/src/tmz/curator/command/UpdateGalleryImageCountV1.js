// @link https://schemas.tmz.com/json-schema/tmz/curator/command/update-gallery-image-count/1-0-0.json#
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCuratorUpdateGalleryImageCountV1Mixin from '@triniti/schemas/triniti/curator/mixin/update-gallery-image-count/UpdateGalleryImageCountV1Mixin';

export default class UpdateGalleryImageCountV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:command:update-gallery-image-count:1-0-0', UpdateGalleryImageCountV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        TrinitiCuratorUpdateGalleryImageCountV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(UpdateGalleryImageCountV1);
MessageResolver.register('tmz:curator:command:update-gallery-image-count', UpdateGalleryImageCountV1);
Object.freeze(UpdateGalleryImageCountV1);
Object.freeze(UpdateGalleryImageCountV1.prototype);
