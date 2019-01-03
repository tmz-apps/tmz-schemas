// @link https://schemas.tmz.com/json-schema/tmz/iam/node/browser-app/1-0-0.json#
import GdbotsIamAppV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/app/AppV1Mixin';
import GdbotsIamBrowserAppV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/browser-app/BrowserAppV1Mixin';
import GdbotsIamBrowserAppV1Trait from '@gdbots/schemas/gdbots/iam/mixin/browser-app/BrowserAppV1Trait';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class BrowserAppV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:iam:node:browser-app:1-0-0', BrowserAppV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        GdbotsIamAppV1Mixin.create(),
        GdbotsIamBrowserAppV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(BrowserAppV1);
GdbotsIamBrowserAppV1Trait(BrowserAppV1);
MessageResolver.register('tmz:iam:node:browser-app', BrowserAppV1);
Object.freeze(BrowserAppV1);
Object.freeze(BrowserAppV1.prototype);
