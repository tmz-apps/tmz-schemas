// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/twitter-search-timeline-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasTwitterSearchTimelineBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/twitter-search-timeline-block/TwitterSearchTimelineBlockV1Mixin';
import TrinitiCanvasTwitterSearchTimelineBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/twitter-search-timeline-block/TwitterSearchTimelineBlockV1Trait';

export default class TwitterSearchTimelineBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:twitter-search-timeline-block:1-0-0', TwitterSearchTimelineBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasTwitterSearchTimelineBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(TwitterSearchTimelineBlockV1);
TrinitiCanvasTwitterSearchTimelineBlockV1Trait(TwitterSearchTimelineBlockV1);
MessageResolver.register('tmz:canvas:block:twitter-search-timeline-block', TwitterSearchTimelineBlockV1);
Object.freeze(TwitterSearchTimelineBlockV1);
Object.freeze(TwitterSearchTimelineBlockV1.prototype);
