// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/pinterest-pin-block/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder';
import Format from '@gdbots/pbj/enums/Format';
import Message from '@gdbots/pbj/Message';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/types';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasPinterestPinBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/pinterest-pin-block/PinterestPinBlockV1Mixin';

export default class PinterestPinBlockV1 extends Message {
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
        Fb.create('href', T.TextType.create())
          .required()
          .format(Format.URL)
          .build(),
        /*
         * When true, hides the description.
         */
        Fb.create('terse', T.BooleanType.create())
          .build(),
        Fb.create('size', T.StringType.create())
          .pattern('^[\\w-]+$')
          .withDefault("small")
          .build(),
      ],
      this.MIXINS,
    );
  }
}

const M = PinterestPinBlockV1;
M.prototype.SCHEMA_ID = M.SCHEMA_ID = 'pbj:tmz:canvas:block:pinterest-pin-block:1-0-0';
M.prototype.SCHEMA_CURIE = M.SCHEMA_CURIE = 'tmz:canvas:block:pinterest-pin-block';
M.prototype.SCHEMA_CURIE_MAJOR = M.SCHEMA_CURIE_MAJOR = 'tmz:canvas:block:pinterest-pin-block:v1';
M.prototype.MIXINS = M.MIXINS = [
  'triniti:canvas:mixin:block:v1',
  'triniti:canvas:mixin:block',
  'triniti:canvas:mixin:pinterest-pin-block:v1',
  'triniti:canvas:mixin:pinterest-pin-block',
];

TrinitiCanvasBlockV1Mixin(M);

TrinitiCanvasPinterestPinBlockV1Mixin(M);

Object.freeze(M);
Object.freeze(M.prototype);
