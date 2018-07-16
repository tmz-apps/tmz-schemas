// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/twitter-video-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasTwitterVideoBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/twitter-video-block/TwitterVideoBlockV1Mixin';
import TrinitiCanvasTwitterVideoBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/twitter-video-block/TwitterVideoBlockV1Trait';

export default class TwitterVideoBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:twitter-video-block:1-0-0', TwitterVideoBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasTwitterVideoBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(TwitterVideoBlockV1);
TrinitiCanvasTwitterVideoBlockV1Trait(TwitterVideoBlockV1);
MessageResolver.register('tmz:canvas:block:twitter-video-block', TwitterVideoBlockV1);
Object.freeze(TwitterVideoBlockV1);
Object.freeze(TwitterVideoBlockV1.prototype);
