// @link https://schemas.tmz.com/json-schema/tmz/notify/node/alexa-notification/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import Message from '@gdbots/pbj/Message';
import NodeStatus from '@gdbots/schemas/gdbots/ncr/enums/NodeStatus';
import NotificationSendStatus from '@triniti/schemas/triniti/notify/enums/NotificationSendStatus';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/types';
import TrinitiNotifyAlexaNotificationV1Mixin from '@triniti/schemas/triniti/notify/mixin/alexa-notification/AlexaNotificationV1Mixin';
import UuidIdentifier from '@gdbots/pbj/well-known/UuidIdentifier';

export default class AlexaNotificationV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema(this.SCHEMA_ID, this,
      [
        /*
         * The "_id" value:
         * - MUST NOT change for the life of the node.
         * - SHOULD be globally unique
         * - SHOULD be generated by the app (ideally in default value closure... e.g. UuidIdentifier::generate())
         */
        Fb.create('_id', T.IdentifierType.create())
          .required()
          .withDefault(() => UuidIdentifier.generate())
          .classProto(UuidIdentifier)
          .overridable(true)
          .build(),
        Fb.create('status', T.StringEnumType.create())
          .withDefault("draft")
          .classProto(NodeStatus)
          .build(),
        Fb.create('etag', T.StringType.create())
          .maxLength(100)
          .pattern('^[\\w\\.:-]+$')
          .build(),
        Fb.create('created_at', T.MicrotimeType.create())
          .build(),
        /*
         * A fully qualified reference to what created this node. This is intentionally a message-ref
         * and not a user id because it is often a program that creates nodes, not a user.
         */
        Fb.create('creator_ref', T.MessageRefType.create())
          .build(),
        Fb.create('updated_at', T.MicrotimeType.create())
          .useTypeDefault(false)
          .build(),
        /*
         * A fully qualified reference to what updated this node. This is intentionally a message-ref
         * and not a user id because it is often a program that updates nodes, not a user.
         * E.g. "acme:iam:node:app:cli-scheduler" or "acme:iam:node:user:60c71df0-fda8-11e5-bfb9-30342d363854"
         */
        Fb.create('updater_ref', T.MessageRefType.create())
          .build(),
        /*
         * A reference to the last event that changed the state of this node.
         * E.g. "acme:blog:event:article-published:60c71df0-fda8-11e5-bfb9-30342d363854"
         */
        Fb.create('last_event_ref', T.MessageRefType.create())
          .build(),
        Fb.create('title', T.StringType.create())
          .build(),
        /*
         * A reference to the app this notification is being sent to.
         */
        Fb.create('app_ref', T.NodeRefType.create())
          .build(),
        /*
         * A reference to the content this notification will include.
         */
        Fb.create('content_ref', T.NodeRefType.create())
          .build(),
        Fb.create('send_status', T.StringEnumType.create())
          .withDefault("draft")
          .classProto(NotificationSendStatus)
          .build(),
        Fb.create('send_on_publish', T.BooleanType.create())
          .build(),
        Fb.create('send_at', T.DateTimeType.create())
          .build(),
        Fb.create('sent_at', T.DateTimeType.create())
          .build(),
        /*
         * The body of the notification to use (format depends on app/platform). If present
         * this value should take precedence over the body derived from content_ref.
         */
        Fb.create('body', T.TextType.create())
          .maxLength(2000)
          .build(),
        Fb.create('notifier_result', T.MessageType.create())
          .anyOfCuries([
            'triniti:notify::notifier-result',
          ])
          .build(),
      ],
      this.MIXINS,
    );
  }
}

const M = AlexaNotificationV1;
M.prototype.SCHEMA_ID = M.SCHEMA_ID = 'pbj:tmz:notify:node:alexa-notification:1-0-0';
M.prototype.SCHEMA_CURIE = M.SCHEMA_CURIE = 'tmz:notify:node:alexa-notification';
M.prototype.SCHEMA_CURIE_MAJOR = M.SCHEMA_CURIE_MAJOR = 'tmz:notify:node:alexa-notification:v1';
M.prototype.MIXINS = M.MIXINS = [
  'gdbots:ncr:mixin:node:v1',
  'gdbots:ncr:mixin:node',
  'triniti:notify:mixin:notification:v1',
  'triniti:notify:mixin:notification',
  'triniti:notify:mixin:alexa-notification:v1',
  'triniti:notify:mixin:alexa-notification',
];

GdbotsNcrNodeV1Mixin(M);

TrinitiNotifyAlexaNotificationV1Mixin(M);

Object.freeze(M);
Object.freeze(M.prototype);
