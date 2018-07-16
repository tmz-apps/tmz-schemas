// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/twitter-user-timeline-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasTwitterUserTimelineBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/twitter-user-timeline-block/TwitterUserTimelineBlockV1Mixin';
import TrinitiCanvasTwitterUserTimelineBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/twitter-user-timeline-block/TwitterUserTimelineBlockV1Trait';

export default class TwitterUserTimelineBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:twitter-user-timeline-block:1-0-0', TwitterUserTimelineBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasTwitterUserTimelineBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(TwitterUserTimelineBlockV1);
TrinitiCanvasTwitterUserTimelineBlockV1Trait(TwitterUserTimelineBlockV1);
MessageResolver.register('tmz:canvas:block:twitter-user-timeline-block', TwitterUserTimelineBlockV1);
Object.freeze(TwitterUserTimelineBlockV1);
Object.freeze(TwitterUserTimelineBlockV1.prototype);
