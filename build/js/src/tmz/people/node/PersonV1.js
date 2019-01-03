// @link https://schemas.tmz.com/json-schema/tmz/people/node/person/1-0-0.json#
import GdbotsCommonTaggableV1Mixin from '@gdbots/schemas/gdbots/common/mixin/taggable/TaggableV1Mixin';
import GdbotsNcrIndexedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/indexed/IndexedV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import GdbotsNcrSluggableV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/sluggable/SluggableV1Mixin';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasHasBlocksV1Mixin from '@triniti/schemas/triniti/canvas/mixin/has-blocks/HasBlocksV1Mixin';
import TrinitiCommonAdvertisingV1Mixin from '@triniti/schemas/triniti/common/mixin/advertising/AdvertisingV1Mixin';
import TrinitiCommonSeoV1Mixin from '@triniti/schemas/triniti/common/mixin/seo/SeoV1Mixin';
import TrinitiCommonThemeableV1Mixin from '@triniti/schemas/triniti/common/mixin/themeable/ThemeableV1Mixin';
import TrinitiCuratorTeaserableV1Mixin from '@triniti/schemas/triniti/curator/mixin/teaserable/TeaserableV1Mixin';
import TrinitiPeoplePersonV1Mixin from '@triniti/schemas/triniti/people/mixin/person/PersonV1Mixin';
import TrinitiPeoplePersonV1Trait from '@triniti/schemas/triniti/people/mixin/person/PersonV1Trait';
import TrinitiTaxonomyHashtaggableV1Mixin from '@triniti/schemas/triniti/taxonomy/mixin/hashtaggable/HashtaggableV1Mixin';

export default class PersonV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:people:node:person:1-0-0', PersonV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        TrinitiPeoplePersonV1Mixin.create(),
        GdbotsCommonTaggableV1Mixin.create(),
        GdbotsNcrIndexedV1Mixin.create(),
        GdbotsNcrSluggableV1Mixin.create(),
        TrinitiCanvasHasBlocksV1Mixin.create(),
        TrinitiCommonAdvertisingV1Mixin.create(),
        TrinitiCommonSeoV1Mixin.create(),
        TrinitiCommonThemeableV1Mixin.create(),
        TrinitiCuratorTeaserableV1Mixin.create(),
        TrinitiTaxonomyHashtaggableV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(PersonV1);
TrinitiPeoplePersonV1Trait(PersonV1);
MessageResolver.register('tmz:people:node:person', PersonV1);
Object.freeze(PersonV1);
Object.freeze(PersonV1.prototype);
