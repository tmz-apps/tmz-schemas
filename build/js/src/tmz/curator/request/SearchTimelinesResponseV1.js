// @link https://schemas.tmz.com/json-schema/tmz/curator/request/search-timelines-response/1-0-0.json#
import GdbotsNcrSearchNodesResponseV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/search-nodes-response/SearchNodesResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCuratorSearchTimelinesResponseV1Mixin from '@triniti/schemas/triniti/curator/mixin/search-timelines-response/SearchTimelinesResponseV1Mixin';

export default class SearchTimelinesResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:request:search-timelines-response:1-0-0', SearchTimelinesResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsNcrSearchNodesResponseV1Mixin.create(),
        TrinitiCuratorSearchTimelinesResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(SearchTimelinesResponseV1);
MessageResolver.register('tmz:curator:request:search-timelines-response', SearchTimelinesResponseV1);
Object.freeze(SearchTimelinesResponseV1);
Object.freeze(SearchTimelinesResponseV1.prototype);
