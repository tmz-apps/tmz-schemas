<?php
// @link http://schemas.tmz.com/json-schema/tmz/curator/request/render-promotion-response/1-0-0.json#
namespace Tmz\Schemas\Curator\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1 as GdbotsPbjxResponseV1;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Mixin as GdbotsPbjxResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Trait as GdbotsPbjxResponseV1Trait;
use Triniti\Schemas\Curator\Mixin\RenderPromotionResponse\RenderPromotionResponseV1 as TrinitiCuratorRenderPromotionResponseV1;
use Triniti\Schemas\Curator\Mixin\RenderPromotionResponse\RenderPromotionResponseV1Mixin as TrinitiCuratorRenderPromotionResponseV1Mixin;

final class RenderPromotionResponseV1 extends AbstractMessage implements
    RenderPromotionResponse,
    GdbotsPbjxResponseV1,
    TrinitiCuratorRenderPromotionResponseV1
{
    use GdbotsPbjxResponseV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:curator:request:render-promotion-response:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxResponseV1Mixin::create(),
                TrinitiCuratorRenderPromotionResponseV1Mixin::create(),
            ]
        );
    }
}
