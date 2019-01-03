// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/instagram-media-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasInstagramMediaBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/instagram-media-block/InstagramMediaBlockV1Mixin';
import TrinitiCanvasInstagramMediaBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/instagram-media-block/InstagramMediaBlockV1Trait';

export default class InstagramMediaBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:instagram-media-block:1-0-0', InstagramMediaBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasInstagramMediaBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(InstagramMediaBlockV1);
TrinitiCanvasInstagramMediaBlockV1Trait(InstagramMediaBlockV1);
MessageResolver.register('tmz:canvas:block:instagram-media-block', InstagramMediaBlockV1);
Object.freeze(InstagramMediaBlockV1);
Object.freeze(InstagramMediaBlockV1.prototype);
