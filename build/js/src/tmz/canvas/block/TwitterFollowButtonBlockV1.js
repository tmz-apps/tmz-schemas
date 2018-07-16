// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/twitter-follow-button-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasTwitterFollowButtonBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/twitter-follow-button-block/TwitterFollowButtonBlockV1Mixin';
import TrinitiCanvasTwitterFollowButtonBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/twitter-follow-button-block/TwitterFollowButtonBlockV1Trait';

export default class TwitterFollowButtonBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:twitter-follow-button-block:1-0-0', TwitterFollowButtonBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasTwitterFollowButtonBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(TwitterFollowButtonBlockV1);
TrinitiCanvasTwitterFollowButtonBlockV1Trait(TwitterFollowButtonBlockV1);
MessageResolver.register('tmz:canvas:block:twitter-follow-button-block', TwitterFollowButtonBlockV1);
Object.freeze(TwitterFollowButtonBlockV1);
Object.freeze(TwitterFollowButtonBlockV1.prototype);
