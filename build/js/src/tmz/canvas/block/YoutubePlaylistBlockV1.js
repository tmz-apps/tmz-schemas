// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/youtube-playlist-block/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder.js';
import Message from '@gdbots/pbj/Message.js';
import Schema from '@gdbots/pbj/Schema.js';
import T from '@gdbots/pbj/types/index.js';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin.js';
import TrinitiCanvasYoutubePlaylistBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/youtube-playlist-block/YoutubePlaylistBlockV1Mixin.js';

export default class YoutubePlaylistBlockV1 extends Message {
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
        Fb.create('playlist_id', T.StringType.create())
          .required()
          .pattern('^[\\w-]+$')
          .build(),
        Fb.create('video_id', T.StringType.create())
          .pattern('^[\\w-]+$')
          .build(),
        Fb.create('autoplay', T.BooleanType.create())
          .build(),
        /*
         * A reference to an image asset to use as the poster that will
         * override what is provided by youtube.
         */
        Fb.create('poster_image_ref', T.NodeRefType.create())
          .build(),
      ],
      this.MIXINS,
    );
  }
}

const M = YoutubePlaylistBlockV1;
M.prototype.SCHEMA_ID = M.SCHEMA_ID = 'pbj:tmz:canvas:block:youtube-playlist-block:1-0-0';
M.prototype.SCHEMA_CURIE = M.SCHEMA_CURIE = 'tmz:canvas:block:youtube-playlist-block';
M.prototype.SCHEMA_CURIE_MAJOR = M.SCHEMA_CURIE_MAJOR = 'tmz:canvas:block:youtube-playlist-block:v1';
M.prototype.MIXINS = M.MIXINS = [
  'triniti:canvas:mixin:block:v1',
  'triniti:canvas:mixin:block',
  'triniti:canvas:mixin:youtube-playlist-block:v1',
  'triniti:canvas:mixin:youtube-playlist-block',
];

TrinitiCanvasBlockV1Mixin(M);

TrinitiCanvasYoutubePlaylistBlockV1Mixin(M);

Object.freeze(M);
Object.freeze(M.prototype);
