// @link https://schemas.tmz.com/json-schema/tmz/taxonomy/event/channel-created/1-0-0.json#
import GdbotsNcrNodeCreatedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node-created/NodeCreatedV1Mixin';
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class ChannelCreatedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:taxonomy:event:channel-created:1-0-0', ChannelCreatedV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsNcrNodeCreatedV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(ChannelCreatedV1);
MessageResolver.register('tmz:taxonomy:event:channel-created', ChannelCreatedV1);
Object.freeze(ChannelCreatedV1);
Object.freeze(ChannelCreatedV1.prototype);
