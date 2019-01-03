// @link https://schemas.tmz.com/json-schema/tmz/iam/command/revoke-roles-from-user/1-0-0.json#
import GdbotsIamRevokeRolesFromUserV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/revoke-roles-from-user/RevokeRolesFromUserV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class RevokeRolesFromUserV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:iam:command:revoke-roles-from-user:1-0-0', RevokeRolesFromUserV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsIamRevokeRolesFromUserV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(RevokeRolesFromUserV1);
MessageResolver.register('tmz:iam:command:revoke-roles-from-user', RevokeRolesFromUserV1);
Object.freeze(RevokeRolesFromUserV1);
Object.freeze(RevokeRolesFromUserV1.prototype);
