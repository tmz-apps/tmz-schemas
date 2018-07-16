// @link http://schemas.tmz.com/json-schema/tmz/sys/node/redirect/1-0-0.json#
import GdbotsNcrIndexedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/indexed/IndexedV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiSysRedirectV1Mixin from '@triniti/schemas/triniti/sys/mixin/redirect/RedirectV1Mixin';
import TrinitiSysRedirectV1Trait from '@triniti/schemas/triniti/sys/mixin/redirect/RedirectV1Trait';

export default class RedirectV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:sys:node:redirect:1-0-0', RedirectV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        TrinitiSysRedirectV1Mixin.create(),
        GdbotsNcrIndexedV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(RedirectV1);
TrinitiSysRedirectV1Trait(RedirectV1);
MessageResolver.register('tmz:sys:node:redirect', RedirectV1);
Object.freeze(RedirectV1);
Object.freeze(RedirectV1.prototype);
