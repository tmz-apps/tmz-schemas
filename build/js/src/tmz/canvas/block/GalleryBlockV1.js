// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/gallery-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasGalleryBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/gallery-block/GalleryBlockV1Mixin';
import TrinitiCanvasGalleryBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/gallery-block/GalleryBlockV1Trait';
import TrinitiCanvasNodeRefBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/node-ref-block/NodeRefBlockV1Mixin';

export default class GalleryBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:gallery-block:1-0-0', GalleryBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasNodeRefBlockV1Mixin.create(),
        TrinitiCanvasGalleryBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(GalleryBlockV1);
TrinitiCanvasGalleryBlockV1Trait(GalleryBlockV1);
MessageResolver.register('tmz:canvas:block:gallery-block', GalleryBlockV1);
Object.freeze(GalleryBlockV1);
Object.freeze(GalleryBlockV1.prototype);
