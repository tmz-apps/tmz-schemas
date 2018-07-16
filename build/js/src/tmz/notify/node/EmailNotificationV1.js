// @link http://schemas.tmz.com/json-schema/tmz/notify/node/email-notification/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder';
import Format from '@gdbots/pbj/enums/Format';
import GdbotsNcrIndexedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/indexed/IndexedV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/types';
import TrinitiNotifyEmailNotificationV1Mixin from '@triniti/schemas/triniti/notify/mixin/email-notification/EmailNotificationV1Mixin';
import TrinitiNotifyEmailNotificationV1Trait from '@triniti/schemas/triniti/notify/mixin/email-notification/EmailNotificationV1Trait';
import TrinitiNotifyNotificationV1Mixin from '@triniti/schemas/triniti/notify/mixin/notification/NotificationV1Mixin';

export default class EmailNotificationV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:notify:node:email-notification:1-0-0', EmailNotificationV1,
      [
        Fb.create('distro_video_url', T.StringType.create())
          .format(Format.URL)
          .build(),
        Fb.create('distro_video_embed', T.TextType.create())
          .build(),
        Fb.create('distro_photo_url', T.StringType.create())
          .format(Format.URL)
          .build(),
        Fb.create('distro_document_url', T.StringType.create())
          .format(Format.URL)
          .build(),
        Fb.create('distro_date', T.StringType.create())
          .build(),
      ],
      [
        GdbotsNcrNodeV1Mixin.create(),
        TrinitiNotifyNotificationV1Mixin.create(),
        TrinitiNotifyEmailNotificationV1Mixin.create(),
        GdbotsNcrIndexedV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(EmailNotificationV1);
TrinitiNotifyEmailNotificationV1Trait(EmailNotificationV1);
MessageResolver.register('tmz:notify:node:email-notification', EmailNotificationV1);
Object.freeze(EmailNotificationV1);
Object.freeze(EmailNotificationV1.prototype);
