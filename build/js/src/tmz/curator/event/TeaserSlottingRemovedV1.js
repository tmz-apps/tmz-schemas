// @link https://schemas.tmz.com/json-schema/tmz/curator/event/teaser-slotting-removed/1-0-0.json#
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCuratorTeaserSlottingRemovedV1Mixin from '@triniti/schemas/triniti/curator/mixin/teaser-slotting-removed/TeaserSlottingRemovedV1Mixin';

export default class TeaserSlottingRemovedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:event:teaser-slotting-removed:1-0-0', TeaserSlottingRemovedV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        TrinitiCuratorTeaserSlottingRemovedV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(TeaserSlottingRemovedV1);
MessageResolver.register('tmz:curator:event:teaser-slotting-removed', TeaserSlottingRemovedV1);
Object.freeze(TeaserSlottingRemovedV1);
Object.freeze(TeaserSlottingRemovedV1.prototype);
