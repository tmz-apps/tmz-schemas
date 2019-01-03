// @link https://schemas.tmz.com/json-schema/tmz/notify/event/notification-sent/1-0-0.json#
import GdbotsAnalyticsTrackedMessageV1Mixin from '@gdbots/schemas/gdbots/analytics/mixin/tracked-message/TrackedMessageV1Mixin';
import GdbotsEnrichmentsTimePartingV1Mixin from '@gdbots/schemas/gdbots/enrichments/mixin/time-parting/TimePartingV1Mixin';
import GdbotsEnrichmentsTimeSamplingV1Mixin from '@gdbots/schemas/gdbots/enrichments/mixin/time-sampling/TimeSamplingV1Mixin';
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiNotifyNotificationSentV1Mixin from '@triniti/schemas/triniti/notify/mixin/notification-sent/NotificationSentV1Mixin';

export default class NotificationSentV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:notify:event:notification-sent:1-0-0', NotificationSentV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        TrinitiNotifyNotificationSentV1Mixin.create(),
        GdbotsAnalyticsTrackedMessageV1Mixin.create(),
        GdbotsEnrichmentsTimePartingV1Mixin.create(),
        GdbotsEnrichmentsTimeSamplingV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(NotificationSentV1);
MessageResolver.register('tmz:notify:event:notification-sent', NotificationSentV1);
Object.freeze(NotificationSentV1);
Object.freeze(NotificationSentV1.prototype);
