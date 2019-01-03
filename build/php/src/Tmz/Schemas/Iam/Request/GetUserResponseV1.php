<?php
// @link https://schemas.tmz.com/json-schema/tmz/iam/request/get-user-response/1-0-0.json#
namespace Tmz\Schemas\Iam\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\GetUserResponse\GetUserResponseV1 as GdbotsIamGetUserResponseV1;
use Gdbots\Schemas\Iam\Mixin\GetUserResponse\GetUserResponseV1Mixin as GdbotsIamGetUserResponseV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\GetNodeResponse\GetNodeResponseV1 as GdbotsNcrGetNodeResponseV1;
use Gdbots\Schemas\Ncr\Mixin\GetNodeResponse\GetNodeResponseV1Mixin as GdbotsNcrGetNodeResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1 as GdbotsPbjxResponseV1;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Mixin as GdbotsPbjxResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Trait as GdbotsPbjxResponseV1Trait;

final class GetUserResponseV1 extends AbstractMessage implements
    GetUserResponse,
    GdbotsPbjxResponseV1,
    GdbotsNcrGetNodeResponseV1,
    GdbotsIamGetUserResponseV1
{
    use GdbotsPbjxResponseV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:iam:request:get-user-response:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxResponseV1Mixin::create(),
                GdbotsNcrGetNodeResponseV1Mixin::create(),
                GdbotsIamGetUserResponseV1Mixin::create(),
            ]
        );
    }
}
