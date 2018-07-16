// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/audio-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasAudioBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/audio-block/AudioBlockV1Mixin';
import TrinitiCanvasAudioBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/audio-block/AudioBlockV1Trait';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasNodeRefBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/node-ref-block/NodeRefBlockV1Mixin';

export default class AudioBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:audio-block:1-0-0', AudioBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasNodeRefBlockV1Mixin.create(),
        TrinitiCanvasAudioBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(AudioBlockV1);
TrinitiCanvasAudioBlockV1Trait(AudioBlockV1);
MessageResolver.register('tmz:canvas:block:audio-block', AudioBlockV1);
Object.freeze(AudioBlockV1);
Object.freeze(AudioBlockV1.prototype);
