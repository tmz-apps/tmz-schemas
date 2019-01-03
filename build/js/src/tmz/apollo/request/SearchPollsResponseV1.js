// @link https://schemas.tmz.com/json-schema/tmz/apollo/request/search-polls-response/1-0-0.json#
import GdbotsNcrSearchNodesResponseV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/search-nodes-response/SearchNodesResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiApolloSearchPollsResponseV1Mixin from '@triniti/schemas/triniti/apollo/mixin/search-polls-response/SearchPollsResponseV1Mixin';

export default class SearchPollsResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:apollo:request:search-polls-response:1-0-0', SearchPollsResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsNcrSearchNodesResponseV1Mixin.create(),
        TrinitiApolloSearchPollsResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(SearchPollsResponseV1);
MessageResolver.register('tmz:apollo:request:search-polls-response', SearchPollsResponseV1);
Object.freeze(SearchPollsResponseV1);
Object.freeze(SearchPollsResponseV1.prototype);
