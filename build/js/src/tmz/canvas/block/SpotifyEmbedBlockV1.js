// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/spotify-embed-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasSpotifyEmbedBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/spotify-embed-block/SpotifyEmbedBlockV1Mixin';
import TrinitiCanvasSpotifyEmbedBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/spotify-embed-block/SpotifyEmbedBlockV1Trait';

export default class SpotifyEmbedBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:spotify-embed-block:1-0-0', SpotifyEmbedBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasSpotifyEmbedBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(SpotifyEmbedBlockV1);
TrinitiCanvasSpotifyEmbedBlockV1Trait(SpotifyEmbedBlockV1);
MessageResolver.register('tmz:canvas:block:spotify-embed-block', SpotifyEmbedBlockV1);
Object.freeze(SpotifyEmbedBlockV1);
Object.freeze(SpotifyEmbedBlockV1.prototype);
