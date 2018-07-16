// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/twitter-collection-timeline-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasTwitterCollectionTimelineBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/twitter-collection-timeline-block/TwitterCollectionTimelineBlockV1Mixin';
import TrinitiCanvasTwitterCollectionTimelineBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/twitter-collection-timeline-block/TwitterCollectionTimelineBlockV1Trait';

export default class TwitterCollectionTimelineBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:twitter-collection-timeline-block:1-0-0', TwitterCollectionTimelineBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasTwitterCollectionTimelineBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(TwitterCollectionTimelineBlockV1);
TrinitiCanvasTwitterCollectionTimelineBlockV1Trait(TwitterCollectionTimelineBlockV1);
MessageResolver.register('tmz:canvas:block:twitter-collection-timeline-block', TwitterCollectionTimelineBlockV1);
Object.freeze(TwitterCollectionTimelineBlockV1);
Object.freeze(TwitterCollectionTimelineBlockV1.prototype);
