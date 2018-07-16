// @link http://schemas.tmz.com/json-schema/tmz/notify/request/search-notifications-request/1-0-0.json#
import GdbotsNcrSearchNodesRequestV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/search-nodes-request/SearchNodesRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import GdbotsPbjxRequestV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiNotifySearchNotificationsRequestV1Mixin from '@triniti/schemas/triniti/notify/mixin/search-notifications-request/SearchNotificationsRequestV1Mixin';

export default class SearchNotificationsRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:notify:request:search-notifications-request:1-0-0', SearchNotificationsRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsNcrSearchNodesRequestV1Mixin.create(),
        TrinitiNotifySearchNotificationsRequestV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxRequestV1Trait(SearchNotificationsRequestV1);
MessageResolver.register('tmz:notify:request:search-notifications-request', SearchNotificationsRequestV1);
Object.freeze(SearchNotificationsRequestV1);
Object.freeze(SearchNotificationsRequestV1.prototype);
