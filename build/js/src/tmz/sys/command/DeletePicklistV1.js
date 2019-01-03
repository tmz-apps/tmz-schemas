// @link https://schemas.tmz.com/json-schema/tmz/sys/command/delete-picklist/1-0-0.json#
import GdbotsNcrDeleteNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/delete-node/DeleteNodeV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class DeletePicklistV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:sys:command:delete-picklist:1-0-0', DeletePicklistV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrDeleteNodeV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(DeletePicklistV1);
MessageResolver.register('tmz:sys:command:delete-picklist', DeletePicklistV1);
Object.freeze(DeletePicklistV1);
Object.freeze(DeletePicklistV1.prototype);
