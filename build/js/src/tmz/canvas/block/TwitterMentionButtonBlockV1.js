// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/twitter-mention-button-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasTwitterMentionButtonBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/twitter-mention-button-block/TwitterMentionButtonBlockV1Mixin';
import TrinitiCanvasTwitterMentionButtonBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/twitter-mention-button-block/TwitterMentionButtonBlockV1Trait';

export default class TwitterMentionButtonBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:twitter-mention-button-block:1-0-0', TwitterMentionButtonBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasTwitterMentionButtonBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(TwitterMentionButtonBlockV1);
TrinitiCanvasTwitterMentionButtonBlockV1Trait(TwitterMentionButtonBlockV1);
MessageResolver.register('tmz:canvas:block:twitter-mention-button-block', TwitterMentionButtonBlockV1);
Object.freeze(TwitterMentionButtonBlockV1);
Object.freeze(TwitterMentionButtonBlockV1.prototype);
