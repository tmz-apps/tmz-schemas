<?php
// @link https://schemas.tmz.com/json-schema/tmz/canvas/block/article-block/1-0-0.json#
namespace Tmz\Schemas\Canvas\Block;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Triniti\Schemas\Canvas\Mixin\ArticleBlock\ArticleBlockV1 as TrinitiCanvasArticleBlockV1;
use Triniti\Schemas\Canvas\Mixin\ArticleBlock\ArticleBlockV1Mixin as TrinitiCanvasArticleBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\ArticleBlock\ArticleBlockV1Trait as TrinitiCanvasArticleBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1 as TrinitiCanvasBlockV1;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Mixin as TrinitiCanvasBlockV1Mixin;
use Triniti\Schemas\Canvas\Mixin\Block\BlockV1Trait as TrinitiCanvasBlockV1Trait;
use Triniti\Schemas\Canvas\Mixin\NodeRefBlock\NodeRefBlockV1 as TrinitiCanvasNodeRefBlockV1;
use Triniti\Schemas\Canvas\Mixin\NodeRefBlock\NodeRefBlockV1Mixin as TrinitiCanvasNodeRefBlockV1Mixin;

final class ArticleBlockV1 extends AbstractMessage implements
    ArticleBlock,
    TrinitiCanvasBlockV1,
    TrinitiCanvasNodeRefBlockV1,
    TrinitiCanvasArticleBlockV1
{
    use TrinitiCanvasBlockV1Trait;
    use TrinitiCanvasArticleBlockV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:block:article-block:1-0-0', __CLASS__,
            [],
            [
                TrinitiCanvasBlockV1Mixin::create(),
                TrinitiCanvasNodeRefBlockV1Mixin::create(),
                TrinitiCanvasArticleBlockV1Mixin::create(),
            ]
        );
    }
}
