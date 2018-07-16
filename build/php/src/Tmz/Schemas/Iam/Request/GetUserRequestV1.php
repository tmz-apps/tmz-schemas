<?php
// @link http://schemas.tmz.com/json-schema/tmz/iam/request/get-user-request/1-0-0.json#
namespace Tmz\Schemas\Iam\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\GetUserRequest\GetUserRequestV1 as GdbotsIamGetUserRequestV1;
use Gdbots\Schemas\Iam\Mixin\GetUserRequest\GetUserRequestV1Mixin as GdbotsIamGetUserRequestV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\GetNodeRequest\GetNodeRequestV1 as GdbotsNcrGetNodeRequestV1;
use Gdbots\Schemas\Ncr\Mixin\GetNodeRequest\GetNodeRequestV1Mixin as GdbotsNcrGetNodeRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1 as GdbotsPbjxRequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin as GdbotsPbjxRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait as GdbotsPbjxRequestV1Trait;

final class GetUserRequestV1 extends AbstractMessage implements
    GetUserRequest,
    GdbotsPbjxRequestV1,
    GdbotsNcrGetNodeRequestV1,
    GdbotsIamGetUserRequestV1
{
    use GdbotsPbjxRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:iam:request:get-user-request:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxRequestV1Mixin::create(),
                GdbotsNcrGetNodeRequestV1Mixin::create(),
                GdbotsIamGetUserRequestV1Mixin::create(),
            ]
        );
    }
}
