// @link https://schemas.tmz.com/json-schema/tmz/curator/node/showtimes-widget/1-0-0.json#
import GdbotsCommonTaggableV1Mixin from '@gdbots/schemas/gdbots/common/mixin/taggable/TaggableV1Mixin';
import GdbotsNcrIndexedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/indexed/IndexedV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCommonThemeableV1Mixin from '@triniti/schemas/triniti/common/mixin/themeable/ThemeableV1Mixin';
import TrinitiCuratorShowtimesWidgetV1Mixin from '@triniti/schemas/triniti/curator/mixin/showtimes-widget/ShowtimesWidgetV1Mixin';
import TrinitiCuratorShowtimesWidgetV1Trait from '@triniti/schemas/triniti/curator/mixin/showtimes-widget/ShowtimesWidgetV1Trait';
import TrinitiCuratorWidgetV1Mixin from '@triniti/schemas/triniti/curator/mixin/widget/WidgetV1Mixin';

export default class ShowtimesWidgetV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:node:showtimes-widget:1-0-0', ShowtimesWidgetV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        TrinitiCuratorWidgetV1Mixin.create(),
        TrinitiCuratorShowtimesWidgetV1Mixin.create(),
        GdbotsCommonTaggableV1Mixin.create(),
        GdbotsNcrIndexedV1Mixin.create(),
        TrinitiCommonThemeableV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(ShowtimesWidgetV1);
TrinitiCuratorShowtimesWidgetV1Trait(ShowtimesWidgetV1);
MessageResolver.register('tmz:curator:node:showtimes-widget', ShowtimesWidgetV1);
Object.freeze(ShowtimesWidgetV1);
Object.freeze(ShowtimesWidgetV1.prototype);
