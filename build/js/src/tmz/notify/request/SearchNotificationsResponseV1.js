// @link http://schemas.tmz.com/json-schema/tmz/notify/request/search-notifications-response/1-0-0.json#
import GdbotsNcrSearchNodesResponseV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/search-nodes-response/SearchNodesResponseV1Mixin';
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiNotifySearchNotificationsResponseV1Mixin from '@triniti/schemas/triniti/notify/mixin/search-notifications-response/SearchNotificationsResponseV1Mixin';

export default class SearchNotificationsResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:notify:request:search-notifications-response:1-0-0', SearchNotificationsResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        GdbotsNcrSearchNodesResponseV1Mixin.create(),
        TrinitiNotifySearchNotificationsResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(SearchNotificationsResponseV1);
MessageResolver.register('tmz:notify:request:search-notifications-response', SearchNotificationsResponseV1);
Object.freeze(SearchNotificationsResponseV1);
Object.freeze(SearchNotificationsResponseV1.prototype);
