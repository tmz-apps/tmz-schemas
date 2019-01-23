// @link https://schemas.tmz.com/json-schema/tmz/curator/node/gallery-widget/1-0-0.json#
import GdbotsCommonTaggableV1Mixin from '@gdbots/schemas/gdbots/common/mixin/taggable/TaggableV1Mixin';
import GdbotsNcrIndexedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/indexed/IndexedV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCommonThemeableV1Mixin from '@triniti/schemas/triniti/common/mixin/themeable/ThemeableV1Mixin';
import TrinitiCuratorGalleryWidgetV1Mixin from '@triniti/schemas/triniti/curator/mixin/gallery-widget/GalleryWidgetV1Mixin';
import TrinitiCuratorGalleryWidgetV1Trait from '@triniti/schemas/triniti/curator/mixin/gallery-widget/GalleryWidgetV1Trait';
import TrinitiCuratorWidgetHasSearchRequestV1Mixin from '@triniti/schemas/triniti/curator/mixin/widget-has-search-request/WidgetHasSearchRequestV1Mixin';
import TrinitiCuratorWidgetV1Mixin from '@triniti/schemas/triniti/curator/mixin/widget/WidgetV1Mixin';

export default class GalleryWidgetV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:node:gallery-widget:1-0-0', GalleryWidgetV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        TrinitiCuratorWidgetV1Mixin.create(),
        TrinitiCuratorGalleryWidgetV1Mixin.create(),
        GdbotsCommonTaggableV1Mixin.create(),
        GdbotsNcrIndexedV1Mixin.create(),
        TrinitiCommonThemeableV1Mixin.create(),
        TrinitiCuratorWidgetHasSearchRequestV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(GalleryWidgetV1);
TrinitiCuratorGalleryWidgetV1Trait(GalleryWidgetV1);
MessageResolver.register('tmz:curator:node:gallery-widget', GalleryWidgetV1);
Object.freeze(GalleryWidgetV1);
Object.freeze(GalleryWidgetV1.prototype);
