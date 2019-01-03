<?php
// @link https://schemas.tmz.com/json-schema/tmz/curator/node/code-widget/1-0-0.json#
namespace Tmz\Schemas\Curator\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Common\Mixin\Taggable\TaggableV1 as GdbotsCommonTaggableV1;
use Gdbots\Schemas\Common\Mixin\Taggable\TaggableV1Mixin as GdbotsCommonTaggableV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Indexed\IndexedV1 as GdbotsNcrIndexedV1;
use Gdbots\Schemas\Ncr\Mixin\Indexed\IndexedV1Mixin as GdbotsNcrIndexedV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1 as GdbotsNcrNodeV1;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin as GdbotsNcrNodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Trait as GdbotsNcrNodeV1Trait;
use Triniti\Schemas\Curator\Mixin\CodeWidget\CodeWidgetV1 as TrinitiCuratorCodeWidgetV1;
use Triniti\Schemas\Curator\Mixin\CodeWidget\CodeWidgetV1Mixin as TrinitiCuratorCodeWidgetV1Mixin;
use Triniti\Schemas\Curator\Mixin\CodeWidget\CodeWidgetV1Trait as TrinitiCuratorCodeWidgetV1Trait;
use Triniti\Schemas\Curator\Mixin\Widget\WidgetV1 as TrinitiCuratorWidgetV1;
use Triniti\Schemas\Curator\Mixin\Widget\WidgetV1Mixin as TrinitiCuratorWidgetV1Mixin;

final class CodeWidgetV1 extends AbstractMessage implements
    CodeWidget,
    GdbotsNcrNodeV1,
    TrinitiCuratorWidgetV1,
    TrinitiCuratorCodeWidgetV1,
    GdbotsCommonTaggableV1,
    GdbotsNcrIndexedV1
{
    use GdbotsNcrNodeV1Trait;
    use TrinitiCuratorCodeWidgetV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:curator:node:code-widget:1-0-0', __CLASS__,
            [],
            [
                GdbotsNcrNodeV1Mixin::create(),
                TrinitiCuratorWidgetV1Mixin::create(),
                TrinitiCuratorCodeWidgetV1Mixin::create(),
                GdbotsCommonTaggableV1Mixin::create(),
                GdbotsNcrIndexedV1Mixin::create(),
            ]
        );
    }
}
