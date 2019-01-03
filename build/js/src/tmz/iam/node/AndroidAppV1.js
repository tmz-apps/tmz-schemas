// @link https://schemas.tmz.com/json-schema/tmz/iam/node/android-app/1-0-0.json#
import GdbotsIamAndroidAppV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/android-app/AndroidAppV1Mixin';
import GdbotsIamAndroidAppV1Trait from '@gdbots/schemas/gdbots/iam/mixin/android-app/AndroidAppV1Trait';
import GdbotsIamAppV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/app/AppV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class AndroidAppV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:iam:node:android-app:1-0-0', AndroidAppV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        GdbotsIamAppV1Mixin.create(),
        GdbotsIamAndroidAppV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(AndroidAppV1);
GdbotsIamAndroidAppV1Trait(AndroidAppV1);
MessageResolver.register('tmz:iam:node:android-app', AndroidAppV1);
Object.freeze(AndroidAppV1);
Object.freeze(AndroidAppV1.prototype);
