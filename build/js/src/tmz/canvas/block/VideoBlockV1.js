// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/video-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasNodeRefBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/node-ref-block/NodeRefBlockV1Mixin';
import TrinitiCanvasVideoBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/video-block/VideoBlockV1Mixin';
import TrinitiCanvasVideoBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/video-block/VideoBlockV1Trait';

export default class VideoBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:video-block:1-0-0', VideoBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasNodeRefBlockV1Mixin.create(),
        TrinitiCanvasVideoBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(VideoBlockV1);
TrinitiCanvasVideoBlockV1Trait(VideoBlockV1);
MessageResolver.register('tmz:canvas:block:video-block', VideoBlockV1);
Object.freeze(VideoBlockV1);
Object.freeze(VideoBlockV1.prototype);
