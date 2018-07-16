// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/twitter-likes-timeline-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasTwitterLikesTimelineBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/twitter-likes-timeline-block/TwitterLikesTimelineBlockV1Mixin';
import TrinitiCanvasTwitterLikesTimelineBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/twitter-likes-timeline-block/TwitterLikesTimelineBlockV1Trait';

export default class TwitterLikesTimelineBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:twitter-likes-timeline-block:1-0-0', TwitterLikesTimelineBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasTwitterLikesTimelineBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(TwitterLikesTimelineBlockV1);
TrinitiCanvasTwitterLikesTimelineBlockV1Trait(TwitterLikesTimelineBlockV1);
MessageResolver.register('tmz:canvas:block:twitter-likes-timeline-block', TwitterLikesTimelineBlockV1);
Object.freeze(TwitterLikesTimelineBlockV1);
Object.freeze(TwitterLikesTimelineBlockV1.prototype);
