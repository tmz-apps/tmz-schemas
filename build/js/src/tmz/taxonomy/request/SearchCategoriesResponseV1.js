// @link https://schemas.tmz.com/json-schema/tmz/taxonomy/request/search-categories-response/1-0-0.json#
import GdbotsNcrSearchNodesResponseV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/search-nodes-response/SearchNodesResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiTaxonomySearchCategoriesResponseV1Mixin from '@triniti/schemas/triniti/taxonomy/mixin/search-categories-response/SearchCategoriesResponseV1Mixin';

export default class SearchCategoriesResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:taxonomy:request:search-categories-response:1-0-0', SearchCategoriesResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsNcrSearchNodesResponseV1Mixin.create(),
        TrinitiTaxonomySearchCategoriesResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(SearchCategoriesResponseV1);
MessageResolver.register('tmz:taxonomy:request:search-categories-response', SearchCategoriesResponseV1);
Object.freeze(SearchCategoriesResponseV1);
Object.freeze(SearchCategoriesResponseV1.prototype);
