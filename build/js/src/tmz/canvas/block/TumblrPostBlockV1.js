// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/tumblr-post-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasTumblrPostBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/tumblr-post-block/TumblrPostBlockV1Mixin';
import TrinitiCanvasTumblrPostBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/tumblr-post-block/TumblrPostBlockV1Trait';

export default class TumblrPostBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:tumblr-post-block:1-0-0', TumblrPostBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasTumblrPostBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(TumblrPostBlockV1);
TrinitiCanvasTumblrPostBlockV1Trait(TumblrPostBlockV1);
MessageResolver.register('tmz:canvas:block:tumblr-post-block', TumblrPostBlockV1);
Object.freeze(TumblrPostBlockV1);
Object.freeze(TumblrPostBlockV1.prototype);
