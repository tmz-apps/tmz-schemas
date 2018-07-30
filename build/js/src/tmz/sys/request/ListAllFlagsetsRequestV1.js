// @link http://schemas.tmz.com/json-schema/tmz/sys/request/list-all-flagsets-request/1-0-0.json#
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import GdbotsPbjxRequestV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiSysListAllFlagsetsRequestV1Mixin from '@triniti/schemas/triniti/sys/mixin/list-all-flagsets-request/ListAllFlagsetsRequestV1Mixin';

export default class ListAllFlagsetsRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:sys:request:list-all-flagsets-request:1-0-0', ListAllFlagsetsRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        TrinitiSysListAllFlagsetsRequestV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxRequestV1Trait(ListAllFlagsetsRequestV1);
MessageResolver.register('tmz:sys:request:list-all-flagsets-request', ListAllFlagsetsRequestV1);
Object.freeze(ListAllFlagsetsRequestV1);
Object.freeze(ListAllFlagsetsRequestV1.prototype);
