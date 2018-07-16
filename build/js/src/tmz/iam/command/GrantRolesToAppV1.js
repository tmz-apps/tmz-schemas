// @link http://schemas.tmz.com/json-schema/tmz/iam/command/grant-roles-to-app/1-0-0.json#
import GdbotsIamGrantRolesToAppV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/grant-roles-to-app/GrantRolesToAppV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class GrantRolesToAppV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:iam:command:grant-roles-to-app:1-0-0', GrantRolesToAppV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsIamGrantRolesToAppV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(GrantRolesToAppV1);
MessageResolver.register('tmz:iam:command:grant-roles-to-app', GrantRolesToAppV1);
Object.freeze(GrantRolesToAppV1);
Object.freeze(GrantRolesToAppV1.prototype);
