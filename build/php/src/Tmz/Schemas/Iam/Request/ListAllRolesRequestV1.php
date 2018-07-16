<?php
// @link http://schemas.tmz.com/json-schema/tmz/iam/request/list-all-roles-request/1-0-0.json#
namespace Tmz\Schemas\Iam\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\ListAllRolesRequest\ListAllRolesRequestV1 as GdbotsIamListAllRolesRequestV1;
use Gdbots\Schemas\Iam\Mixin\ListAllRolesRequest\ListAllRolesRequestV1Mixin as GdbotsIamListAllRolesRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1 as GdbotsPbjxRequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin as GdbotsPbjxRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait as GdbotsPbjxRequestV1Trait;

final class ListAllRolesRequestV1 extends AbstractMessage implements
    ListAllRolesRequest,
    GdbotsPbjxRequestV1,
    GdbotsIamListAllRolesRequestV1
{
    use GdbotsPbjxRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:iam:request:list-all-roles-request:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxRequestV1Mixin::create(),
                GdbotsIamListAllRolesRequestV1Mixin::create(),
            ]
        );
    }
}
