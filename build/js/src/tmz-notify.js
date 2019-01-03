/**
 * DO NOT EDIT THIS FILE as it will be overwritten by the Pbj compiler.
 * @link https://github.com/gdbots/pbjc-php
 *
 * Registers all of the pbj schemas with the MessageResolver.
 *
 * @link https://schemas.tmz.com/
 */

import MessageResolver from '@gdbots/pbj/MessageResolver';
import '@tmz/schemas/tmz/notify/command/CreateNotificationV1';
import '@tmz/schemas/tmz/notify/command/DeleteNotificationV1';
import '@tmz/schemas/tmz/notify/command/SendNotificationV1';
import '@tmz/schemas/tmz/notify/command/UpdateNotificationV1';
import '@tmz/schemas/tmz/notify/event/NotificationCreatedV1';
import '@tmz/schemas/tmz/notify/event/NotificationDeletedV1';
import '@tmz/schemas/tmz/notify/event/NotificationFailedV1';
import '@tmz/schemas/tmz/notify/event/NotificationSentV1';
import '@tmz/schemas/tmz/notify/event/NotificationUpdatedV1';
import '@tmz/schemas/tmz/notify/node/AlexaNotificationV1';
import '@tmz/schemas/tmz/notify/node/AndroidNotificationV1';
import '@tmz/schemas/tmz/notify/node/AppleNewsNotificationV1';
import '@tmz/schemas/tmz/notify/node/BrowserNotificationV1';
import '@tmz/schemas/tmz/notify/node/EmailNotificationV1';
import '@tmz/schemas/tmz/notify/node/IosNotificationV1';
import '@tmz/schemas/tmz/notify/node/SlackNotificationV1';
import '@tmz/schemas/tmz/notify/node/SmsNotificationV1';
import '@tmz/schemas/tmz/notify/request/GetNotificationHistoryRequestV1';
import '@tmz/schemas/tmz/notify/request/GetNotificationHistoryResponseV1';
import '@tmz/schemas/tmz/notify/request/GetNotificationRequestV1';
import '@tmz/schemas/tmz/notify/request/GetNotificationResponseV1';
import '@tmz/schemas/tmz/notify/request/SearchNotificationsRequestV1';
import '@tmz/schemas/tmz/notify/request/SearchNotificationsResponseV1';

export default MessageResolver;
