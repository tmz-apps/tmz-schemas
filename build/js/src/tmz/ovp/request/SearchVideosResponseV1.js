// @link http://schemas.tmz.com/json-schema/tmz/ovp/request/search-videos-response/1-0-0.json#
import GdbotsNcrSearchNodesResponseV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/search-nodes-response/SearchNodesResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCuratorWidgetSearchResponseV1Mixin from '@triniti/schemas/triniti/curator/mixin/widget-search-response/WidgetSearchResponseV1Mixin';
import TrinitiOvpSearchVideosResponseV1Mixin from '@triniti/schemas/triniti/ovp/mixin/search-videos-response/SearchVideosResponseV1Mixin';

export default class SearchVideosResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:ovp:request:search-videos-response:1-0-0', SearchVideosResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsNcrSearchNodesResponseV1Mixin.create(),
        TrinitiCuratorWidgetSearchResponseV1Mixin.create(),
        TrinitiOvpSearchVideosResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(SearchVideosResponseV1);
MessageResolver.register('tmz:ovp:request:search-videos-response', SearchVideosResponseV1);
Object.freeze(SearchVideosResponseV1);
Object.freeze(SearchVideosResponseV1.prototype);
