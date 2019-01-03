// @link https://schemas.tmz.com/json-schema/tmz/ovp/request/search-videos-request/1-0-0.json#
import GdbotsNcrSearchNodesRequestV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/search-nodes-request/SearchNodesRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import GdbotsPbjxRequestV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCuratorWidgetSearchRequestV1Mixin from '@triniti/schemas/triniti/curator/mixin/widget-search-request/WidgetSearchRequestV1Mixin';
import TrinitiOvpSearchVideosRequestV1Mixin from '@triniti/schemas/triniti/ovp/mixin/search-videos-request/SearchVideosRequestV1Mixin';

export default class SearchVideosRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:ovp:request:search-videos-request:1-0-0', SearchVideosRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsNcrSearchNodesRequestV1Mixin.create(),
        TrinitiOvpSearchVideosRequestV1Mixin.create(),
        TrinitiCuratorWidgetSearchRequestV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxRequestV1Trait(SearchVideosRequestV1);
MessageResolver.register('tmz:ovp:request:search-videos-request', SearchVideosRequestV1);
Object.freeze(SearchVideosRequestV1);
Object.freeze(SearchVideosRequestV1.prototype);
