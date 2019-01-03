// @link https://schemas.tmz.com/json-schema/tmz/boost/request/search-sponsors-response/1-0-0.json#
import GdbotsNcrSearchNodesResponseV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/search-nodes-response/SearchNodesResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiBoostSearchSponsorsResponseV1Mixin from '@triniti/schemas/triniti/boost/mixin/search-sponsors-response/SearchSponsorsResponseV1Mixin';

export default class SearchSponsorsResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:boost:request:search-sponsors-response:1-0-0', SearchSponsorsResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsNcrSearchNodesResponseV1Mixin.create(),
        TrinitiBoostSearchSponsorsResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(SearchSponsorsResponseV1);
MessageResolver.register('tmz:boost:request:search-sponsors-response', SearchSponsorsResponseV1);
Object.freeze(SearchSponsorsResponseV1);
Object.freeze(SearchSponsorsResponseV1.prototype);
