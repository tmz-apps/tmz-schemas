// @link https://schemas.tmz.com/json-schema/tmz/curator/node/ad-widget/1-0-0.json#
import GdbotsCommonTaggableV1Mixin from '@gdbots/schemas/gdbots/common/mixin/taggable/TaggableV1Mixin';
import GdbotsNcrIndexedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/indexed/IndexedV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCuratorAdWidgetV1Mixin from '@triniti/schemas/triniti/curator/mixin/ad-widget/AdWidgetV1Mixin';
import TrinitiCuratorAdWidgetV1Trait from '@triniti/schemas/triniti/curator/mixin/ad-widget/AdWidgetV1Trait';
import TrinitiCuratorWidgetV1Mixin from '@triniti/schemas/triniti/curator/mixin/widget/WidgetV1Mixin';

export default class AdWidgetV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:node:ad-widget:1-0-0', AdWidgetV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        TrinitiCuratorWidgetV1Mixin.create(),
        TrinitiCuratorAdWidgetV1Mixin.create(),
        GdbotsCommonTaggableV1Mixin.create(),
        GdbotsNcrIndexedV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(AdWidgetV1);
TrinitiCuratorAdWidgetV1Trait(AdWidgetV1);
MessageResolver.register('tmz:curator:node:ad-widget', AdWidgetV1);
Object.freeze(AdWidgetV1);
Object.freeze(AdWidgetV1.prototype);
