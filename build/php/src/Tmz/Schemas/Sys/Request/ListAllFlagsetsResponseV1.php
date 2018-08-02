<?php
// @link http://schemas.tmz.com/json-schema/tmz/sys/request/list-all-flagsets-response/1-0-0.json#
namespace Tmz\Schemas\Sys\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1 as GdbotsPbjxResponseV1;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Mixin as GdbotsPbjxResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Trait as GdbotsPbjxResponseV1Trait;
use Triniti\Schemas\Sys\Mixin\ListAllFlagsetsResponse\ListAllFlagsetsResponseV1 as TrinitiSysListAllFlagsetsResponseV1;
use Triniti\Schemas\Sys\Mixin\ListAllFlagsetsResponse\ListAllFlagsetsResponseV1Mixin as TrinitiSysListAllFlagsetsResponseV1Mixin;

final class ListAllFlagsetsResponseV1 extends AbstractMessage implements
    ListAllFlagsetsResponse,
    GdbotsPbjxResponseV1,
    TrinitiSysListAllFlagsetsResponseV1
{
    use GdbotsPbjxResponseV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:sys:request:list-all-flagsets-response:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxResponseV1Mixin::create(),
                TrinitiSysListAllFlagsetsResponseV1Mixin::create(),
            ]
        );
    }
}
