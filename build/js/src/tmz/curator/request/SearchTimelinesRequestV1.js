// @link http://schemas.tmz.com/json-schema/tmz/curator/request/search-timelines-request/1-0-0.json#
import GdbotsNcrSearchNodesRequestV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/search-nodes-request/SearchNodesRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import GdbotsPbjxRequestV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCuratorSearchTimelinesRequestV1Mixin from '@triniti/schemas/triniti/curator/mixin/search-timelines-request/SearchTimelinesRequestV1Mixin';

export default class SearchTimelinesRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:request:search-timelines-request:1-0-0', SearchTimelinesRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsNcrSearchNodesRequestV1Mixin.create(),
        TrinitiCuratorSearchTimelinesRequestV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxRequestV1Trait(SearchTimelinesRequestV1);
MessageResolver.register('tmz:curator:request:search-timelines-request', SearchTimelinesRequestV1);
Object.freeze(SearchTimelinesRequestV1);
Object.freeze(SearchTimelinesRequestV1.prototype);
