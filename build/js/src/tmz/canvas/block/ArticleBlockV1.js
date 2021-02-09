// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/article-block/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder';
import Message from '@gdbots/pbj/Message';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/types';
import TrinitiCanvasArticleBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/article-block/ArticleBlockV1Mixin';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';

export default class ArticleBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema(this.SCHEMA_ID, this,
      [
        Fb.create('etag', T.StringType.create())
          .maxLength(100)
          .pattern('^[\\w\\.:-]+$')
          .build(),
        /*
         * In rendering environments that support HTML the css_class
         * can be appended to the dom elements' class attribute.
         */
        Fb.create('css_class', T.StringType.create())
          .pattern('^[\\w\\s-]+$')
          .build(),
        /*
         * Represents an update that occurred on the node this block
         * is attached to. DOES NOT indicate an update to the block itself.
         * eg an article with a twitter block with updated_date means that
         * the article was updated to include that twitter block.
         */
        Fb.create('updated_date', T.DateTimeType.create())
          .build(),
        /*
         * When true it means this block represents a portion of a document
         * whose content is only indirectly related to the document's main content.
         * Asides are frequently presented as sidebars or call-out boxes.
         */
        Fb.create('aside', T.BooleanType.create())
          .build(),
        Fb.create('node_ref', T.NodeRefType.create())
          .required()
          .build(),
        /*
         * An optional override for the title of the node.
         */
        Fb.create('title', T.StringType.create())
          .build(),
        Fb.create('cta_text', T.StringType.create())
          .build(),
        Fb.create('link_text', T.StringType.create())
          .build(),
        Fb.create('show_image', T.BooleanType.create())
          .withDefault(true)
          .build(),
        /*
         * An optional reference to an image asset to use as the poster.
         */
        Fb.create('image_ref', T.NodeRefType.create())
          .build(),
      ],
      this.MIXINS,
    );
  }
}

const M = ArticleBlockV1;
M.prototype.SCHEMA_ID = M.SCHEMA_ID = 'pbj:tmz:canvas:block:article-block:1-0-0';
M.prototype.SCHEMA_CURIE = M.SCHEMA_CURIE = 'tmz:canvas:block:article-block';
M.prototype.SCHEMA_CURIE_MAJOR = M.SCHEMA_CURIE_MAJOR = 'tmz:canvas:block:article-block:v1';
M.prototype.MIXINS = M.MIXINS = [
  'triniti:canvas:mixin:block:v1',
  'triniti:canvas:mixin:block',
  'triniti:canvas:mixin:node-ref-block:v1',
  'triniti:canvas:mixin:node-ref-block',
  'triniti:canvas:mixin:article-block:v1',
  'triniti:canvas:mixin:article-block',
];

TrinitiCanvasBlockV1Mixin(M);

TrinitiCanvasArticleBlockV1Mixin(M);

Object.freeze(M);
Object.freeze(M.prototype);
