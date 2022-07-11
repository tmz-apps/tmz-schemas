// @link https://schemas.tmz.com/json-schema/tmz/sys/node/redirect/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder.js';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin.js';
import Message from '@gdbots/pbj/Message.js';
import NodeStatus from '@gdbots/schemas/gdbots/ncr/enums/NodeStatus.js';
import RedirectId from '@triniti/schemas/triniti/sys/RedirectId.js';
import Schema from '@gdbots/pbj/Schema.js';
import T from '@gdbots/pbj/types/index.js';
import TrinitiSysRedirectV1Mixin from '@triniti/schemas/triniti/sys/mixin/redirect/RedirectV1Mixin.js';

export default class RedirectV1 extends Message {
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
          .classProto(RedirectId)
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
        /*
         * The URL (absolute or relative on the current domain) that the incoming URI
         * should be redirected to.
         */
        Fb.create('redirect_to', T.StringType.create())
          .build(),
        /*
         * When permanent, the HTTP status code should be a 301 and 302 otherwise.
         */
        Fb.create('is_permanent', T.BooleanType.create())
          .build(),
        /*
         * Vanity URLs are used for on-air or promotional purposes and are generally
         * off the root and very short, e.g. /tour or /christmas
         */
        Fb.create('is_vanity', T.BooleanType.create())
          .build(),
      ],
      this.MIXINS,
    );
  }
}

const M = RedirectV1;
M.prototype.SCHEMA_ID = M.SCHEMA_ID = 'pbj:tmz:sys:node:redirect:1-0-0';
M.prototype.SCHEMA_CURIE = M.SCHEMA_CURIE = 'tmz:sys:node:redirect';
M.prototype.SCHEMA_CURIE_MAJOR = M.SCHEMA_CURIE_MAJOR = 'tmz:sys:node:redirect:v1';
M.prototype.MIXINS = M.MIXINS = [
  'gdbots:ncr:mixin:node:v1',
  'gdbots:ncr:mixin:node',
  'triniti:sys:mixin:redirect:v1',
  'triniti:sys:mixin:redirect',
];

GdbotsNcrNodeV1Mixin(M);

TrinitiSysRedirectV1Mixin(M);

Object.freeze(M);
Object.freeze(M.prototype);
