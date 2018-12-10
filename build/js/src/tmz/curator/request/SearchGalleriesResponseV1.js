// @link http://schemas.tmz.com/json-schema/tmz/curator/request/search-galleries-response/1-0-0.json#
import GdbotsNcrSearchNodesResponseV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/search-nodes-response/SearchNodesResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCuratorSearchGalleriesResponseV1Mixin from '@triniti/schemas/triniti/curator/mixin/search-galleries-response/SearchGalleriesResponseV1Mixin';
import TrinitiCuratorWidgetSearchResponseV1Mixin from '@triniti/schemas/triniti/curator/mixin/widget-search-response/WidgetSearchResponseV1Mixin';

export default class SearchGalleriesResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:request:search-galleries-response:1-0-0', SearchGalleriesResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsNcrSearchNodesResponseV1Mixin.create(),
        TrinitiCuratorWidgetSearchResponseV1Mixin.create(),
        TrinitiCuratorSearchGalleriesResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(SearchGalleriesResponseV1);
MessageResolver.register('tmz:curator:request:search-galleries-response', SearchGalleriesResponseV1);
Object.freeze(SearchGalleriesResponseV1);
Object.freeze(SearchGalleriesResponseV1.prototype);
