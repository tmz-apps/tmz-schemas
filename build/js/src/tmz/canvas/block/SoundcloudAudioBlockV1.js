// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/soundcloud-audio-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasSoundcloudAudioBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/soundcloud-audio-block/SoundcloudAudioBlockV1Mixin';
import TrinitiCanvasSoundcloudAudioBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/soundcloud-audio-block/SoundcloudAudioBlockV1Trait';

export default class SoundcloudAudioBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:soundcloud-audio-block:1-0-0', SoundcloudAudioBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasSoundcloudAudioBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(SoundcloudAudioBlockV1);
TrinitiCanvasSoundcloudAudioBlockV1Trait(SoundcloudAudioBlockV1);
MessageResolver.register('tmz:canvas:block:soundcloud-audio-block', SoundcloudAudioBlockV1);
Object.freeze(SoundcloudAudioBlockV1);
Object.freeze(SoundcloudAudioBlockV1.prototype);
