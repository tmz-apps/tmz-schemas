// @link https://schemas.tmz.com/json-schema/tmz/dam/event/gallery-asset-reordered/1-0-0.json#
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiDamGalleryAssetReorderedV1Mixin from '@triniti/schemas/triniti/dam/mixin/gallery-asset-reordered/GalleryAssetReorderedV1Mixin';

export default class GalleryAssetReorderedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:dam:event:gallery-asset-reordered:1-0-0', GalleryAssetReorderedV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        TrinitiDamGalleryAssetReorderedV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(GalleryAssetReorderedV1);
MessageResolver.register('tmz:dam:event:gallery-asset-reordered', GalleryAssetReorderedV1);
Object.freeze(GalleryAssetReorderedV1);
Object.freeze(GalleryAssetReorderedV1.prototype);
