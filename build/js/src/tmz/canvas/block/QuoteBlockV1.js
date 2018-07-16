// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/quote-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasQuoteBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/quote-block/QuoteBlockV1Mixin';
import TrinitiCanvasQuoteBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/quote-block/QuoteBlockV1Trait';

export default class QuoteBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:quote-block:1-0-0', QuoteBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasQuoteBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(QuoteBlockV1);
TrinitiCanvasQuoteBlockV1Trait(QuoteBlockV1);
MessageResolver.register('tmz:canvas:block:quote-block', QuoteBlockV1);
Object.freeze(QuoteBlockV1);
Object.freeze(QuoteBlockV1.prototype);
