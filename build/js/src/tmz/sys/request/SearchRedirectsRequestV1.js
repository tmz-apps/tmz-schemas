// @link http://schemas.tmz.com/json-schema/tmz/sys/request/search-redirects-request/1-0-0.json#
import GdbotsNcrSearchNodesRequestV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/search-nodes-request/SearchNodesRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import GdbotsPbjxRequestV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiSysSearchRedirectsRequestV1Mixin from '@triniti/schemas/triniti/sys/mixin/search-redirects-request/SearchRedirectsRequestV1Mixin';

export default class SearchRedirectsRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:sys:request:search-redirects-request:1-0-0', SearchRedirectsRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsNcrSearchNodesRequestV1Mixin.create(),
        TrinitiSysSearchRedirectsRequestV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxRequestV1Trait(SearchRedirectsRequestV1);
MessageResolver.register('tmz:sys:request:search-redirects-request', SearchRedirectsRequestV1);
Object.freeze(SearchRedirectsRequestV1);
Object.freeze(SearchRedirectsRequestV1.prototype);
