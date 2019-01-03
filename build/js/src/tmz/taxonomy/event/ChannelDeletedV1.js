// @link https://schemas.tmz.com/json-schema/tmz/taxonomy/event/channel-deleted/1-0-0.json#
import GdbotsNcrNodeDeletedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node-deleted/NodeDeletedV1Mixin';
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class ChannelDeletedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:taxonomy:event:channel-deleted:1-0-0', ChannelDeletedV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsNcrNodeDeletedV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(ChannelDeletedV1);
MessageResolver.register('tmz:taxonomy:event:channel-deleted', ChannelDeletedV1);
Object.freeze(ChannelDeletedV1);
Object.freeze(ChannelDeletedV1.prototype);
