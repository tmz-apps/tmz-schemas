// @link http://schemas.tmz.com/json-schema/tmz/canvas/block/google-map-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasGoogleMapBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/google-map-block/GoogleMapBlockV1Mixin';
import TrinitiCanvasGoogleMapBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/google-map-block/GoogleMapBlockV1Trait';

export default class GoogleMapBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:google-map-block:1-0-0', GoogleMapBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasGoogleMapBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(GoogleMapBlockV1);
TrinitiCanvasGoogleMapBlockV1Trait(GoogleMapBlockV1);
MessageResolver.register('tmz:canvas:block:google-map-block', GoogleMapBlockV1);
Object.freeze(GoogleMapBlockV1);
Object.freeze(GoogleMapBlockV1.prototype);
