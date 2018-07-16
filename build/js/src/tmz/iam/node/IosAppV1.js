// @link http://schemas.tmz.com/json-schema/tmz/iam/node/ios-app/1-0-0.json#
import GdbotsIamAppV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/app/AppV1Mixin';
import GdbotsIamIosAppV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/ios-app/IosAppV1Mixin';
import GdbotsIamIosAppV1Trait from '@gdbots/schemas/gdbots/iam/mixin/ios-app/IosAppV1Trait';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class IosAppV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:iam:node:ios-app:1-0-0', IosAppV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        GdbotsIamAppV1Mixin.create(),
        GdbotsIamIosAppV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(IosAppV1);
GdbotsIamIosAppV1Trait(IosAppV1);
MessageResolver.register('tmz:iam:node:ios-app', IosAppV1);
Object.freeze(IosAppV1);
Object.freeze(IosAppV1.prototype);
