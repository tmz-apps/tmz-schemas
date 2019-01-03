// @link https://schemas.tmz.com/json-schema/tmz/sys/request/search-redirects-response/1-0-0.json#
import GdbotsNcrSearchNodesResponseV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/search-nodes-response/SearchNodesResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiSysSearchRedirectsResponseV1Mixin from '@triniti/schemas/triniti/sys/mixin/search-redirects-response/SearchRedirectsResponseV1Mixin';

export default class SearchRedirectsResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:sys:request:search-redirects-response:1-0-0', SearchRedirectsResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsNcrSearchNodesResponseV1Mixin.create(),
        TrinitiSysSearchRedirectsResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(SearchRedirectsResponseV1);
MessageResolver.register('tmz:sys:request:search-redirects-response', SearchRedirectsResponseV1);
Object.freeze(SearchRedirectsResponseV1);
Object.freeze(SearchRedirectsResponseV1.prototype);
