// @link https://schemas.tmz.com/json-schema/tmz/taxonomy/event/category-created/1-0-0.json#
import GdbotsNcrNodeCreatedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node-created/NodeCreatedV1Mixin';
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class CategoryCreatedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:taxonomy:event:category-created:1-0-0', CategoryCreatedV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsNcrNodeCreatedV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(CategoryCreatedV1);
MessageResolver.register('tmz:taxonomy:event:category-created', CategoryCreatedV1);
Object.freeze(CategoryCreatedV1);
Object.freeze(CategoryCreatedV1.prototype);
