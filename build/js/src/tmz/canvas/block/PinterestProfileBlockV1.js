// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/pinterest-profile-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasPinterestProfileBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/pinterest-profile-block/PinterestProfileBlockV1Mixin';
import TrinitiCanvasPinterestProfileBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/pinterest-profile-block/PinterestProfileBlockV1Trait';

export default class PinterestProfileBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:pinterest-profile-block:1-0-0', PinterestProfileBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasPinterestProfileBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(PinterestProfileBlockV1);
TrinitiCanvasPinterestProfileBlockV1Trait(PinterestProfileBlockV1);
MessageResolver.register('tmz:canvas:block:pinterest-profile-block', PinterestProfileBlockV1);
Object.freeze(PinterestProfileBlockV1);
Object.freeze(PinterestProfileBlockV1.prototype);
