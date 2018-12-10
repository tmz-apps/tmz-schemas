// @link http://schemas.tmz.com/json-schema/tmz/curator/node/card-widget/1-0-0.json#
import GdbotsCommonTaggableV1Mixin from '@gdbots/schemas/gdbots/common/mixin/taggable/TaggableV1Mixin';
import GdbotsNcrIndexedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/indexed/IndexedV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCommonThemeableV1Mixin from '@triniti/schemas/triniti/common/mixin/themeable/ThemeableV1Mixin';
import TrinitiCuratorCardWidgetV1Mixin from '@triniti/schemas/triniti/curator/mixin/card-widget/CardWidgetV1Mixin';
import TrinitiCuratorCardWidgetV1Trait from '@triniti/schemas/triniti/curator/mixin/card-widget/CardWidgetV1Trait';
import TrinitiCuratorWidgetHasSearchRequestV1Mixin from '@triniti/schemas/triniti/curator/mixin/widget-has-search-request/WidgetHasSearchRequestV1Mixin';
import TrinitiCuratorWidgetV1Mixin from '@triniti/schemas/triniti/curator/mixin/widget/WidgetV1Mixin';

export default class CardWidgetV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:node:card-widget:1-0-0', CardWidgetV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        TrinitiCuratorWidgetV1Mixin.create(),
        TrinitiCuratorCardWidgetV1Mixin.create(),
        GdbotsCommonTaggableV1Mixin.create(),
        GdbotsNcrIndexedV1Mixin.create(),
        TrinitiCommonThemeableV1Mixin.create(),
        TrinitiCuratorWidgetHasSearchRequestV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(CardWidgetV1);
TrinitiCuratorCardWidgetV1Trait(CardWidgetV1);
MessageResolver.register('tmz:curator:node:card-widget', CardWidgetV1);
Object.freeze(CardWidgetV1);
Object.freeze(CardWidgetV1.prototype);
