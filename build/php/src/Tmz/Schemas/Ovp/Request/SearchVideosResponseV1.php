<?php
// @link https://schemas.tmz.com/json-schema/tmz/ovp/request/search-videos-response/1-0-0.json#
namespace Tmz\Schemas\Ovp\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesResponse\SearchNodesResponseV1 as GdbotsNcrSearchNodesResponseV1;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesResponse\SearchNodesResponseV1Mixin as GdbotsNcrSearchNodesResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1 as GdbotsPbjxResponseV1;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Mixin as GdbotsPbjxResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Trait as GdbotsPbjxResponseV1Trait;
use Triniti\Schemas\Curator\Mixin\WidgetSearchResponse\WidgetSearchResponseV1 as TrinitiCuratorWidgetSearchResponseV1;
use Triniti\Schemas\Curator\Mixin\WidgetSearchResponse\WidgetSearchResponseV1Mixin as TrinitiCuratorWidgetSearchResponseV1Mixin;
use Triniti\Schemas\Ovp\Mixin\SearchVideosResponse\SearchVideosResponseV1 as TrinitiOvpSearchVideosResponseV1;
use Triniti\Schemas\Ovp\Mixin\SearchVideosResponse\SearchVideosResponseV1Mixin as TrinitiOvpSearchVideosResponseV1Mixin;

final class SearchVideosResponseV1 extends AbstractMessage implements
    SearchVideosResponse,
    GdbotsPbjxResponseV1,
    GdbotsNcrSearchNodesResponseV1,
    TrinitiCuratorWidgetSearchResponseV1,
    TrinitiOvpSearchVideosResponseV1
{
    use GdbotsPbjxResponseV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:ovp:request:search-videos-response:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxResponseV1Mixin::create(),
                GdbotsNcrSearchNodesResponseV1Mixin::create(),
                TrinitiCuratorWidgetSearchResponseV1Mixin::create(),
                TrinitiOvpSearchVideosResponseV1Mixin::create(),
            ]
        );
    }
}
