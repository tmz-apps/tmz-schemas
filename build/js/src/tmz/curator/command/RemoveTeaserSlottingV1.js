// @link https://schemas.tmz.com/json-schema/tmz/curator/command/remove-teaser-slotting/1-0-0.json#
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCuratorRemoveTeaserSlottingV1Mixin from '@triniti/schemas/triniti/curator/mixin/remove-teaser-slotting/RemoveTeaserSlottingV1Mixin';

export default class RemoveTeaserSlottingV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:command:remove-teaser-slotting:1-0-0', RemoveTeaserSlottingV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        TrinitiCuratorRemoveTeaserSlottingV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(RemoveTeaserSlottingV1);
MessageResolver.register('tmz:curator:command:remove-teaser-slotting', RemoveTeaserSlottingV1);
Object.freeze(RemoveTeaserSlottingV1);
Object.freeze(RemoveTeaserSlottingV1.prototype);
