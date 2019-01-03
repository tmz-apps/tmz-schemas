// @link https://schemas.tmz.com/json-schema/tmz/news/request/search-articles-request/1-0-0.json#
import GdbotsNcrSearchNodesRequestV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/search-nodes-request/SearchNodesRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import GdbotsPbjxRequestV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCuratorWidgetSearchRequestV1Mixin from '@triniti/schemas/triniti/curator/mixin/widget-search-request/WidgetSearchRequestV1Mixin';
import TrinitiNewsSearchArticlesRequestV1Mixin from '@triniti/schemas/triniti/news/mixin/search-articles-request/SearchArticlesRequestV1Mixin';

export default class SearchArticlesRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:news:request:search-articles-request:1-0-0', SearchArticlesRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsNcrSearchNodesRequestV1Mixin.create(),
        TrinitiNewsSearchArticlesRequestV1Mixin.create(),
        TrinitiCuratorWidgetSearchRequestV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxRequestV1Trait(SearchArticlesRequestV1);
MessageResolver.register('tmz:news:request:search-articles-request', SearchArticlesRequestV1);
Object.freeze(SearchArticlesRequestV1);
Object.freeze(SearchArticlesRequestV1.prototype);
