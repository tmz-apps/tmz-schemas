// @link http://schemas.tmz.com/json-schema/tmz/iam/node/email-app/1-0-0.json#
import GdbotsIamAppV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/app/AppV1Mixin';
import GdbotsIamEmailAppV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/email-app/EmailAppV1Mixin';
import GdbotsIamEmailAppV1Trait from '@gdbots/schemas/gdbots/iam/mixin/email-app/EmailAppV1Trait';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class EmailAppV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:iam:node:email-app:1-0-0', EmailAppV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        GdbotsIamAppV1Mixin.create(),
        GdbotsIamEmailAppV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(EmailAppV1);
GdbotsIamEmailAppV1Trait(EmailAppV1);
MessageResolver.register('tmz:iam:node:email-app', EmailAppV1);
Object.freeze(EmailAppV1);
Object.freeze(EmailAppV1.prototype);
