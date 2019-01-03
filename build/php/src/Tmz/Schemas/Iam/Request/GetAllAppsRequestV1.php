<?php
// @link https://schemas.tmz.com/json-schema/tmz/iam/request/get-all-apps-request/1-0-0.json#
namespace Tmz\Schemas\Iam\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\GetAllAppsRequest\GetAllAppsRequestV1 as GdbotsIamGetAllAppsRequestV1;
use Gdbots\Schemas\Iam\Mixin\GetAllAppsRequest\GetAllAppsRequestV1Mixin as GdbotsIamGetAllAppsRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1 as GdbotsPbjxRequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin as GdbotsPbjxRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait as GdbotsPbjxRequestV1Trait;

final class GetAllAppsRequestV1 extends AbstractMessage implements
    GetAllAppsRequest,
    GdbotsPbjxRequestV1,
    GdbotsIamGetAllAppsRequestV1
{
    use GdbotsPbjxRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:iam:request:get-all-apps-request:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxRequestV1Mixin::create(),
                GdbotsIamGetAllAppsRequestV1Mixin::create(),
            ]
        );
    }
}
