// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/document-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasDocumentBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/document-block/DocumentBlockV1Mixin';
import TrinitiCanvasDocumentBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/document-block/DocumentBlockV1Trait';
import TrinitiCanvasNodeRefBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/node-ref-block/NodeRefBlockV1Mixin';

export default class DocumentBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:document-block:1-0-0', DocumentBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasNodeRefBlockV1Mixin.create(),
        TrinitiCanvasDocumentBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(DocumentBlockV1);
TrinitiCanvasDocumentBlockV1Trait(DocumentBlockV1);
MessageResolver.register('tmz:canvas:block:document-block', DocumentBlockV1);
Object.freeze(DocumentBlockV1);
Object.freeze(DocumentBlockV1.prototype);
