// @link https://schemas.tmz.com/json-schema/tmz/curator/node/timeline/1-0-0.json#
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
import TrinitiBoostSponsorableV1Mixin from '@triniti/schemas/triniti/boost/mixin/sponsorable/SponsorableV1Mixin';
import TrinitiCommonAdvertisingV1Mixin from '@triniti/schemas/triniti/common/mixin/advertising/AdvertisingV1Mixin';
import TrinitiCommonSeoV1Mixin from '@triniti/schemas/triniti/common/mixin/seo/SeoV1Mixin';
import TrinitiCommonThemeableV1Mixin from '@triniti/schemas/triniti/common/mixin/themeable/ThemeableV1Mixin';
import TrinitiCuratorTeaserableV1Mixin from '@triniti/schemas/triniti/curator/mixin/teaserable/TeaserableV1Mixin';
import TrinitiCuratorTimelineV1Mixin from '@triniti/schemas/triniti/curator/mixin/timeline/TimelineV1Mixin';
import TrinitiCuratorTimelineV1Trait from '@triniti/schemas/triniti/curator/mixin/timeline/TimelineV1Trait';
import TrinitiPeopleHasPeopleV1Mixin from '@triniti/schemas/triniti/people/mixin/has-people/HasPeopleV1Mixin';
import TrinitiTaxonomyCategorizableV1Mixin from '@triniti/schemas/triniti/taxonomy/mixin/categorizable/CategorizableV1Mixin';
import TrinitiTaxonomyHasChannelV1Mixin from '@triniti/schemas/triniti/taxonomy/mixin/has-channel/HasChannelV1Mixin';
import TrinitiTaxonomyHashtaggableV1Mixin from '@triniti/schemas/triniti/taxonomy/mixin/hashtaggable/HashtaggableV1Mixin';

export default class TimelineV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:node:timeline:1-0-0', TimelineV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        TrinitiCuratorTimelineV1Mixin.create(),
        GdbotsCommonTaggableV1Mixin.create(),
        GdbotsNcrExpirableV1Mixin.create(),
        GdbotsNcrIndexedV1Mixin.create(),
        GdbotsNcrPublishableV1Mixin.create(),
        GdbotsNcrSluggableV1Mixin.create(),
        TrinitiBoostSponsorableV1Mixin.create(),
        TrinitiCommonAdvertisingV1Mixin.create(),
        TrinitiCommonSeoV1Mixin.create(),
        TrinitiCommonThemeableV1Mixin.create(),
        TrinitiCuratorTeaserableV1Mixin.create(),
        TrinitiPeopleHasPeopleV1Mixin.create(),
        TrinitiTaxonomyCategorizableV1Mixin.create(),
        TrinitiTaxonomyHasChannelV1Mixin.create(),
        TrinitiTaxonomyHashtaggableV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(TimelineV1);
TrinitiCuratorTimelineV1Trait(TimelineV1);
MessageResolver.register('tmz:curator:node:timeline', TimelineV1);
Object.freeze(TimelineV1);
Object.freeze(TimelineV1.prototype);
