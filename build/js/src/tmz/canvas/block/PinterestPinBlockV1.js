// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/pinterest-pin-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasPinterestPinBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/pinterest-pin-block/PinterestPinBlockV1Mixin';
import TrinitiCanvasPinterestPinBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/pinterest-pin-block/PinterestPinBlockV1Trait';

export default class PinterestPinBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:pinterest-pin-block:1-0-0', PinterestPinBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasPinterestPinBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(PinterestPinBlockV1);
TrinitiCanvasPinterestPinBlockV1Trait(PinterestPinBlockV1);
MessageResolver.register('tmz:canvas:block:pinterest-pin-block', PinterestPinBlockV1);
Object.freeze(PinterestPinBlockV1);
Object.freeze(PinterestPinBlockV1.prototype);
