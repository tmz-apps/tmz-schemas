// @link http://schemas.tmz.com/json-schema/tmz/taxonomy/request/get-all-channels-request/1-0-0.json#
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import GdbotsPbjxRequestV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiTaxonomyGetAllChannelsRequestV1Mixin from '@triniti/schemas/triniti/taxonomy/mixin/get-all-channels-request/GetAllChannelsRequestV1Mixin';

export default class GetAllChannelsRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:taxonomy:request:get-all-channels-request:1-0-0', GetAllChannelsRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        TrinitiTaxonomyGetAllChannelsRequestV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxRequestV1Trait(GetAllChannelsRequestV1);
MessageResolver.register('tmz:taxonomy:request:get-all-channels-request', GetAllChannelsRequestV1);
Object.freeze(GetAllChannelsRequestV1);
Object.freeze(GetAllChannelsRequestV1.prototype);
