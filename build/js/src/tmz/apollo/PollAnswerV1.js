// @link https://schemas.tmz.com/json-schema/tmz/apollo/poll-answer/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiApolloPollAnswerV1Mixin from '@triniti/schemas/triniti/apollo/mixin/poll-answer/PollAnswerV1Mixin';
import TrinitiApolloPollAnswerV1Trait from '@triniti/schemas/triniti/apollo/mixin/poll-answer/PollAnswerV1Trait';

export default class PollAnswerV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:apollo::poll-answer:1-0-0', PollAnswerV1,
      [],
      [
        TrinitiApolloPollAnswerV1Mixin.create(),
      ],
    );
  }
}

TrinitiApolloPollAnswerV1Trait(PollAnswerV1);
MessageResolver.register('tmz:apollo::poll-answer', PollAnswerV1);
Object.freeze(PollAnswerV1);
Object.freeze(PollAnswerV1.prototype);
