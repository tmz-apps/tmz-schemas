// @link http://schemas.tmz.com/json-schema/tmz/sys/request/list-all-picklists-request/1-0-0.json#
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import GdbotsPbjxRequestV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiSysListAllPicklistsRequestV1Mixin from '@triniti/schemas/triniti/sys/mixin/list-all-picklists-request/ListAllPicklistsRequestV1Mixin';

export default class ListAllPicklistsRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:sys:request:list-all-picklists-request:1-0-0', ListAllPicklistsRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        TrinitiSysListAllPicklistsRequestV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxRequestV1Trait(ListAllPicklistsRequestV1);
MessageResolver.register('tmz:sys:request:list-all-picklists-request', ListAllPicklistsRequestV1);
Object.freeze(ListAllPicklistsRequestV1);
Object.freeze(ListAllPicklistsRequestV1.prototype);
