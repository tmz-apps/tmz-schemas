// @link http://schemas.tmz.com/json-schema/tmz/boost/event/sponsor-marked-as-draft/1-0-0.json#
import GdbotsNcrNodeMarkedAsDraftV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node-marked-as-draft/NodeMarkedAsDraftV1Mixin';
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class SponsorMarkedAsDraftV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:boost:event:sponsor-marked-as-draft:1-0-0', SponsorMarkedAsDraftV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsNcrNodeMarkedAsDraftV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(SponsorMarkedAsDraftV1);
MessageResolver.register('tmz:boost:event:sponsor-marked-as-draft', SponsorMarkedAsDraftV1);
Object.freeze(SponsorMarkedAsDraftV1);
Object.freeze(SponsorMarkedAsDraftV1.prototype);
