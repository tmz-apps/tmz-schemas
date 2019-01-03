// @link https://schemas.tmz.com/json-schema/tmz/iam/request/search-users-request/1-0-0.json#
import GdbotsIamSearchUsersRequestV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/search-users-request/SearchUsersRequestV1Mixin';
import GdbotsNcrSearchNodesRequestV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/search-nodes-request/SearchNodesRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import GdbotsPbjxRequestV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class SearchUsersRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:iam:request:search-users-request:1-0-0', SearchUsersRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsNcrSearchNodesRequestV1Mixin.create(),
        GdbotsIamSearchUsersRequestV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxRequestV1Trait(SearchUsersRequestV1);
MessageResolver.register('tmz:iam:request:search-users-request', SearchUsersRequestV1);
Object.freeze(SearchUsersRequestV1);
Object.freeze(SearchUsersRequestV1.prototype);
