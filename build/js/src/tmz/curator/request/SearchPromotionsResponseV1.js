// @link http://schemas.tmz.com/json-schema/tmz/curator/request/search-promotions-response/1-0-0.json#
import GdbotsNcrSearchNodesResponseV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/search-nodes-response/SearchNodesResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCuratorSearchPromotionsResponseV1Mixin from '@triniti/schemas/triniti/curator/mixin/search-promotions-response/SearchPromotionsResponseV1Mixin';

export default class SearchPromotionsResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:request:search-promotions-response:1-0-0', SearchPromotionsResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsNcrSearchNodesResponseV1Mixin.create(),
        TrinitiCuratorSearchPromotionsResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(SearchPromotionsResponseV1);
MessageResolver.register('tmz:curator:request:search-promotions-response', SearchPromotionsResponseV1);
Object.freeze(SearchPromotionsResponseV1);
Object.freeze(SearchPromotionsResponseV1.prototype);
