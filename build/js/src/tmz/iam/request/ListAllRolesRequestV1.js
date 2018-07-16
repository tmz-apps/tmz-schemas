// @link http://schemas.tmz.com/json-schema/tmz/iam/request/list-all-roles-request/1-0-0.json#
import GdbotsIamListAllRolesRequestV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/list-all-roles-request/ListAllRolesRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import GdbotsPbjxRequestV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class ListAllRolesRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:iam:request:list-all-roles-request:1-0-0', ListAllRolesRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsIamListAllRolesRequestV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxRequestV1Trait(ListAllRolesRequestV1);
MessageResolver.register('tmz:iam:request:list-all-roles-request', ListAllRolesRequestV1);
Object.freeze(ListAllRolesRequestV1);
Object.freeze(ListAllRolesRequestV1.prototype);
