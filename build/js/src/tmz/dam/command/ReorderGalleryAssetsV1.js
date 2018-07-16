// @link http://schemas.tmz.com/json-schema/tmz/dam/command/reorder-gallery-assets/1-0-0.json#
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiDamReorderGalleryAssetsV1Mixin from '@triniti/schemas/triniti/dam/mixin/reorder-gallery-assets/ReorderGalleryAssetsV1Mixin';

export default class ReorderGalleryAssetsV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:dam:command:reorder-gallery-assets:1-0-0', ReorderGalleryAssetsV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        TrinitiDamReorderGalleryAssetsV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(ReorderGalleryAssetsV1);
MessageResolver.register('tmz:dam:command:reorder-gallery-assets', ReorderGalleryAssetsV1);
Object.freeze(ReorderGalleryAssetsV1);
Object.freeze(ReorderGalleryAssetsV1.prototype);
