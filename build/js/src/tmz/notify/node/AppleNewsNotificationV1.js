// @link http://schemas.tmz.com/json-schema/tmz/notify/node/apple-news-notification/1-0-0.json#
import GdbotsNcrIndexedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/indexed/IndexedV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiNotifyAppleNewsNotificationV1Mixin from '@triniti/schemas/triniti/notify/mixin/apple-news-notification/AppleNewsNotificationV1Mixin';
import TrinitiNotifyAppleNewsNotificationV1Trait from '@triniti/schemas/triniti/notify/mixin/apple-news-notification/AppleNewsNotificationV1Trait';
import TrinitiNotifyNotificationV1Mixin from '@triniti/schemas/triniti/notify/mixin/notification/NotificationV1Mixin';

export default class AppleNewsNotificationV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:notify:node:apple-news-notification:1-0-0', AppleNewsNotificationV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        TrinitiNotifyNotificationV1Mixin.create(),
        TrinitiNotifyAppleNewsNotificationV1Mixin.create(),
        GdbotsNcrIndexedV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(AppleNewsNotificationV1);
TrinitiNotifyAppleNewsNotificationV1Trait(AppleNewsNotificationV1);
MessageResolver.register('tmz:notify:node:apple-news-notification', AppleNewsNotificationV1);
Object.freeze(AppleNewsNotificationV1);
Object.freeze(AppleNewsNotificationV1.prototype);
