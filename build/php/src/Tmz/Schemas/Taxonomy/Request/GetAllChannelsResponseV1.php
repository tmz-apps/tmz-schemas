<?php
// @link http://schemas.tmz.com/json-schema/tmz/taxonomy/request/get-all-channels-response/1-0-0.json#
namespace Tmz\Schemas\Taxonomy\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1 as GdbotsPbjxResponseV1;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Mixin as GdbotsPbjxResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Trait as GdbotsPbjxResponseV1Trait;
use Triniti\Schemas\Taxonomy\Mixin\GetAllChannelsResponse\GetAllChannelsResponseV1 as TrinitiTaxonomyGetAllChannelsResponseV1;
use Triniti\Schemas\Taxonomy\Mixin\GetAllChannelsResponse\GetAllChannelsResponseV1Mixin as TrinitiTaxonomyGetAllChannelsResponseV1Mixin;

final class GetAllChannelsResponseV1 extends AbstractMessage implements
    GetAllChannelsResponse,
    GdbotsPbjxResponseV1,
    TrinitiTaxonomyGetAllChannelsResponseV1
{
    use GdbotsPbjxResponseV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:taxonomy:request:get-all-channels-response:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxResponseV1Mixin::create(),
                TrinitiTaxonomyGetAllChannelsResponseV1Mixin::create(),
            ]
        );
    }
}
