// @link http://schemas.tmz.com/json-schema/tmz/dam/event/asset-patched/1-0-0.json#
import GdbotsNcrNodePatchedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node-patched/NodePatchedV1Mixin';
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiDamAssetPatchedV1Mixin from '@triniti/schemas/triniti/dam/mixin/asset-patched/AssetPatchedV1Mixin';

export default class AssetPatchedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:dam:event:asset-patched:1-0-0', AssetPatchedV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsNcrNodePatchedV1Mixin.create(),
        TrinitiDamAssetPatchedV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(AssetPatchedV1);
MessageResolver.register('tmz:dam:event:asset-patched', AssetPatchedV1);
Object.freeze(AssetPatchedV1);
Object.freeze(AssetPatchedV1.prototype);
