// @link https://schemas.tmz.com/json-schema/tmz/dam/command/link-assets/1-0-0.json#
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiDamLinkAssetsV1Mixin from '@triniti/schemas/triniti/dam/mixin/link-assets/LinkAssetsV1Mixin';

export default class LinkAssetsV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:dam:command:link-assets:1-0-0', LinkAssetsV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        TrinitiDamLinkAssetsV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(LinkAssetsV1);
MessageResolver.register('tmz:dam:command:link-assets', LinkAssetsV1);
Object.freeze(LinkAssetsV1);
Object.freeze(LinkAssetsV1.prototype);
