// @link http://schemas.tmz.com/json-schema/tmz/apollo/command/expire-poll/1-0-0.json#
import GdbotsNcrExpireNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/expire-node/ExpireNodeV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class ExpirePollV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:apollo:command:expire-poll:1-0-0', ExpirePollV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrExpireNodeV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(ExpirePollV1);
MessageResolver.register('tmz:apollo:command:expire-poll', ExpirePollV1);
Object.freeze(ExpirePollV1);
Object.freeze(ExpirePollV1.prototype);
