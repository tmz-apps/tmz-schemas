// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/image-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasImageBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/image-block/ImageBlockV1Mixin';
import TrinitiCanvasImageBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/image-block/ImageBlockV1Trait';
import TrinitiCanvasNodeRefBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/node-ref-block/NodeRefBlockV1Mixin';

export default class ImageBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:image-block:1-0-0', ImageBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasNodeRefBlockV1Mixin.create(),
        TrinitiCanvasImageBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(ImageBlockV1);
TrinitiCanvasImageBlockV1Trait(ImageBlockV1);
MessageResolver.register('tmz:canvas:block:image-block', ImageBlockV1);
Object.freeze(ImageBlockV1);
Object.freeze(ImageBlockV1.prototype);
