// @link http://schemas.tmz.com/json-schema/tmz/curator/request/search-widgets-response/1-0-0.json#
import GdbotsNcrSearchNodesResponseV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/search-nodes-response/SearchNodesResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCuratorSearchWidgetsResponseV1Mixin from '@triniti/schemas/triniti/curator/mixin/search-widgets-response/SearchWidgetsResponseV1Mixin';

export default class SearchWidgetsResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:request:search-widgets-response:1-0-0', SearchWidgetsResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsNcrSearchNodesResponseV1Mixin.create(),
        TrinitiCuratorSearchWidgetsResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(SearchWidgetsResponseV1);
MessageResolver.register('tmz:curator:request:search-widgets-response', SearchWidgetsResponseV1);
Object.freeze(SearchWidgetsResponseV1);
Object.freeze(SearchWidgetsResponseV1.prototype);
