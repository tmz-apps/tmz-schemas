// @link http://schemas.tmz.com/json-schema/tmz/iam/request/get-all-apps-request/1-0-0.json#
import GdbotsIamGetAllAppsRequestV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/get-all-apps-request/GetAllAppsRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import GdbotsPbjxRequestV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class GetAllAppsRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:iam:request:get-all-apps-request:1-0-0', GetAllAppsRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsIamGetAllAppsRequestV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxRequestV1Trait(GetAllAppsRequestV1);
MessageResolver.register('tmz:iam:request:get-all-apps-request', GetAllAppsRequestV1);
Object.freeze(GetAllAppsRequestV1);
Object.freeze(GetAllAppsRequestV1.prototype);
