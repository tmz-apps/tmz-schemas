// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/youtube-video-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasYoutubeVideoBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/youtube-video-block/YoutubeVideoBlockV1Mixin';
import TrinitiCanvasYoutubeVideoBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/youtube-video-block/YoutubeVideoBlockV1Trait';

export default class YoutubeVideoBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:youtube-video-block:1-0-0', YoutubeVideoBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasYoutubeVideoBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(YoutubeVideoBlockV1);
TrinitiCanvasYoutubeVideoBlockV1Trait(YoutubeVideoBlockV1);
MessageResolver.register('tmz:canvas:block:youtube-video-block', YoutubeVideoBlockV1);
Object.freeze(YoutubeVideoBlockV1);
Object.freeze(YoutubeVideoBlockV1.prototype);
