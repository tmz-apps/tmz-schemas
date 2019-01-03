// @link https://schemas.tmz.com/json-schema/tmz/curator/node/code-widget/1-0-0.json#
import GdbotsCommonTaggableV1Mixin from '@gdbots/schemas/gdbots/common/mixin/taggable/TaggableV1Mixin';
import GdbotsNcrIndexedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/indexed/IndexedV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCuratorCodeWidgetV1Mixin from '@triniti/schemas/triniti/curator/mixin/code-widget/CodeWidgetV1Mixin';
import TrinitiCuratorCodeWidgetV1Trait from '@triniti/schemas/triniti/curator/mixin/code-widget/CodeWidgetV1Trait';
import TrinitiCuratorWidgetV1Mixin from '@triniti/schemas/triniti/curator/mixin/widget/WidgetV1Mixin';

export default class CodeWidgetV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:node:code-widget:1-0-0', CodeWidgetV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        TrinitiCuratorWidgetV1Mixin.create(),
        TrinitiCuratorCodeWidgetV1Mixin.create(),
        GdbotsCommonTaggableV1Mixin.create(),
        GdbotsNcrIndexedV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(CodeWidgetV1);
TrinitiCuratorCodeWidgetV1Trait(CodeWidgetV1);
MessageResolver.register('tmz:curator:node:code-widget', CodeWidgetV1);
Object.freeze(CodeWidgetV1);
Object.freeze(CodeWidgetV1.prototype);
