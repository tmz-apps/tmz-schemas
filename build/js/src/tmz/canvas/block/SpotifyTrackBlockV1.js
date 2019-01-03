// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/spotify-track-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasSpotifyTrackBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/spotify-track-block/SpotifyTrackBlockV1Mixin';
import TrinitiCanvasSpotifyTrackBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/spotify-track-block/SpotifyTrackBlockV1Trait';

export default class SpotifyTrackBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:spotify-track-block:1-0-0', SpotifyTrackBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasSpotifyTrackBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(SpotifyTrackBlockV1);
TrinitiCanvasSpotifyTrackBlockV1Trait(SpotifyTrackBlockV1);
MessageResolver.register('tmz:canvas:block:spotify-track-block', SpotifyTrackBlockV1);
Object.freeze(SpotifyTrackBlockV1);
Object.freeze(SpotifyTrackBlockV1.prototype);
