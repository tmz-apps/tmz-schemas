// @link https://schemas.tmz.com/json-schema/tmz/curator/event/gallery-image-count-updated/1-0-0.json#
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCuratorGalleryImageCountUpdatedV1Mixin from '@triniti/schemas/triniti/curator/mixin/gallery-image-count-updated/GalleryImageCountUpdatedV1Mixin';

export default class GalleryImageCountUpdatedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:event:gallery-image-count-updated:1-0-0', GalleryImageCountUpdatedV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        TrinitiCuratorGalleryImageCountUpdatedV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(GalleryImageCountUpdatedV1);
MessageResolver.register('tmz:curator:event:gallery-image-count-updated', GalleryImageCountUpdatedV1);
Object.freeze(GalleryImageCountUpdatedV1);
Object.freeze(GalleryImageCountUpdatedV1.prototype);
