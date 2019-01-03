// @link https://schemas.tmz.com/json-schema/tmz/notify/node/browser-notification/1-0-0.json#
import GdbotsNcrIndexedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/indexed/IndexedV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiNotifyBrowserNotificationV1Mixin from '@triniti/schemas/triniti/notify/mixin/browser-notification/BrowserNotificationV1Mixin';
import TrinitiNotifyBrowserNotificationV1Trait from '@triniti/schemas/triniti/notify/mixin/browser-notification/BrowserNotificationV1Trait';
import TrinitiNotifyNotificationV1Mixin from '@triniti/schemas/triniti/notify/mixin/notification/NotificationV1Mixin';

export default class BrowserNotificationV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:notify:node:browser-notification:1-0-0', BrowserNotificationV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        TrinitiNotifyNotificationV1Mixin.create(),
        TrinitiNotifyBrowserNotificationV1Mixin.create(),
        GdbotsNcrIndexedV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(BrowserNotificationV1);
TrinitiNotifyBrowserNotificationV1Trait(BrowserNotificationV1);
MessageResolver.register('tmz:notify:node:browser-notification', BrowserNotificationV1);
Object.freeze(BrowserNotificationV1);
Object.freeze(BrowserNotificationV1.prototype);
