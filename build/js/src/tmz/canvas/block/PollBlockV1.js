// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/poll-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasNodeRefBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/node-ref-block/NodeRefBlockV1Mixin';
import TrinitiCanvasPollBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/poll-block/PollBlockV1Mixin';
import TrinitiCanvasPollBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/poll-block/PollBlockV1Trait';

export default class PollBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:poll-block:1-0-0', PollBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasNodeRefBlockV1Mixin.create(),
        TrinitiCanvasPollBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(PollBlockV1);
TrinitiCanvasPollBlockV1Trait(PollBlockV1);
MessageResolver.register('tmz:canvas:block:poll-block', PollBlockV1);
Object.freeze(PollBlockV1);
Object.freeze(PollBlockV1.prototype);
