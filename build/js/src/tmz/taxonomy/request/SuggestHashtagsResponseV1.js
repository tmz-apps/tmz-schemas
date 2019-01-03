// @link https://schemas.tmz.com/json-schema/tmz/taxonomy/request/suggest-hashtags-response/1-0-0.json#
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiTaxonomySuggestHashtagsResponseV1Mixin from '@triniti/schemas/triniti/taxonomy/mixin/suggest-hashtags-response/SuggestHashtagsResponseV1Mixin';

export default class SuggestHashtagsResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:taxonomy:request:suggest-hashtags-response:1-0-0', SuggestHashtagsResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        TrinitiTaxonomySuggestHashtagsResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(SuggestHashtagsResponseV1);
MessageResolver.register('tmz:taxonomy:request:suggest-hashtags-response', SuggestHashtagsResponseV1);
Object.freeze(SuggestHashtagsResponseV1);
Object.freeze(SuggestHashtagsResponseV1.prototype);
