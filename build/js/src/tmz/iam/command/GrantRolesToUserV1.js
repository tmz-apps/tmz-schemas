// @link https://schemas.tmz.com/json-schema/tmz/iam/command/grant-roles-to-user/1-0-0.json#
import GdbotsIamGrantRolesToUserV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/grant-roles-to-user/GrantRolesToUserV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class GrantRolesToUserV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:iam:command:grant-roles-to-user:1-0-0', GrantRolesToUserV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsIamGrantRolesToUserV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(GrantRolesToUserV1);
MessageResolver.register('tmz:iam:command:grant-roles-to-user', GrantRolesToUserV1);
Object.freeze(GrantRolesToUserV1);
Object.freeze(GrantRolesToUserV1.prototype);
