// @link https://schemas.tmz.com/json-schema/tmz/dam/event/asset-unlinked/1-0-0.json#
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiDamAssetUnlinkedV1Mixin from '@triniti/schemas/triniti/dam/mixin/asset-unlinked/AssetUnlinkedV1Mixin';

export default class AssetUnlinkedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:dam:event:asset-unlinked:1-0-0', AssetUnlinkedV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        TrinitiDamAssetUnlinkedV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(AssetUnlinkedV1);
MessageResolver.register('tmz:dam:event:asset-unlinked', AssetUnlinkedV1);
Object.freeze(AssetUnlinkedV1);
Object.freeze(AssetUnlinkedV1.prototype);
