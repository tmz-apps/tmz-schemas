// @link https://schemas.tmz.com/json-schema/tmz/notify/event/notification-created/1-0-0.json#
import GdbotsNcrNodeCreatedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node-created/NodeCreatedV1Mixin';
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class NotificationCreatedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:notify:event:notification-created:1-0-0', NotificationCreatedV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsNcrNodeCreatedV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(NotificationCreatedV1);
MessageResolver.register('tmz:notify:event:notification-created', NotificationCreatedV1);
Object.freeze(NotificationCreatedV1);
Object.freeze(NotificationCreatedV1.prototype);
