// @link https://schemas.tmz.com/json-schema/tmz/curator/node/promotion/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder.js';
import Format from '@gdbots/pbj/enums/Format.js';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin.js';
import Message from '@gdbots/pbj/Message.js';
import NodeStatus from '@gdbots/schemas/gdbots/ncr/enums/NodeStatus.js';
import Schema from '@gdbots/pbj/Schema.js';
import T from '@gdbots/pbj/types/index.js';
import TrinitiCuratorPromotionV1Mixin from '@triniti/schemas/triniti/curator/mixin/promotion/PromotionV1Mixin.js';
import UuidIdentifier from '@gdbots/pbj/well-known/UuidIdentifier.js';

export default class PromotionV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema(this.SCHEMA_ID, this,
      [
        /*
         * The "_id" value:
         * - MUST NOT change for the life of the node.
         * - SHOULD be globally unique
         * - SHOULD be generated by the app (ideally in default value closure... e.g. UuidIdentifier::generate())
         */
        Fb.create('_id', T.IdentifierType.create())
          .required()
          .withDefault(() => UuidIdentifier.generate())
          .classProto(UuidIdentifier)
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
         * The name of the location where the promotion should render,
         * e.g. "desktop-home-sidebar" or "smartphone-global-html-head".
         */
        Fb.create('slot', T.StringType.create())
          .format(Format.SLUG)
          .build(),
        /*
         * If multiple promotions can render in a given slot at the same
         * time then the one with the higher priority takes precedence.
         */
        Fb.create('priority', T.SmallIntType.create())
          .build(),
        Fb.create('mon_start_at', T.StringType.create())
          .pattern('^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$')
          .build(),
        Fb.create('mon_end_at', T.StringType.create())
          .pattern('^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$')
          .build(),
        Fb.create('tue_start_at', T.StringType.create())
          .pattern('^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$')
          .build(),
        Fb.create('tue_end_at', T.StringType.create())
          .pattern('^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$')
          .build(),
        Fb.create('wed_start_at', T.StringType.create())
          .pattern('^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$')
          .build(),
        Fb.create('wed_end_at', T.StringType.create())
          .pattern('^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$')
          .build(),
        Fb.create('thu_start_at', T.StringType.create())
          .pattern('^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$')
          .build(),
        Fb.create('thu_end_at', T.StringType.create())
          .pattern('^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$')
          .build(),
        Fb.create('fri_start_at', T.StringType.create())
          .pattern('^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$')
          .build(),
        Fb.create('fri_end_at', T.StringType.create())
          .pattern('^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$')
          .build(),
        Fb.create('sat_start_at', T.StringType.create())
          .pattern('^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$')
          .build(),
        Fb.create('sat_end_at', T.StringType.create())
          .pattern('^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$')
          .build(),
        Fb.create('sun_start_at', T.StringType.create())
          .pattern('^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$')
          .build(),
        Fb.create('sun_end_at', T.StringType.create())
          .pattern('^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$')
          .build(),
        /*
         * A string containing HTML that is injected into
         * the application before the widgets render.
         */
        Fb.create('pre_render_code', T.TextType.create())
          .build(),
        /*
         * A string containing HTML that is injected into
         * the application after the widgets render.
         */
        Fb.create('post_render_code', T.TextType.create())
          .build(),
        /*
         * A list of widget node refs that this promotion will render.
         */
        Fb.create('widget_refs', T.NodeRefType.create())
          .asAList()
          .build(),
        Fb.create('slots', T.MessageType.create())
          .asAList()
          .anyOfCuries([
            'triniti:curator::slot',
          ])
          .build(),
        /*
         * Tags is a map that categorizes data or tracks references in
         * external systems. The tags names should be consistent and descriptive,
         * e.g. fb_user_id:123, salesforce_customer_id:456.
         */
        Fb.create('tags', T.StringType.create())
          .asAMap()
          .pattern('^[\\w\\/\\.:-]+$')
          .build(),
        Fb.create('expires_at', T.DateTimeType.create())
          .build(),
        Fb.create('published_at', T.DateTimeType.create())
          .build(),
      ],
      this.MIXINS,
    );
  }
}

const M = PromotionV1;
M.prototype.SCHEMA_ID = M.SCHEMA_ID = 'pbj:tmz:curator:node:promotion:1-0-0';
M.prototype.SCHEMA_CURIE = M.SCHEMA_CURIE = 'tmz:curator:node:promotion';
M.prototype.SCHEMA_CURIE_MAJOR = M.SCHEMA_CURIE_MAJOR = 'tmz:curator:node:promotion:v1';
M.prototype.MIXINS = M.MIXINS = [
  'gdbots:ncr:mixin:node:v1',
  'gdbots:ncr:mixin:node',
  'triniti:curator:mixin:promotion:v1',
  'triniti:curator:mixin:promotion',
  'gdbots:common:mixin:taggable:v1',
  'gdbots:common:mixin:taggable',
  'gdbots:ncr:mixin:expirable:v1',
  'gdbots:ncr:mixin:expirable',
  'gdbots:ncr:mixin:publishable:v1',
  'gdbots:ncr:mixin:publishable',
];

GdbotsNcrNodeV1Mixin(M);

TrinitiCuratorPromotionV1Mixin(M);

Object.freeze(M);
Object.freeze(M.prototype);
