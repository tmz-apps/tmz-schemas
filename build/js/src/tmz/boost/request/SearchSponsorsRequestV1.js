// @link https://schemas.tmz.com/json-schema/tmz/boost/request/search-sponsors-request/1-0-0.json#
import GdbotsNcrSearchNodesRequestV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/search-nodes-request/SearchNodesRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import GdbotsPbjxRequestV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiBoostSearchSponsorsRequestV1Mixin from '@triniti/schemas/triniti/boost/mixin/search-sponsors-request/SearchSponsorsRequestV1Mixin';

export default class SearchSponsorsRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:boost:request:search-sponsors-request:1-0-0', SearchSponsorsRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsNcrSearchNodesRequestV1Mixin.create(),
        TrinitiBoostSearchSponsorsRequestV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxRequestV1Trait(SearchSponsorsRequestV1);
MessageResolver.register('tmz:boost:request:search-sponsors-request', SearchSponsorsRequestV1);
Object.freeze(SearchSponsorsRequestV1);
Object.freeze(SearchSponsorsRequestV1.prototype);
