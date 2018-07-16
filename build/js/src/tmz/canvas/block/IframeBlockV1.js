// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/iframe-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasIframeBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/iframe-block/IframeBlockV1Mixin';
import TrinitiCanvasIframeBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/iframe-block/IframeBlockV1Trait';

export default class IframeBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:iframe-block:1-0-0', IframeBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasIframeBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(IframeBlockV1);
TrinitiCanvasIframeBlockV1Trait(IframeBlockV1);
MessageResolver.register('tmz:canvas:block:iframe-block', IframeBlockV1);
Object.freeze(IframeBlockV1);
Object.freeze(IframeBlockV1.prototype);
