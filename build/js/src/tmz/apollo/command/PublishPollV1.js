// @link https://schemas.tmz.com/json-schema/tmz/apollo/command/publish-poll/1-0-0.json#
import GdbotsNcrPublishNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/publish-node/PublishNodeV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class PublishPollV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:apollo:command:publish-poll:1-0-0', PublishPollV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrPublishNodeV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(PublishPollV1);
MessageResolver.register('tmz:apollo:command:publish-poll', PublishPollV1);
Object.freeze(PublishPollV1);
Object.freeze(PublishPollV1.prototype);
