// @link https://schemas.tmz.com/json-schema/tmz/news/node/article/1-0-1.json#
import GdbotsCommonLabelableV1Mixin from '@gdbots/schemas/gdbots/common/mixin/labelable/LabelableV1Mixin';
import GdbotsCommonTaggableV1Mixin from '@gdbots/schemas/gdbots/common/mixin/taggable/TaggableV1Mixin';
import GdbotsNcrExpirableV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/expirable/ExpirableV1Mixin';
import GdbotsNcrIndexedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/indexed/IndexedV1Mixin';
import GdbotsNcrLockableV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/lockable/LockableV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import GdbotsNcrPublishableV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/publishable/PublishableV1Mixin';
import GdbotsNcrSluggableV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/sluggable/SluggableV1Mixin';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiBoostSponsorableV1Mixin from '@triniti/schemas/triniti/boost/mixin/sponsorable/SponsorableV1Mixin';
import TrinitiCanvasHasBlocksV1Mixin from '@triniti/schemas/triniti/canvas/mixin/has-blocks/HasBlocksV1Mixin';
import TrinitiCommonAdvertisingV1Mixin from '@triniti/schemas/triniti/common/mixin/advertising/AdvertisingV1Mixin';
import TrinitiCommonSeoV1Mixin from '@triniti/schemas/triniti/common/mixin/seo/SeoV1Mixin';
import TrinitiCommonSwipeableV1Mixin from '@triniti/schemas/triniti/common/mixin/swipeable/SwipeableV1Mixin';
import TrinitiCommonThemeableV1Mixin from '@triniti/schemas/triniti/common/mixin/themeable/ThemeableV1Mixin';
import TrinitiCuratorTeaserableV1Mixin from '@triniti/schemas/triniti/curator/mixin/teaserable/TeaserableV1Mixin';
import TrinitiNewsArticleV1Mixin from '@triniti/schemas/triniti/news/mixin/article/ArticleV1Mixin';
import TrinitiNewsArticleV1Trait from '@triniti/schemas/triniti/news/mixin/article/ArticleV1Trait';
import TrinitiNewsHeadlineFragmentsV1Mixin from '@triniti/schemas/triniti/news/mixin/headline-fragments/HeadlineFragmentsV1Mixin';
import TrinitiNotifyHasNotificationsV1Mixin from '@triniti/schemas/triniti/notify/mixin/has-notifications/HasNotificationsV1Mixin';
import TrinitiPeopleHasPeopleV1Mixin from '@triniti/schemas/triniti/people/mixin/has-people/HasPeopleV1Mixin';
import TrinitiTaxonomyCategorizableV1Mixin from '@triniti/schemas/triniti/taxonomy/mixin/categorizable/CategorizableV1Mixin';
import TrinitiTaxonomyHasChannelV1Mixin from '@triniti/schemas/triniti/taxonomy/mixin/has-channel/HasChannelV1Mixin';
import TrinitiTaxonomyHashtaggableV1Mixin from '@triniti/schemas/triniti/taxonomy/mixin/hashtaggable/HashtaggableV1Mixin';

export default class ArticleV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:news:node:article:1-0-1', ArticleV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        TrinitiNewsArticleV1Mixin.create(),
        GdbotsCommonLabelableV1Mixin.create(),
        GdbotsCommonTaggableV1Mixin.create(),
        GdbotsNcrExpirableV1Mixin.create(),
        GdbotsNcrIndexedV1Mixin.create(),
        GdbotsNcrLockableV1Mixin.create(),
        GdbotsNcrPublishableV1Mixin.create(),
        GdbotsNcrSluggableV1Mixin.create(),
        TrinitiBoostSponsorableV1Mixin.create(),
        TrinitiCanvasHasBlocksV1Mixin.create(),
        TrinitiCommonAdvertisingV1Mixin.create(),
        TrinitiCommonSeoV1Mixin.create(),
        TrinitiCommonSwipeableV1Mixin.create(),
        TrinitiCommonThemeableV1Mixin.create(),
        TrinitiCuratorTeaserableV1Mixin.create(),
        TrinitiNewsHeadlineFragmentsV1Mixin.create(),
        TrinitiNotifyHasNotificationsV1Mixin.create(),
        TrinitiPeopleHasPeopleV1Mixin.create(),
        TrinitiTaxonomyCategorizableV1Mixin.create(),
        TrinitiTaxonomyHasChannelV1Mixin.create(),
        TrinitiTaxonomyHashtaggableV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(ArticleV1);
TrinitiNewsArticleV1Trait(ArticleV1);
MessageResolver.register('tmz:news:node:article', ArticleV1);
Object.freeze(ArticleV1);
Object.freeze(ArticleV1.prototype);
