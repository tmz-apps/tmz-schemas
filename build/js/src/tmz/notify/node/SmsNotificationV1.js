// @link https://schemas.tmz.com/json-schema/tmz/notify/node/sms-notification/1-0-0.json#
import GdbotsNcrIndexedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/indexed/IndexedV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiNotifyNotificationV1Mixin from '@triniti/schemas/triniti/notify/mixin/notification/NotificationV1Mixin';
import TrinitiNotifySmsNotificationV1Mixin from '@triniti/schemas/triniti/notify/mixin/sms-notification/SmsNotificationV1Mixin';
import TrinitiNotifySmsNotificationV1Trait from '@triniti/schemas/triniti/notify/mixin/sms-notification/SmsNotificationV1Trait';

export default class SmsNotificationV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:notify:node:sms-notification:1-0-0', SmsNotificationV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        TrinitiNotifyNotificationV1Mixin.create(),
        TrinitiNotifySmsNotificationV1Mixin.create(),
        GdbotsNcrIndexedV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(SmsNotificationV1);
TrinitiNotifySmsNotificationV1Trait(SmsNotificationV1);
MessageResolver.register('tmz:notify:node:sms-notification', SmsNotificationV1);
Object.freeze(SmsNotificationV1);
Object.freeze(SmsNotificationV1.prototype);
