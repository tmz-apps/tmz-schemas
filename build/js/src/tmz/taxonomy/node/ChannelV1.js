// @link https://schemas.tmz.com/json-schema/tmz/taxonomy/node/channel/1-0-0.json#
import GdbotsCommonTaggableV1Mixin from '@gdbots/schemas/gdbots/common/mixin/taggable/TaggableV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import GdbotsNcrSluggableV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/sluggable/SluggableV1Mixin';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiBoostSponsorableV1Mixin from '@triniti/schemas/triniti/boost/mixin/sponsorable/SponsorableV1Mixin';
import TrinitiCommonAdvertisingV1Mixin from '@triniti/schemas/triniti/common/mixin/advertising/AdvertisingV1Mixin';
import TrinitiCommonCustomCodeV1Mixin from '@triniti/schemas/triniti/common/mixin/custom-code/CustomCodeV1Mixin';
import TrinitiCommonSeoV1Mixin from '@triniti/schemas/triniti/common/mixin/seo/SeoV1Mixin';
import TrinitiCommonThemeableV1Mixin from '@triniti/schemas/triniti/common/mixin/themeable/ThemeableV1Mixin';
import TrinitiCuratorTeaserableV1Mixin from '@triniti/schemas/triniti/curator/mixin/teaserable/TeaserableV1Mixin';
import TrinitiTaxonomyChannelV1Mixin from '@triniti/schemas/triniti/taxonomy/mixin/channel/ChannelV1Mixin';
import TrinitiTaxonomyChannelV1Trait from '@triniti/schemas/triniti/taxonomy/mixin/channel/ChannelV1Trait';
import TrinitiTaxonomyHashtaggableV1Mixin from '@triniti/schemas/triniti/taxonomy/mixin/hashtaggable/HashtaggableV1Mixin';

export default class ChannelV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:taxonomy:node:channel:1-0-0', ChannelV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        TrinitiTaxonomyChannelV1Mixin.create(),
        GdbotsCommonTaggableV1Mixin.create(),
        GdbotsNcrSluggableV1Mixin.create(),
        TrinitiBoostSponsorableV1Mixin.create(),
        TrinitiCommonAdvertisingV1Mixin.create(),
        TrinitiCommonCustomCodeV1Mixin.create(),
        TrinitiCommonSeoV1Mixin.create(),
        TrinitiCommonThemeableV1Mixin.create(),
        TrinitiCuratorTeaserableV1Mixin.create(),
        TrinitiTaxonomyHashtaggableV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(ChannelV1);
TrinitiTaxonomyChannelV1Trait(ChannelV1);
MessageResolver.register('tmz:taxonomy:node:channel', ChannelV1);
Object.freeze(ChannelV1);
Object.freeze(ChannelV1.prototype);
