<?php
// @link https://schemas.tmz.com/json-schema/tmz/iam/request/get-all-apps-response/1-0-0.json#
namespace Tmz\Schemas\Iam\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\GetAllAppsResponse\GetAllAppsResponseV1 as GdbotsIamGetAllAppsResponseV1;
use Gdbots\Schemas\Iam\Mixin\GetAllAppsResponse\GetAllAppsResponseV1Mixin as GdbotsIamGetAllAppsResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1 as GdbotsPbjxResponseV1;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Mixin as GdbotsPbjxResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Trait as GdbotsPbjxResponseV1Trait;

final class GetAllAppsResponseV1 extends AbstractMessage implements
    GetAllAppsResponse,
    GdbotsPbjxResponseV1,
    GdbotsIamGetAllAppsResponseV1
{
    use GdbotsPbjxResponseV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:iam:request:get-all-apps-response:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxResponseV1Mixin::create(),
                GdbotsIamGetAllAppsResponseV1Mixin::create(),
            ]
        );
    }
}
