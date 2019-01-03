// @link https://schemas.tmz.com/json-schema/tmz/notify/node/alexa-notification/1-0-0.json#
import GdbotsNcrIndexedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/indexed/IndexedV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiNotifyAlexaNotificationV1Mixin from '@triniti/schemas/triniti/notify/mixin/alexa-notification/AlexaNotificationV1Mixin';
import TrinitiNotifyAlexaNotificationV1Trait from '@triniti/schemas/triniti/notify/mixin/alexa-notification/AlexaNotificationV1Trait';
import TrinitiNotifyNotificationV1Mixin from '@triniti/schemas/triniti/notify/mixin/notification/NotificationV1Mixin';

export default class AlexaNotificationV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:notify:node:alexa-notification:1-0-0', AlexaNotificationV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        TrinitiNotifyNotificationV1Mixin.create(),
        TrinitiNotifyAlexaNotificationV1Mixin.create(),
        GdbotsNcrIndexedV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(AlexaNotificationV1);
TrinitiNotifyAlexaNotificationV1Trait(AlexaNotificationV1);
MessageResolver.register('tmz:notify:node:alexa-notification', AlexaNotificationV1);
Object.freeze(AlexaNotificationV1);
Object.freeze(AlexaNotificationV1.prototype);
