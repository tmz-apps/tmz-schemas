// @link http://schemas.tmz.com/json-schema/tmz/news/request/search-articles-response/1-0-0.json#
import GdbotsNcrSearchNodesResponseV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/search-nodes-response/SearchNodesResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiNewsSearchArticlesResponseV1Mixin from '@triniti/schemas/triniti/news/mixin/search-articles-response/SearchArticlesResponseV1Mixin';

export default class SearchArticlesResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:news:request:search-articles-response:1-0-0', SearchArticlesResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsNcrSearchNodesResponseV1Mixin.create(),
        TrinitiNewsSearchArticlesResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(SearchArticlesResponseV1);
MessageResolver.register('tmz:news:request:search-articles-response', SearchArticlesResponseV1);
Object.freeze(SearchArticlesResponseV1);
Object.freeze(SearchArticlesResponseV1.prototype);
