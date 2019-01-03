// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/text-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasTextBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/text-block/TextBlockV1Mixin';
import TrinitiCanvasTextBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/text-block/TextBlockV1Trait';

export default class TextBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:text-block:1-0-0', TextBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasTextBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(TextBlockV1);
TrinitiCanvasTextBlockV1Trait(TextBlockV1);
MessageResolver.register('tmz:canvas:block:text-block', TextBlockV1);
Object.freeze(TextBlockV1);
Object.freeze(TextBlockV1.prototype);
