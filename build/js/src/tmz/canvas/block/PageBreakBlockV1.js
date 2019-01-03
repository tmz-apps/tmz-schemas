// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/page-break-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasPageBreakBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/page-break-block/PageBreakBlockV1Mixin';
import TrinitiCanvasPageBreakBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/page-break-block/PageBreakBlockV1Trait';

export default class PageBreakBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:page-break-block:1-0-0', PageBreakBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasPageBreakBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(PageBreakBlockV1);
TrinitiCanvasPageBreakBlockV1Trait(PageBreakBlockV1);
MessageResolver.register('tmz:canvas:block:page-break-block', PageBreakBlockV1);
Object.freeze(PageBreakBlockV1);
Object.freeze(PageBreakBlockV1.prototype);
