// @link https://schemas.tmz.com/json-schema/tmz/sys/request/get-redirect-response/1-0-0.json#
import GdbotsNcrGetNodeResponseV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/get-node-response/GetNodeResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiSysGetRedirectResponseV1Mixin from '@triniti/schemas/triniti/sys/mixin/get-redirect-response/GetRedirectResponseV1Mixin';

export default class GetRedirectResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:sys:request:get-redirect-response:1-0-0', GetRedirectResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsNcrGetNodeResponseV1Mixin.create(),
        TrinitiSysGetRedirectResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(GetRedirectResponseV1);
MessageResolver.register('tmz:sys:request:get-redirect-response', GetRedirectResponseV1);
Object.freeze(GetRedirectResponseV1);
Object.freeze(GetRedirectResponseV1.prototype);
