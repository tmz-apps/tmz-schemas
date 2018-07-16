// @link http://schemas.tmz.com/json-schema/tmz/iam/command/revoke-roles-from-app/1-0-0.json#
import GdbotsIamRevokeRolesFromAppV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/revoke-roles-from-app/RevokeRolesFromAppV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class RevokeRolesFromAppV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:iam:command:revoke-roles-from-app:1-0-0', RevokeRolesFromAppV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsIamRevokeRolesFromAppV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(RevokeRolesFromAppV1);
MessageResolver.register('tmz:iam:command:revoke-roles-from-app', RevokeRolesFromAppV1);
Object.freeze(RevokeRolesFromAppV1);
Object.freeze(RevokeRolesFromAppV1.prototype);
