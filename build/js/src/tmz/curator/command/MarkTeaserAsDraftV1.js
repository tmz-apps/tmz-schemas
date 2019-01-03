// @link https://schemas.tmz.com/json-schema/tmz/curator/command/mark-teaser-as-draft/1-0-0.json#
import GdbotsNcrMarkNodeAsDraftV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/mark-node-as-draft/MarkNodeAsDraftV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class MarkTeaserAsDraftV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:command:mark-teaser-as-draft:1-0-0', MarkTeaserAsDraftV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrMarkNodeAsDraftV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(MarkTeaserAsDraftV1);
MessageResolver.register('tmz:curator:command:mark-teaser-as-draft', MarkTeaserAsDraftV1);
Object.freeze(MarkTeaserAsDraftV1);
Object.freeze(MarkTeaserAsDraftV1.prototype);
