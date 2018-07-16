// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/vimeo-video-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasVimeoVideoBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/vimeo-video-block/VimeoVideoBlockV1Mixin';
import TrinitiCanvasVimeoVideoBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/vimeo-video-block/VimeoVideoBlockV1Trait';

export default class VimeoVideoBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:vimeo-video-block:1-0-0', VimeoVideoBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasVimeoVideoBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(VimeoVideoBlockV1);
TrinitiCanvasVimeoVideoBlockV1Trait(VimeoVideoBlockV1);
MessageResolver.register('tmz:canvas:block:vimeo-video-block', VimeoVideoBlockV1);
Object.freeze(VimeoVideoBlockV1);
Object.freeze(VimeoVideoBlockV1.prototype);
