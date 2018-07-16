// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/pinterest-board-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasPinterestBoardBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/pinterest-board-block/PinterestBoardBlockV1Mixin';
import TrinitiCanvasPinterestBoardBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/pinterest-board-block/PinterestBoardBlockV1Trait';

export default class PinterestBoardBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:pinterest-board-block:1-0-0', PinterestBoardBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasPinterestBoardBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(PinterestBoardBlockV1);
TrinitiCanvasPinterestBoardBlockV1Trait(PinterestBoardBlockV1);
MessageResolver.register('tmz:canvas:block:pinterest-board-block', PinterestBoardBlockV1);
Object.freeze(PinterestBoardBlockV1);
Object.freeze(PinterestBoardBlockV1.prototype);
