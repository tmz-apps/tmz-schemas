// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/facebook-post-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasFacebookPostBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/facebook-post-block/FacebookPostBlockV1Mixin';
import TrinitiCanvasFacebookPostBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/facebook-post-block/FacebookPostBlockV1Trait';

export default class FacebookPostBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:facebook-post-block:1-0-0', FacebookPostBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasFacebookPostBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(FacebookPostBlockV1);
TrinitiCanvasFacebookPostBlockV1Trait(FacebookPostBlockV1);
MessageResolver.register('tmz:canvas:block:facebook-post-block', FacebookPostBlockV1);
Object.freeze(FacebookPostBlockV1);
Object.freeze(FacebookPostBlockV1.prototype);
