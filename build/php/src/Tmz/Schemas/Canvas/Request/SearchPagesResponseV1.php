<?php
// @link http://schemas.tmz.com/json-schema/tmz/canvas/request/search-pages-response/1-0-0.json#
namespace Tmz\Schemas\Canvas\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesResponse\SearchNodesResponseV1 as GdbotsNcrSearchNodesResponseV1;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesResponse\SearchNodesResponseV1Mixin as GdbotsNcrSearchNodesResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1 as GdbotsPbjxResponseV1;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Mixin as GdbotsPbjxResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Trait as GdbotsPbjxResponseV1Trait;
use Triniti\Schemas\Canvas\Mixin\SearchPagesResponse\SearchPagesResponseV1 as TrinitiCanvasSearchPagesResponseV1;
use Triniti\Schemas\Canvas\Mixin\SearchPagesResponse\SearchPagesResponseV1Mixin as TrinitiCanvasSearchPagesResponseV1Mixin;

final class SearchPagesResponseV1 extends AbstractMessage implements
    SearchPagesResponse,
    GdbotsPbjxResponseV1,
    GdbotsNcrSearchNodesResponseV1,
    TrinitiCanvasSearchPagesResponseV1
{
    use GdbotsPbjxResponseV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:canvas:request:search-pages-response:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxResponseV1Mixin::create(),
                GdbotsNcrSearchNodesResponseV1Mixin::create(),
                TrinitiCanvasSearchPagesResponseV1Mixin::create(),
            ]
        );
    }
}
