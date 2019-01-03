// @link https://schemas.tmz.com/json-schema/tmz/taxonomy/node/category/1-0-0.json#
import GdbotsCommonTaggableV1Mixin from '@gdbots/schemas/gdbots/common/mixin/taggable/TaggableV1Mixin';
import GdbotsNcrIndexedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/indexed/IndexedV1Mixin';
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
import TrinitiTaxonomyCategoryV1Mixin from '@triniti/schemas/triniti/taxonomy/mixin/category/CategoryV1Mixin';
import TrinitiTaxonomyCategoryV1Trait from '@triniti/schemas/triniti/taxonomy/mixin/category/CategoryV1Trait';
import TrinitiTaxonomyHashtaggableV1Mixin from '@triniti/schemas/triniti/taxonomy/mixin/hashtaggable/HashtaggableV1Mixin';

export default class CategoryV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:taxonomy:node:category:1-0-0', CategoryV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        TrinitiTaxonomyCategoryV1Mixin.create(),
        GdbotsCommonTaggableV1Mixin.create(),
        GdbotsNcrIndexedV1Mixin.create(),
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

GdbotsNcrNodeV1Trait(CategoryV1);
TrinitiTaxonomyCategoryV1Trait(CategoryV1);
MessageResolver.register('tmz:taxonomy:node:category', CategoryV1);
Object.freeze(CategoryV1);
Object.freeze(CategoryV1.prototype);
