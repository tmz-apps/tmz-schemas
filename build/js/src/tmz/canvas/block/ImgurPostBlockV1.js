// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/imgur-post-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasImgurPostBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/imgur-post-block/ImgurPostBlockV1Mixin';
import TrinitiCanvasImgurPostBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/imgur-post-block/ImgurPostBlockV1Trait';

export default class ImgurPostBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:imgur-post-block:1-0-0', ImgurPostBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasImgurPostBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(ImgurPostBlockV1);
TrinitiCanvasImgurPostBlockV1Trait(ImgurPostBlockV1);
MessageResolver.register('tmz:canvas:block:imgur-post-block', ImgurPostBlockV1);
Object.freeze(ImgurPostBlockV1);
Object.freeze(ImgurPostBlockV1.prototype);
