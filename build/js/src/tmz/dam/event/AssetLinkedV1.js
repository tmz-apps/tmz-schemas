// @link https://schemas.tmz.com/json-schema/tmz/dam/event/asset-linked/1-0-0.json#
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiDamAssetLinkedV1Mixin from '@triniti/schemas/triniti/dam/mixin/asset-linked/AssetLinkedV1Mixin';

export default class AssetLinkedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:dam:event:asset-linked:1-0-0', AssetLinkedV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        TrinitiDamAssetLinkedV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(AssetLinkedV1);
MessageResolver.register('tmz:dam:event:asset-linked', AssetLinkedV1);
Object.freeze(AssetLinkedV1);
Object.freeze(AssetLinkedV1.prototype);
