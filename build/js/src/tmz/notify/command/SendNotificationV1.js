// @link http://schemas.tmz.com/json-schema/tmz/notify/command/send-notification/1-0-0.json#
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiNotifySendNotificationV1Mixin from '@triniti/schemas/triniti/notify/mixin/send-notification/SendNotificationV1Mixin';

export default class SendNotificationV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:notify:command:send-notification:1-0-0', SendNotificationV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        TrinitiNotifySendNotificationV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(SendNotificationV1);
MessageResolver.register('tmz:notify:command:send-notification', SendNotificationV1);
Object.freeze(SendNotificationV1);
Object.freeze(SendNotificationV1.prototype);
