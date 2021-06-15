// @link https://schemas.tmz.com/json-schema/tmz/iam/node/twitter-app/1-0-0.json#
import GdbotsIamAppV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/app/AppV1Mixin';
import GdbotsIamTwitterAppV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/twitter-app/TwitterAppV1Mixin';
import GdbotsIamTwitterAppV1Trait from '@gdbots/schemas/gdbots/iam/mixin/twitter-app/TwitterAppV1Trait';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class TwitterAppV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:iam:node:twitter-app:1-0-0', TwitterAppV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        GdbotsIamAppV1Mixin.create(),
        GdbotsIamTwitterAppV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(TwitterAppV1);
GdbotsIamTwitterAppV1Trait(TwitterAppV1);
MessageResolver.register('tmz:iam:node:twitter-app', TwitterAppV1);
Object.freeze(TwitterAppV1);
Object.freeze(TwitterAppV1.prototype);
