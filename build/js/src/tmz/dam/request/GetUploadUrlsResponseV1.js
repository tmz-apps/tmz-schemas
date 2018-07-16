// @link http://schemas.tmz.com/json-schema/tmz/dam/request/get-upload-urls-response/1-0-0.json#
import GdbotsPbjxResponseV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Mixin';
import GdbotsPbjxResponseV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/response/ResponseV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiDamGetUploadUrlsResponseV1Mixin from '@triniti/schemas/triniti/dam/mixin/get-upload-urls-response/GetUploadUrlsResponseV1Mixin';

export default class GetUploadUrlsResponseV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:dam:request:get-upload-urls-response:1-0-0', GetUploadUrlsResponseV1,
      [],
      [
        GdbotsPbjxResponseV1Mixin.create(),
        TrinitiDamGetUploadUrlsResponseV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxResponseV1Trait(GetUploadUrlsResponseV1);
MessageResolver.register('tmz:dam:request:get-upload-urls-response', GetUploadUrlsResponseV1);
Object.freeze(GetUploadUrlsResponseV1);
Object.freeze(GetUploadUrlsResponseV1.prototype);
