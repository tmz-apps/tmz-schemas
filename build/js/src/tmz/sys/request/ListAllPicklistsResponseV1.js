// @link http://schemas.tmz.com/json-schema/tmz/sys/request/list-all-picklists-response/1-0-0.json#
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiSysListAllPicklistsResponseV1Mixin from '@triniti/schemas/triniti/sys/mixin/list-all-picklists-response/ListAllPicklistsResponseV1Mixin';

export default class ListAllPicklistsResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:sys:request:list-all-picklists-response:1-0-0', ListAllPicklistsResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        TrinitiSysListAllPicklistsResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(ListAllPicklistsResponseV1);
MessageResolver.register('tmz:sys:request:list-all-picklists-response', ListAllPicklistsResponseV1);
Object.freeze(ListAllPicklistsResponseV1);
Object.freeze(ListAllPicklistsResponseV1.prototype);
