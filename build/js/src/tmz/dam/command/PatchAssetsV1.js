// @link http://schemas.tmz.com/json-schema/tmz/dam/command/patch-assets/1-0-0.json#
import GdbotsNcrPatchNodesV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/patch-nodes/PatchNodesV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiDamPatchAssetsV1Mixin from '@triniti/schemas/triniti/dam/mixin/patch-assets/PatchAssetsV1Mixin';

export default class PatchAssetsV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:dam:command:patch-assets:1-0-0', PatchAssetsV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrPatchNodesV1Mixin.create(),
        TrinitiDamPatchAssetsV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(PatchAssetsV1);
MessageResolver.register('tmz:dam:command:patch-assets', PatchAssetsV1);
Object.freeze(PatchAssetsV1);
Object.freeze(PatchAssetsV1.prototype);
