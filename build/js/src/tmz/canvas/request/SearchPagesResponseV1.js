// @link http://schemas.tmz.com/json-schema/tmz/canvas/request/search-pages-response/1-0-0.json#
import GdbotsNcrSearchNodesResponseV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/search-nodes-response/SearchNodesResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasSearchPagesResponseV1Mixin from '@triniti/schemas/triniti/canvas/mixin/search-pages-response/SearchPagesResponseV1Mixin';

export default class SearchPagesResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:request:search-pages-response:1-0-0', SearchPagesResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsNcrSearchNodesResponseV1Mixin.create(),
        TrinitiCanvasSearchPagesResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(SearchPagesResponseV1);
MessageResolver.register('tmz:canvas:request:search-pages-response', SearchPagesResponseV1);
Object.freeze(SearchPagesResponseV1);
Object.freeze(SearchPagesResponseV1.prototype);
