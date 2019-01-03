// @link https://schemas.tmz.com/json-schema/tmz/boost/command/rename-sponsor/1-0-0.json#
import GdbotsNcrRenameNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/rename-node/RenameNodeV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class RenameSponsorV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:boost:command:rename-sponsor:1-0-0', RenameSponsorV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrRenameNodeV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(RenameSponsorV1);
MessageResolver.register('tmz:boost:command:rename-sponsor', RenameSponsorV1);
Object.freeze(RenameSponsorV1);
Object.freeze(RenameSponsorV1.prototype);
