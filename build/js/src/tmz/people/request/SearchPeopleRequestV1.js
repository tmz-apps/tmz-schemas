// @link http://schemas.tmz.com/json-schema/tmz/people/request/search-people-request/1-0-0.json#
import GdbotsNcrSearchNodesRequestV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/search-nodes-request/SearchNodesRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import GdbotsPbjxRequestV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiPeopleSearchPeopleRequestV1Mixin from '@triniti/schemas/triniti/people/mixin/search-people-request/SearchPeopleRequestV1Mixin';

export default class SearchPeopleRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:people:request:search-people-request:1-0-0', SearchPeopleRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsNcrSearchNodesRequestV1Mixin.create(),
        TrinitiPeopleSearchPeopleRequestV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxRequestV1Trait(SearchPeopleRequestV1);
MessageResolver.register('tmz:people:request:search-people-request', SearchPeopleRequestV1);
Object.freeze(SearchPeopleRequestV1);
Object.freeze(SearchPeopleRequestV1.prototype);
