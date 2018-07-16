// @link http://schemas.tmz.com/json-schema/tmz/taxonomy/request/search-categories-request/1-0-0.json#
import GdbotsNcrSearchNodesRequestV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/search-nodes-request/SearchNodesRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import GdbotsPbjxRequestV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiTaxonomySearchCategoriesRequestV1Mixin from '@triniti/schemas/triniti/taxonomy/mixin/search-categories-request/SearchCategoriesRequestV1Mixin';

export default class SearchCategoriesRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:taxonomy:request:search-categories-request:1-0-0', SearchCategoriesRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsNcrSearchNodesRequestV1Mixin.create(),
        TrinitiTaxonomySearchCategoriesRequestV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxRequestV1Trait(SearchCategoriesRequestV1);
MessageResolver.register('tmz:taxonomy:request:search-categories-request', SearchCategoriesRequestV1);
Object.freeze(SearchCategoriesRequestV1);
Object.freeze(SearchCategoriesRequestV1.prototype);
