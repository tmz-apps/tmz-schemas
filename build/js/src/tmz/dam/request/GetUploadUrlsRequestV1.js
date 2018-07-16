// @link http://schemas.tmz.com/json-schema/tmz/dam/request/get-upload-urls-request/1-0-0.json#
import GdbotsAnalyticsTrackedMessageV1Mixin from '@gdbots/schemas/gdbots/analytics/mixin/tracked-message/TrackedMessageV1Mixin';
import GdbotsEnrichmentsIpToGeoV1Mixin from '@gdbots/schemas/gdbots/enrichments/mixin/ip-to-geo/IpToGeoV1Mixin';
import GdbotsEnrichmentsTimePartingV1Mixin from '@gdbots/schemas/gdbots/enrichments/mixin/time-parting/TimePartingV1Mixin';
import GdbotsEnrichmentsTimeSamplingV1Mixin from '@gdbots/schemas/gdbots/enrichments/mixin/time-sampling/TimeSamplingV1Mixin';
import GdbotsEnrichmentsUaParserV1Mixin from '@gdbots/schemas/gdbots/enrichments/mixin/ua-parser/UaParserV1Mixin';
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import GdbotsPbjxRequestV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiDamGetUploadUrlsRequestV1Mixin from '@triniti/schemas/triniti/dam/mixin/get-upload-urls-request/GetUploadUrlsRequestV1Mixin';

export default class GetUploadUrlsRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:dam:request:get-upload-urls-request:1-0-0', GetUploadUrlsRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        TrinitiDamGetUploadUrlsRequestV1Mixin.create(),
        GdbotsAnalyticsTrackedMessageV1Mixin.create(),
        GdbotsEnrichmentsIpToGeoV1Mixin.create(),
        GdbotsEnrichmentsTimePartingV1Mixin.create(),
        GdbotsEnrichmentsTimeSamplingV1Mixin.create(),
        GdbotsEnrichmentsUaParserV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxRequestV1Trait(GetUploadUrlsRequestV1);
MessageResolver.register('tmz:dam:request:get-upload-urls-request', GetUploadUrlsRequestV1);
Object.freeze(GetUploadUrlsRequestV1);
Object.freeze(GetUploadUrlsRequestV1.prototype);
