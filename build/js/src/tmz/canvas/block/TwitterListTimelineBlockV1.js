// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/twitter-list-timeline-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasTwitterListTimelineBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/twitter-list-timeline-block/TwitterListTimelineBlockV1Mixin';
import TrinitiCanvasTwitterListTimelineBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/twitter-list-timeline-block/TwitterListTimelineBlockV1Trait';

export default class TwitterListTimelineBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:twitter-list-timeline-block:1-0-0', TwitterListTimelineBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasTwitterListTimelineBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(TwitterListTimelineBlockV1);
TrinitiCanvasTwitterListTimelineBlockV1Trait(TwitterListTimelineBlockV1);
MessageResolver.register('tmz:canvas:block:twitter-list-timeline-block', TwitterListTimelineBlockV1);
Object.freeze(TwitterListTimelineBlockV1);
Object.freeze(TwitterListTimelineBlockV1.prototype);
