// @link http://schemas.tmz.com/json-schema/tmz/iam/node/role/1-0-0.json#
import GdbotsIamRoleV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/role/RoleV1Mixin';
import GdbotsIamRoleV1Trait from '@gdbots/schemas/gdbots/iam/mixin/role/RoleV1Trait';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class RoleV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:iam:node:role:1-0-0', RoleV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        GdbotsIamRoleV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(RoleV1);
GdbotsIamRoleV1Trait(RoleV1);
MessageResolver.register('tmz:iam:node:role', RoleV1);
Object.freeze(RoleV1);
Object.freeze(RoleV1.prototype);
