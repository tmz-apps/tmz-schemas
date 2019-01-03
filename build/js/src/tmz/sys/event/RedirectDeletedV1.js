// @link https://schemas.tmz.com/json-schema/tmz/sys/event/redirect-deleted/1-0-0.json#
import GdbotsNcrNodeDeletedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node-deleted/NodeDeletedV1Mixin';
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class RedirectDeletedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:sys:event:redirect-deleted:1-0-0', RedirectDeletedV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsNcrNodeDeletedV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(RedirectDeletedV1);
MessageResolver.register('tmz:sys:event:redirect-deleted', RedirectDeletedV1);
Object.freeze(RedirectDeletedV1);
Object.freeze(RedirectDeletedV1.prototype);
