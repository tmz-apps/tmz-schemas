// @link https://schemas.tmz.com/json-schema/tmz/notify/node/android-notification/1-0-0.json#
import GdbotsNcrIndexedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/indexed/IndexedV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiNotifyAndroidNotificationV1Mixin from '@triniti/schemas/triniti/notify/mixin/android-notification/AndroidNotificationV1Mixin';
import TrinitiNotifyAndroidNotificationV1Trait from '@triniti/schemas/triniti/notify/mixin/android-notification/AndroidNotificationV1Trait';
import TrinitiNotifyNotificationV1Mixin from '@triniti/schemas/triniti/notify/mixin/notification/NotificationV1Mixin';

export default class AndroidNotificationV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:notify:node:android-notification:1-0-0', AndroidNotificationV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        TrinitiNotifyNotificationV1Mixin.create(),
        TrinitiNotifyAndroidNotificationV1Mixin.create(),
        GdbotsNcrIndexedV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(AndroidNotificationV1);
TrinitiNotifyAndroidNotificationV1Trait(AndroidNotificationV1);
MessageResolver.register('tmz:notify:node:android-notification', AndroidNotificationV1);
Object.freeze(AndroidNotificationV1);
Object.freeze(AndroidNotificationV1.prototype);
