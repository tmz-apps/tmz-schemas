// @link https://schemas.tmz.com/json-schema/tmz/iam/node/apple-news-app/1-0-0.json#
import GdbotsIamAppV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/app/AppV1Mixin';
import GdbotsIamAppleNewsAppV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/apple-news-app/AppleNewsAppV1Mixin';
import GdbotsIamAppleNewsAppV1Trait from '@gdbots/schemas/gdbots/iam/mixin/apple-news-app/AppleNewsAppV1Trait';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class AppleNewsAppV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:iam:node:apple-news-app:1-0-0', AppleNewsAppV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        GdbotsIamAppV1Mixin.create(),
        GdbotsIamAppleNewsAppV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(AppleNewsAppV1);
GdbotsIamAppleNewsAppV1Trait(AppleNewsAppV1);
MessageResolver.register('tmz:iam:node:apple-news-app', AppleNewsAppV1);
Object.freeze(AppleNewsAppV1);
Object.freeze(AppleNewsAppV1.prototype);
