// @link http://schemas.tmz.com/json-schema/tmz/iam/request/get-user-response/1-0-0.json#
import GdbotsIamGetUserResponseV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/get-user-response/GetUserResponseV1Mixin';
import GdbotsNcrGetNodeResponseV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/get-node-response/GetNodeResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class GetUserResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:iam:request:get-user-response:1-0-0', GetUserResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsNcrGetNodeResponseV1Mixin.create(),
        GdbotsIamGetUserResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(GetUserResponseV1);
MessageResolver.register('tmz:iam:request:get-user-response', GetUserResponseV1);
Object.freeze(GetUserResponseV1);
Object.freeze(GetUserResponseV1.prototype);
