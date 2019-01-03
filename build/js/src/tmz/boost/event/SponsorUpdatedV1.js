// @link https://schemas.tmz.com/json-schema/tmz/boost/event/sponsor-updated/1-0-0.json#
import GdbotsNcrNodeUpdatedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node-updated/NodeUpdatedV1Mixin';
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class SponsorUpdatedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:boost:event:sponsor-updated:1-0-0', SponsorUpdatedV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsNcrNodeUpdatedV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(SponsorUpdatedV1);
MessageResolver.register('tmz:boost:event:sponsor-updated', SponsorUpdatedV1);
Object.freeze(SponsorUpdatedV1);
Object.freeze(SponsorUpdatedV1.prototype);
