// @link http://schemas.tmz.com/json-schema/tmz/iam/node/sms-app/1-0-0.json#
import GdbotsIamAppV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/app/AppV1Mixin';
import GdbotsIamSmsAppV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/sms-app/SmsAppV1Mixin';
import GdbotsIamSmsAppV1Trait from '@gdbots/schemas/gdbots/iam/mixin/sms-app/SmsAppV1Trait';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class SmsAppV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:iam:node:sms-app:1-0-0', SmsAppV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        GdbotsIamAppV1Mixin.create(),
        GdbotsIamSmsAppV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(SmsAppV1);
GdbotsIamSmsAppV1Trait(SmsAppV1);
MessageResolver.register('tmz:iam:node:sms-app', SmsAppV1);
Object.freeze(SmsAppV1);
Object.freeze(SmsAppV1.prototype);
