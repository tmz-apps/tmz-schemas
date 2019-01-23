// @link https://schemas.tmz.com/json-schema/tmz/news/command/remove-article-slotting/1-0-0.json#
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiNewsRemoveArticleSlottingV1Mixin from '@triniti/schemas/triniti/news/mixin/remove-article-slotting/RemoveArticleSlottingV1Mixin';

export default class RemoveArticleSlottingV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:news:command:remove-article-slotting:1-0-0', RemoveArticleSlottingV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        TrinitiNewsRemoveArticleSlottingV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(RemoveArticleSlottingV1);
MessageResolver.register('tmz:news:command:remove-article-slotting', RemoveArticleSlottingV1);
Object.freeze(RemoveArticleSlottingV1);
Object.freeze(RemoveArticleSlottingV1.prototype);
