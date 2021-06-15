// @link https://schemas.tmz.com/json-schema/tmz/notify/node/twitter-notification/1-0-0.json#
import GdbotsNcrIndexedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/indexed/IndexedV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiNotifyNotificationV1Mixin from '@triniti/schemas/triniti/notify/mixin/notification/NotificationV1Mixin';
import TrinitiNotifyTwitterNotificationV1Mixin from '@triniti/schemas/triniti/notify/mixin/twitter-notification/TwitterNotificationV1Mixin';
import TrinitiNotifyTwitterNotificationV1Trait from '@triniti/schemas/triniti/notify/mixin/twitter-notification/TwitterNotificationV1Trait';

export default class TwitterNotificationV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:notify:node:twitter-notification:1-0-0', TwitterNotificationV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        TrinitiNotifyNotificationV1Mixin.create(),
        TrinitiNotifyTwitterNotificationV1Mixin.create(),
        GdbotsNcrIndexedV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(TwitterNotificationV1);
TrinitiNotifyTwitterNotificationV1Trait(TwitterNotificationV1);
MessageResolver.register('tmz:notify:node:twitter-notification', TwitterNotificationV1);
Object.freeze(TwitterNotificationV1);
Object.freeze(TwitterNotificationV1.prototype);
