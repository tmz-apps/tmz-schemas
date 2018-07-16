// @link http://schemas.tmz.com/json-schema/tmz/taxonomy/request/get-all-channels-response/1-0-0.json#
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiTaxonomyGetAllChannelsResponseV1Mixin from '@triniti/schemas/triniti/taxonomy/mixin/get-all-channels-response/GetAllChannelsResponseV1Mixin';

export default class GetAllChannelsResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:taxonomy:request:get-all-channels-response:1-0-0', GetAllChannelsResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        TrinitiTaxonomyGetAllChannelsResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(GetAllChannelsResponseV1);
MessageResolver.register('tmz:taxonomy:request:get-all-channels-response', GetAllChannelsResponseV1);
Object.freeze(GetAllChannelsResponseV1);
Object.freeze(GetAllChannelsResponseV1.prototype);
