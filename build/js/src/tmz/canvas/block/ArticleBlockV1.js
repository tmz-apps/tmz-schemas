// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/article-block/1-0-0.json#
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCanvasArticleBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/article-block/ArticleBlockV1Mixin';
import TrinitiCanvasArticleBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/article-block/ArticleBlockV1Trait';
import TrinitiCanvasBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Mixin';
import TrinitiCanvasBlockV1Trait from '@triniti/schemas/triniti/canvas/mixin/block/BlockV1Trait';
import TrinitiCanvasNodeRefBlockV1Mixin from '@triniti/schemas/triniti/canvas/mixin/node-ref-block/NodeRefBlockV1Mixin';

export default class ArticleBlockV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:canvas:block:article-block:1-0-0', ArticleBlockV1,
      [],
      [
        TrinitiCanvasBlockV1Mixin.create(),
        TrinitiCanvasNodeRefBlockV1Mixin.create(),
        TrinitiCanvasArticleBlockV1Mixin.create(),
      ],
    );
  }
}

TrinitiCanvasBlockV1Trait(ArticleBlockV1);
TrinitiCanvasArticleBlockV1Trait(ArticleBlockV1);
MessageResolver.register('tmz:canvas:block:article-block', ArticleBlockV1);
Object.freeze(ArticleBlockV1);
Object.freeze(ArticleBlockV1.prototype);
