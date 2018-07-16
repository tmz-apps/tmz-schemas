// @link http://schemas.tmz.com/json-schema/tmz/dam/command/unlink-assets/1-0-0.json#
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiDamUnlinkAssetsV1Mixin from '@triniti/schemas/triniti/dam/mixin/unlink-assets/UnlinkAssetsV1Mixin';

export default class UnlinkAssetsV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:dam:command:unlink-assets:1-0-0', UnlinkAssetsV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        TrinitiDamUnlinkAssetsV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(UnlinkAssetsV1);
MessageResolver.register('tmz:dam:command:unlink-assets', UnlinkAssetsV1);
Object.freeze(UnlinkAssetsV1);
Object.freeze(UnlinkAssetsV1.prototype);
