// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/heading-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasHeadingBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/heading-block/HeadingBlockV1Mixin';
import TrinitiCanvasHeadingBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/heading-block/HeadingBlockV1Trait';

export default class HeadingBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:heading-block:1-0-0', HeadingBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasHeadingBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(HeadingBlockV1);
TrinitiCanvasHeadingBlockV1Trait(HeadingBlockV1);
MessageResolver.register('tmz:canvas:block:heading-block', HeadingBlockV1);
Object.freeze(HeadingBlockV1);
Object.freeze(HeadingBlockV1.prototype);
