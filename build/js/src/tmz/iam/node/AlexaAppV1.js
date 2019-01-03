// @link https://schemas.tmz.com/json-schema/tmz/iam/node/alexa-app/1-0-0.json#
import GdbotsIamAlexaAppV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/alexa-app/AlexaAppV1Mixin';
import GdbotsIamAlexaAppV1Trait from '@gdbots/schemas/gdbots/iam/mixin/alexa-app/AlexaAppV1Trait';
import GdbotsIamAppV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/app/AppV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class AlexaAppV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:iam:node:alexa-app:1-0-0', AlexaAppV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        GdbotsIamAppV1Mixin.create(),
        GdbotsIamAlexaAppV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(AlexaAppV1);
GdbotsIamAlexaAppV1Trait(AlexaAppV1);
MessageResolver.register('tmz:iam:node:alexa-app', AlexaAppV1);
Object.freeze(AlexaAppV1);
Object.freeze(AlexaAppV1.prototype);
