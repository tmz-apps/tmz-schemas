// @link https://schemas.tmz.com/json-schema/tmz/sys/node/picklist/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder.js';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin.js';
import Message from '@gdbots/pbj/Message.js';
import NodeStatus from '@gdbots/schemas/gdbots/ncr/enums/NodeStatus.js';
import PicklistId from '@triniti/schemas/triniti/sys/PicklistId.js';
import Schema from '@gdbots/pbj/Schema.js';
import T from '@gdbots/pbj/types/index.js';
import TrinitiSysPicklistV1Mixin from '@triniti/schemas/triniti/sys/mixin/picklist/PicklistV1Mixin.js';

export default class PicklistV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema(this.SCHEMA_ID, this,
      [
        Fb.create('_id', T.IdentifierType.create())
          .required()
          .classProto(PicklistId)
          .overridable(true)
          .build(),
        Fb.create('status', T.StringEnumType.create())
          .withDefault("draft")
          .classProto(NodeStatus)
          .build(),
        Fb.create('etag', T.StringType.create())
          .maxLength(100)
          .pattern('^[\\w\\.:-]+$')
          .build(),
        Fb.create('created_at', T.MicrotimeType.create())
          .build(),
        /*
         * A fully qualified reference to what created this node. This is intentionally a message-ref
         * and not a user id because it is often a program that creates nodes, not a user.
         */
        Fb.create('creator_ref', T.MessageRefType.create())
          .build(),
        Fb.create('updated_at', T.MicrotimeType.create())
          .useTypeDefault(false)
          .build(),
        /*
         * A fully qualified reference to what updated this node. This is intentionally a message-ref
         * and not a user id because it is often a program that updates nodes, not a user.
         * E.g. "acme:iam:node:app:cli-scheduler" or "acme:iam:node:user:60c71df0-fda8-11e5-bfb9-30342d363854"
         */
        Fb.create('updater_ref', T.MessageRefType.create())
          .build(),
        /*
         * A reference to the last event that changed the state of this node.
         * E.g. "acme:blog:event:article-published:60c71df0-fda8-11e5-bfb9-30342d363854"
         */
        Fb.create('last_event_ref', T.MessageRefType.create())
          .build(),
        Fb.create('title', T.StringType.create())
          .build(),
        Fb.create('options', T.StringType.create())
          .asAList()
          .build(),
        Fb.create('alpha_sort', T.BooleanType.create())
          .build(),
        Fb.create('allow_other', T.BooleanType.create())
          .build(),
        Fb.create('default_value', T.StringType.create())
          .build(),
      ],
      this.MIXINS,
    );
  }
}

const M = PicklistV1;
M.prototype.SCHEMA_ID = M.SCHEMA_ID = 'pbj:tmz:sys:node:picklist:1-0-0';
M.prototype.SCHEMA_CURIE = M.SCHEMA_CURIE = 'tmz:sys:node:picklist';
M.prototype.SCHEMA_CURIE_MAJOR = M.SCHEMA_CURIE_MAJOR = 'tmz:sys:node:picklist:v1';
M.prototype.MIXINS = M.MIXINS = [
  'gdbots:ncr:mixin:node:v1',
  'gdbots:ncr:mixin:node',
  'triniti:sys:mixin:picklist:v1',
  'triniti:sys:mixin:picklist',
];

GdbotsNcrNodeV1Mixin(M);

TrinitiSysPicklistV1Mixin(M);

Object.freeze(M);
Object.freeze(M.prototype);
