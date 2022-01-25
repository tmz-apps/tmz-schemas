// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/vimeo-video-block/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder.js';
import Message from '@gdbots/pbj/Message.js';
import Schema from '@gdbots/pbj/Schema.js';
import T from '@gdbots/pbj/types/index.js';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin.js';
import TrinitiCanvasVimeoVideoBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/vimeo-video-block/VimeoVideoBlockV1Mixin.js';

export default class VimeoVideoBlockV1 extends Message {
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
        Fb.create('id', T.StringType.create())
          .required()
          .pattern('^\\d+$')
          .build(),
        Fb.create('autoplay', T.BooleanType.create())
          .build(),
        Fb.create('loop', T.BooleanType.create())
          .build(),
        /*
         * Whether or not to show the byline (eg "from Dick Tracy") in the thumbnail.
         */
        Fb.create('show_byline', T.BooleanType.create())
          .build(),
        /*
         * Whether or not to show the portrait (profile image) in the thumbnail.
         */
        Fb.create('show_portrait', T.BooleanType.create())
          .build(),
        /*
         * Whether or not to show the video title in the thumbnail.
         */
        Fb.create('show_title', T.BooleanType.create())
          .build(),
        Fb.create('description', T.TextType.create())
          .maxLength(5000)
          .build(),
        Fb.create('title', T.StringType.create())
          .build(),
        Fb.create('user_id', T.StringType.create())
          .pattern('^[\\w\\.-]+$')
          .build(),
        Fb.create('user_name', T.StringType.create())
          .pattern('^[\\s\\w\\.-]+$')
          .build(),
        /*
         * A reference to an image asset to use as the poster that will
         * override what is provided by vimeo.
         */
        Fb.create('poster_image_ref', T.NodeRefType.create())
          .build(),
      ],
      this.MIXINS,
    );
  }
}

const M = VimeoVideoBlockV1;
M.prototype.SCHEMA_ID = M.SCHEMA_ID = 'pbj:tmz:canvas:block:vimeo-video-block:1-0-0';
M.prototype.SCHEMA_CURIE = M.SCHEMA_CURIE = 'tmz:canvas:block:vimeo-video-block';
M.prototype.SCHEMA_CURIE_MAJOR = M.SCHEMA_CURIE_MAJOR = 'tmz:canvas:block:vimeo-video-block:v1';
M.prototype.MIXINS = M.MIXINS = [
  'triniti:canvas:mixin:block:v1',
  'triniti:canvas:mixin:block',
  'triniti:canvas:mixin:vimeo-video-block:v1',
  'triniti:canvas:mixin:vimeo-video-block',
];

TrinitiCanvasBlockV1Mixin(M);

TrinitiCanvasVimeoVideoBlockV1Mixin(M);

Object.freeze(M);
Object.freeze(M.prototype);
