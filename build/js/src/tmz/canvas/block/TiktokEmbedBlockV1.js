// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/tiktok-embed-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasTiktokEmbedBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/tiktok-embed-block/TiktokEmbedBlockV1Mixin';
import TrinitiCanvasTiktokEmbedBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/tiktok-embed-block/TiktokEmbedBlockV1Trait';

export default class TiktokEmbedBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:tiktok-embed-block:1-0-0', TiktokEmbedBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasTiktokEmbedBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(TiktokEmbedBlockV1);
TrinitiCanvasTiktokEmbedBlockV1Trait(TiktokEmbedBlockV1);
MessageResolver.register('tmz:canvas:block:tiktok-embed-block', TiktokEmbedBlockV1);
Object.freeze(TiktokEmbedBlockV1);
Object.freeze(TiktokEmbedBlockV1.prototype);
