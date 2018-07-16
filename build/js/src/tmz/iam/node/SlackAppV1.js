// @link http://schemas.tmz.com/json-schema/tmz/iam/node/slack-app/1-0-0.json#
import GdbotsIamAppV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/app/AppV1Mixin';
import GdbotsIamSlackAppV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/slack-app/SlackAppV1Mixin';
import GdbotsIamSlackAppV1Trait from '@gdbots/schemas/gdbots/iam/mixin/slack-app/SlackAppV1Trait';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class SlackAppV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:iam:node:slack-app:1-0-0', SlackAppV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        GdbotsIamAppV1Mixin.create(),
        GdbotsIamSlackAppV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(SlackAppV1);
GdbotsIamSlackAppV1Trait(SlackAppV1);
MessageResolver.register('tmz:iam:node:slack-app', SlackAppV1);
Object.freeze(SlackAppV1);
Object.freeze(SlackAppV1.prototype);
