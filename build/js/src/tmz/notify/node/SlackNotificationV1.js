// @link https://schemas.tmz.com/json-schema/tmz/notify/node/slack-notification/1-0-0.json#
import GdbotsNcrIndexedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/indexed/IndexedV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiNotifyNotificationV1Mixin from '@triniti/schemas/triniti/notify/mixin/notification/NotificationV1Mixin';
import TrinitiNotifySlackNotificationV1Mixin from '@triniti/schemas/triniti/notify/mixin/slack-notification/SlackNotificationV1Mixin';
import TrinitiNotifySlackNotificationV1Trait from '@triniti/schemas/triniti/notify/mixin/slack-notification/SlackNotificationV1Trait';

export default class SlackNotificationV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:notify:node:slack-notification:1-0-0', SlackNotificationV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        TrinitiNotifyNotificationV1Mixin.create(),
        TrinitiNotifySlackNotificationV1Mixin.create(),
        GdbotsNcrIndexedV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(SlackNotificationV1);
TrinitiNotifySlackNotificationV1Trait(SlackNotificationV1);
MessageResolver.register('tmz:notify:node:slack-notification', SlackNotificationV1);
Object.freeze(SlackNotificationV1);
Object.freeze(SlackNotificationV1.prototype);
