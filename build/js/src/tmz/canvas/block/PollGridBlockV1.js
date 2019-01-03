// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/poll-grid-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasPollGridBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/poll-grid-block/PollGridBlockV1Mixin';
import TrinitiCanvasPollGridBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/poll-grid-block/PollGridBlockV1Trait';

export default class PollGridBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:poll-grid-block:1-0-0', PollGridBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasPollGridBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(PollGridBlockV1);
TrinitiCanvasPollGridBlockV1Trait(PollGridBlockV1);
MessageResolver.register('tmz:canvas:block:poll-grid-block', PollGridBlockV1);
Object.freeze(PollGridBlockV1);
Object.freeze(PollGridBlockV1.prototype);
