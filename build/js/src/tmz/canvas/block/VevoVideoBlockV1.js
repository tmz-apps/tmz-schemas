// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/vevo-video-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasVevoVideoBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/vevo-video-block/VevoVideoBlockV1Mixin';
import TrinitiCanvasVevoVideoBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/vevo-video-block/VevoVideoBlockV1Trait';

export default class VevoVideoBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:vevo-video-block:1-0-0', VevoVideoBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasVevoVideoBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(VevoVideoBlockV1);
TrinitiCanvasVevoVideoBlockV1Trait(VevoVideoBlockV1);
MessageResolver.register('tmz:canvas:block:vevo-video-block', VevoVideoBlockV1);
Object.freeze(VevoVideoBlockV1);
Object.freeze(VevoVideoBlockV1.prototype);
