// @link https://schemas.tmz.com/json-schema/tmz/taxonomy/event/category-updated/1-0-0.json#
import GdbotsNcrNodeUpdatedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node-updated/NodeUpdatedV1Mixin';
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class CategoryUpdatedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:taxonomy:event:category-updated:1-0-0', CategoryUpdatedV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsNcrNodeUpdatedV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(CategoryUpdatedV1);
MessageResolver.register('tmz:taxonomy:event:category-updated', CategoryUpdatedV1);
Object.freeze(CategoryUpdatedV1);
Object.freeze(CategoryUpdatedV1.prototype);
