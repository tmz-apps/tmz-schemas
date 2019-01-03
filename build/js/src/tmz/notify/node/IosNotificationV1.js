// @link https://schemas.tmz.com/json-schema/tmz/notify/node/ios-notification/1-0-0.json#
import GdbotsNcrIndexedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/indexed/IndexedV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiNotifyIosNotificationV1Mixin from '@triniti/schemas/triniti/notify/mixin/ios-notification/IosNotificationV1Mixin';
import TrinitiNotifyIosNotificationV1Trait from '@triniti/schemas/triniti/notify/mixin/ios-notification/IosNotificationV1Trait';
import TrinitiNotifyNotificationV1Mixin from '@triniti/schemas/triniti/notify/mixin/notification/NotificationV1Mixin';

export default class IosNotificationV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:notify:node:ios-notification:1-0-0', IosNotificationV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        TrinitiNotifyNotificationV1Mixin.create(),
        TrinitiNotifyIosNotificationV1Mixin.create(),
        GdbotsNcrIndexedV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(IosNotificationV1);
TrinitiNotifyIosNotificationV1Trait(IosNotificationV1);
MessageResolver.register('tmz:notify:node:ios-notification', IosNotificationV1);
Object.freeze(IosNotificationV1);
Object.freeze(IosNotificationV1.prototype);
