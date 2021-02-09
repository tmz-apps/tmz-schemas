// @link https://schemas.tmz.com/json-schema/tmz/apollo/poll-answer/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder';
import Format from '@gdbots/pbj/enums/Format';
import Message from '@gdbots/pbj/Message';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/types';
import TrinitiApolloPollAnswerV1Mixin from '@triniti/schemas/triniti/apollo/mixin/poll-answer/PollAnswerV1Mixin';

export default class PollAnswerV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema(this.SCHEMA_ID, this,
      [
        Fb.create('_id', T.UuidType.create())
          .required()
          .build(),
        Fb.create('title', T.StringType.create())
          .build(),
        Fb.create('url', T.TextType.create())
          .format(Format.URL)
          .build(),
        Fb.create('initial_votes', T.IntType.create())
          .build(),
      ],
      this.MIXINS,
    );
  }
}

const M = PollAnswerV1;
M.prototype.SCHEMA_ID = M.SCHEMA_ID = 'pbj:tmz:apollo::poll-answer:1-0-0';
M.prototype.SCHEMA_CURIE = M.SCHEMA_CURIE = 'tmz:apollo::poll-answer';
M.prototype.SCHEMA_CURIE_MAJOR = M.SCHEMA_CURIE_MAJOR = 'tmz:apollo::poll-answer:v1';
M.prototype.MIXINS = M.MIXINS = [
  'triniti:apollo:mixin:poll-answer:v1',
  'triniti:apollo:mixin:poll-answer',
];

TrinitiApolloPollAnswerV1Mixin(M);

Object.freeze(M);
Object.freeze(M.prototype);
