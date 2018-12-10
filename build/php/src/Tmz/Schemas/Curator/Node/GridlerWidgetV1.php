<?php
// @link http://schemas.tmz.com/json-schema/tmz/curator/node/gridler-widget/1-0-0.json#
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
use Triniti\Schemas\Common\Mixin\Themeable\ThemeableV1 as TrinitiCommonThemeableV1;
use Triniti\Schemas\Common\Mixin\Themeable\ThemeableV1Mixin as TrinitiCommonThemeableV1Mixin;
use Triniti\Schemas\Curator\Mixin\GridlerWidget\GridlerWidgetV1 as TrinitiCuratorGridlerWidgetV1;
use Triniti\Schemas\Curator\Mixin\GridlerWidget\GridlerWidgetV1Mixin as TrinitiCuratorGridlerWidgetV1Mixin;
use Triniti\Schemas\Curator\Mixin\GridlerWidget\GridlerWidgetV1Trait as TrinitiCuratorGridlerWidgetV1Trait;
use Triniti\Schemas\Curator\Mixin\WidgetHasSearchRequest\WidgetHasSearchRequestV1 as TrinitiCuratorWidgetHasSearchRequestV1;
use Triniti\Schemas\Curator\Mixin\WidgetHasSearchRequest\WidgetHasSearchRequestV1Mixin as TrinitiCuratorWidgetHasSearchRequestV1Mixin;
use Triniti\Schemas\Curator\Mixin\Widget\WidgetV1 as TrinitiCuratorWidgetV1;
use Triniti\Schemas\Curator\Mixin\Widget\WidgetV1Mixin as TrinitiCuratorWidgetV1Mixin;

final class GridlerWidgetV1 extends AbstractMessage implements
    GridlerWidget,
    GdbotsNcrNodeV1,
    TrinitiCuratorWidgetV1,
    TrinitiCuratorGridlerWidgetV1,
    GdbotsCommonTaggableV1,
    GdbotsNcrIndexedV1,
    TrinitiCommonThemeableV1,
    TrinitiCuratorWidgetHasSearchRequestV1
{
    use GdbotsNcrNodeV1Trait;
    use TrinitiCuratorGridlerWidgetV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:curator:node:gridler-widget:1-0-0', __CLASS__,
            [],
            [
                GdbotsNcrNodeV1Mixin::create(),
                TrinitiCuratorWidgetV1Mixin::create(),
                TrinitiCuratorGridlerWidgetV1Mixin::create(),
                GdbotsCommonTaggableV1Mixin::create(),
                GdbotsNcrIndexedV1Mixin::create(),
                TrinitiCommonThemeableV1Mixin::create(),
                TrinitiCuratorWidgetHasSearchRequestV1Mixin::create(),
            ]
        );
    }
}
