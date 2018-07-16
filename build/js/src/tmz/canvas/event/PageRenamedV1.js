// @link http://schemas.tmz.com/json-schema/tmz/canvas/event/page-renamed/1-0-0.json#
import GdbotsNcrNodeRenamedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node-renamed/NodeRenamedV1Mixin';
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class PageRenamedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:event:page-renamed:1-0-0', PageRenamedV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsNcrNodeRenamedV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(PageRenamedV1);
MessageResolver.register('tmz:canvas:event:page-renamed', PageRenamedV1);
Object.freeze(PageRenamedV1);
Object.freeze(PageRenamedV1.prototype);
