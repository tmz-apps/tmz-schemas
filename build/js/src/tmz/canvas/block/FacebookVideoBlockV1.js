// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/facebook-video-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasFacebookVideoBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/facebook-video-block/FacebookVideoBlockV1Mixin';
import TrinitiCanvasFacebookVideoBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/facebook-video-block/FacebookVideoBlockV1Trait';

export default class FacebookVideoBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:facebook-video-block:1-0-0', FacebookVideoBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasFacebookVideoBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(FacebookVideoBlockV1);
TrinitiCanvasFacebookVideoBlockV1Trait(FacebookVideoBlockV1);
MessageResolver.register('tmz:canvas:block:facebook-video-block', FacebookVideoBlockV1);
Object.freeze(FacebookVideoBlockV1);
Object.freeze(FacebookVideoBlockV1.prototype);
