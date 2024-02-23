// @link https://schemas.tmz.com/json-schema/tmz/news/command/inspect-article-seo/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder.js';
import Format from '@gdbots/pbj/enums/Format.js';
import Message from '@gdbots/pbj/Message.js';
import Schema from '@gdbots/pbj/Schema.js';
import T from '@gdbots/pbj/types/index.js';

export default class InspectArticleSeoV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema(this.SCHEMA_ID, this,
      [
        Fb.create('node_ref', T.NodeRefType.create())
          .required()
          .build(),
        /*
         * The search engines for which to inspect the node's SEO status, e.g. google, bing, baidu, etc.
         * When not provided you should inspect for all search engines.
         */
        Fb.create('search_engines', T.StringType.create())
          .asASet()
          .format(Format.SLUG)
          .build(),
      ],
      this.MIXINS,
    );
  }
}

const M = InspectArticleSeoV1;
M.prototype.SCHEMA_ID = M.SCHEMA_ID = 'pbj:tmz:news:command:inspect-article-seo:1-0-0';
M.prototype.SCHEMA_CURIE = M.SCHEMA_CURIE = 'tmz:news:command:inspect-article-seo';
M.prototype.SCHEMA_CURIE_MAJOR = M.SCHEMA_CURIE_MAJOR = 'tmz:news:command:inspect-article-seo:v1';
M.prototype.MIXINS = M.MIXINS = [
  'triniti:sys:command:inspect-seo:v1',
  'triniti:sys:command:inspect-seo',
];

TrinitiSysInspectSeoV1Mixin(M);

Object.freeze(M);
Object.freeze(M.prototype);
