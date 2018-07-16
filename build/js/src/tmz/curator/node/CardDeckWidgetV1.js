// @link http://schemas.tmz.com/json-schema/tmz/curator/node/card-deck-widget/1-0-0.json#
import GdbotsCommonTaggableV1Mixin from '@gdbots/schemas/gdbots/common/mixin/taggable/TaggableV1Mixin';
import GdbotsNcrIndexedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/indexed/IndexedV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCommonThemeableV1Mixin from '@triniti/schemas/triniti/common/mixin/themeable/ThemeableV1Mixin';
import TrinitiCuratorCardDeckWidgetV1Mixin from '@triniti/schemas/triniti/curator/mixin/card-deck-widget/CardDeckWidgetV1Mixin';
import TrinitiCuratorCardDeckWidgetV1Trait from '@triniti/schemas/triniti/curator/mixin/card-deck-widget/CardDeckWidgetV1Trait';
import TrinitiCuratorWidgetV1Mixin from '@triniti/schemas/triniti/curator/mixin/widget/WidgetV1Mixin';

export default class CardDeckWidgetV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:node:card-deck-widget:1-0-0', CardDeckWidgetV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        TrinitiCuratorWidgetV1Mixin.create(),
        TrinitiCuratorCardDeckWidgetV1Mixin.create(),
        GdbotsCommonTaggableV1Mixin.create(),
        GdbotsNcrIndexedV1Mixin.create(),
        TrinitiCommonThemeableV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(CardDeckWidgetV1);
TrinitiCuratorCardDeckWidgetV1Trait(CardDeckWidgetV1);
MessageResolver.register('tmz:curator:node:card-deck-widget', CardDeckWidgetV1);
Object.freeze(CardDeckWidgetV1);
Object.freeze(CardDeckWidgetV1.prototype);
