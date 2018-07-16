// @link http://schemas.tmz.com/json-schema/tmz/dam/request/search-assets-response/1-0-0.json#
import GdbotsNcrSearchNodesResponseV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/search-nodes-response/SearchNodesResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiDamSearchAssetsResponseV1Mixin from '@triniti/schemas/triniti/dam/mixin/search-assets-response/SearchAssetsResponseV1Mixin';

export default class SearchAssetsResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:dam:request:search-assets-response:1-0-0', SearchAssetsResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsNcrSearchNodesResponseV1Mixin.create(),
        TrinitiDamSearchAssetsResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(SearchAssetsResponseV1);
MessageResolver.register('tmz:dam:request:search-assets-response', SearchAssetsResponseV1);
Object.freeze(SearchAssetsResponseV1);
Object.freeze(SearchAssetsResponseV1.prototype);
