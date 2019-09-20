// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/divider-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasDividerBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/divider-block/DividerBlockV1Mixin';
import TrinitiCanvasDividerBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/divider-block/DividerBlockV1Trait';

export default class DividerBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:divider-block:1-0-0', DividerBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasDividerBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(DividerBlockV1);
TrinitiCanvasDividerBlockV1Trait(DividerBlockV1);
MessageResolver.register('tmz:canvas:block:divider-block', DividerBlockV1);
Object.freeze(DividerBlockV1);
Object.freeze(DividerBlockV1.prototype);
