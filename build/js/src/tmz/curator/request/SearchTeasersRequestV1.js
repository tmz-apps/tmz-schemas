// @link http://schemas.tmz.com/json-schema/tmz/curator/request/search-teasers-request/1-0-0.json#
import GdbotsNcrSearchNodesRequestV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/search-nodes-request/SearchNodesRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import GdbotsPbjxRequestV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCuratorSearchTeasersRequestV1Mixin from '@triniti/schemas/triniti/curator/mixin/search-teasers-request/SearchTeasersRequestV1Mixin';
import TrinitiCuratorWidgetSearchRequestV1Mixin from '@triniti/schemas/triniti/curator/mixin/widget-search-request/WidgetSearchRequestV1Mixin';

export default class SearchTeasersRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:request:search-teasers-request:1-0-0', SearchTeasersRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsNcrSearchNodesRequestV1Mixin.create(),
        TrinitiCuratorSearchTeasersRequestV1Mixin.create(),
        TrinitiCuratorWidgetSearchRequestV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxRequestV1Trait(SearchTeasersRequestV1);
MessageResolver.register('tmz:curator:request:search-teasers-request', SearchTeasersRequestV1);
Object.freeze(SearchTeasersRequestV1);
Object.freeze(SearchTeasersRequestV1.prototype);
