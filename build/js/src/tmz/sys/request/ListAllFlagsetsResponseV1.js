// @link https://schemas.tmz.com/json-schema/tmz/sys/request/list-all-flagsets-response/1-0-0.json#
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiSysListAllFlagsetsResponseV1Mixin from '@triniti/schemas/triniti/sys/mixin/list-all-flagsets-response/ListAllFlagsetsResponseV1Mixin';

export default class ListAllFlagsetsResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:sys:request:list-all-flagsets-response:1-0-0', ListAllFlagsetsResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        TrinitiSysListAllFlagsetsResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(ListAllFlagsetsResponseV1);
MessageResolver.register('tmz:sys:request:list-all-flagsets-response', ListAllFlagsetsResponseV1);
Object.freeze(ListAllFlagsetsResponseV1);
Object.freeze(ListAllFlagsetsResponseV1.prototype);
