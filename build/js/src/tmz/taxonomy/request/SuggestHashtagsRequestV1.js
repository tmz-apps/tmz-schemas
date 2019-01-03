// @link https://schemas.tmz.com/json-schema/tmz/taxonomy/request/suggest-hashtags-request/1-0-0.json#
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import GdbotsPbjxRequestV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiTaxonomySuggestHashtagsRequestV1Mixin from '@triniti/schemas/triniti/taxonomy/mixin/suggest-hashtags-request/SuggestHashtagsRequestV1Mixin';

export default class SuggestHashtagsRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:taxonomy:request:suggest-hashtags-request:1-0-0', SuggestHashtagsRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        TrinitiTaxonomySuggestHashtagsRequestV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxRequestV1Trait(SuggestHashtagsRequestV1);
MessageResolver.register('tmz:taxonomy:request:suggest-hashtags-request', SuggestHashtagsRequestV1);
Object.freeze(SuggestHashtagsRequestV1);
Object.freeze(SuggestHashtagsRequestV1.prototype);
