// @link https://schemas.tmz.com/json-schema/tmz/boost/node/sponsor/1-0-0.json#
import GdbotsCommonTaggableV1Mixin from '@gdbots/schemas/gdbots/common/mixin/taggable/TaggableV1Mixin';
import GdbotsNcrExpirableV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/expirable/ExpirableV1Mixin';
import GdbotsNcrIndexedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/indexed/IndexedV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import GdbotsNcrPublishableV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/publishable/PublishableV1Mixin';
import GdbotsNcrSluggableV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/sluggable/SluggableV1Mixin';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiBoostSponsorV1Mixin from '@triniti/schemas/triniti/boost/mixin/sponsor/SponsorV1Mixin';
import TrinitiBoostSponsorV1Trait from '@triniti/schemas/triniti/boost/mixin/sponsor/SponsorV1Trait';

export default class SponsorV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:boost:node:sponsor:1-0-0', SponsorV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        TrinitiBoostSponsorV1Mixin.create(),
        GdbotsCommonTaggableV1Mixin.create(),
        GdbotsNcrExpirableV1Mixin.create(),
        GdbotsNcrIndexedV1Mixin.create(),
        GdbotsNcrPublishableV1Mixin.create(),
        GdbotsNcrSluggableV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(SponsorV1);
TrinitiBoostSponsorV1Trait(SponsorV1);
MessageResolver.register('tmz:boost:node:sponsor', SponsorV1);
Object.freeze(SponsorV1);
Object.freeze(SponsorV1.prototype);
