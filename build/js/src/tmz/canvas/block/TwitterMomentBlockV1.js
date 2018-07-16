// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/twitter-moment-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasTwitterMomentBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/twitter-moment-block/TwitterMomentBlockV1Mixin';
import TrinitiCanvasTwitterMomentBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/twitter-moment-block/TwitterMomentBlockV1Trait';

export default class TwitterMomentBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:twitter-moment-block:1-0-0', TwitterMomentBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasTwitterMomentBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(TwitterMomentBlockV1);
TrinitiCanvasTwitterMomentBlockV1Trait(TwitterMomentBlockV1);
MessageResolver.register('tmz:canvas:block:twitter-moment-block', TwitterMomentBlockV1);
Object.freeze(TwitterMomentBlockV1);
Object.freeze(TwitterMomentBlockV1.prototype);
