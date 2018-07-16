// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/twitter-hashtag-button-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasTwitterHashtagButtonBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/twitter-hashtag-button-block/TwitterHashtagButtonBlockV1Mixin';
import TrinitiCanvasTwitterHashtagButtonBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/twitter-hashtag-button-block/TwitterHashtagButtonBlockV1Trait';

export default class TwitterHashtagButtonBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:twitter-hashtag-button-block:1-0-0', TwitterHashtagButtonBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasTwitterHashtagButtonBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(TwitterHashtagButtonBlockV1);
TrinitiCanvasTwitterHashtagButtonBlockV1Trait(TwitterHashtagButtonBlockV1);
MessageResolver.register('tmz:canvas:block:twitter-hashtag-button-block', TwitterHashtagButtonBlockV1);
Object.freeze(TwitterHashtagButtonBlockV1);
Object.freeze(TwitterHashtagButtonBlockV1.prototype);
