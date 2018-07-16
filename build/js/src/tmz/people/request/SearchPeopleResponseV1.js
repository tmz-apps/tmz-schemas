// @link http://schemas.tmz.com/json-schema/tmz/people/request/search-people-response/1-0-0.json#
import GdbotsNcrSearchNodesResponseV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/search-nodes-response/SearchNodesResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiPeopleSearchPeopleResponseV1Mixin from '@triniti/schemas/triniti/people/mixin/search-people-response/SearchPeopleResponseV1Mixin';

export default class SearchPeopleResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:people:request:search-people-response:1-0-0', SearchPeopleResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsNcrSearchNodesResponseV1Mixin.create(),
        TrinitiPeopleSearchPeopleResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(SearchPeopleResponseV1);
MessageResolver.register('tmz:people:request:search-people-response', SearchPeopleResponseV1);
Object.freeze(SearchPeopleResponseV1);
Object.freeze(SearchPeopleResponseV1.prototype);
