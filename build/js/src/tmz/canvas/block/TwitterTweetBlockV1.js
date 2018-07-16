// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/twitter-tweet-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasTwitterTweetBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/twitter-tweet-block/TwitterTweetBlockV1Mixin';
import TrinitiCanvasTwitterTweetBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/twitter-tweet-block/TwitterTweetBlockV1Trait';

export default class TwitterTweetBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:twitter-tweet-block:1-0-0', TwitterTweetBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasTwitterTweetBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(TwitterTweetBlockV1);
TrinitiCanvasTwitterTweetBlockV1Trait(TwitterTweetBlockV1);
MessageResolver.register('tmz:canvas:block:twitter-tweet-block', TwitterTweetBlockV1);
Object.freeze(TwitterTweetBlockV1);
Object.freeze(TwitterTweetBlockV1.prototype);
