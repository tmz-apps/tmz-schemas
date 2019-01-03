// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/youtube-playlist-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasYoutubePlaylistBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/youtube-playlist-block/YoutubePlaylistBlockV1Mixin';
import TrinitiCanvasYoutubePlaylistBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/youtube-playlist-block/YoutubePlaylistBlockV1Trait';

export default class YoutubePlaylistBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:youtube-playlist-block:1-0-0', YoutubePlaylistBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasYoutubePlaylistBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(YoutubePlaylistBlockV1);
TrinitiCanvasYoutubePlaylistBlockV1Trait(YoutubePlaylistBlockV1);
MessageResolver.register('tmz:canvas:block:youtube-playlist-block', YoutubePlaylistBlockV1);
Object.freeze(YoutubePlaylistBlockV1);
Object.freeze(YoutubePlaylistBlockV1.prototype);
