// @link https://schemas.tmz.com/json-schema/tmz/sys/node/picklist/1-0-0.json#
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiSysPicklistV1Mixin from '@triniti/schemas/triniti/sys/mixin/picklist/PicklistV1Mixin';
import TrinitiSysPicklistV1Trait from '@triniti/schemas/triniti/sys/mixin/picklist/PicklistV1Trait';

export default class PicklistV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:sys:node:picklist:1-0-0', PicklistV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        TrinitiSysPicklistV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(PicklistV1);
TrinitiSysPicklistV1Trait(PicklistV1);
MessageResolver.register('tmz:sys:node:picklist', PicklistV1);
Object.freeze(PicklistV1);
Object.freeze(PicklistV1.prototype);
