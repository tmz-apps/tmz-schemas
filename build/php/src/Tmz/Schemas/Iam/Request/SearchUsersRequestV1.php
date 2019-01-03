<?php
// @link https://schemas.tmz.com/json-schema/tmz/iam/request/search-users-request/1-0-0.json#
namespace Tmz\Schemas\Iam\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\SearchUsersRequest\SearchUsersRequestV1 as GdbotsIamSearchUsersRequestV1;
use Gdbots\Schemas\Iam\Mixin\SearchUsersRequest\SearchUsersRequestV1Mixin as GdbotsIamSearchUsersRequestV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1 as GdbotsNcrSearchNodesRequestV1;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1Mixin as GdbotsNcrSearchNodesRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1 as GdbotsPbjxRequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin as GdbotsPbjxRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait as GdbotsPbjxRequestV1Trait;

final class SearchUsersRequestV1 extends AbstractMessage implements
    SearchUsersRequest,
    GdbotsPbjxRequestV1,
    GdbotsNcrSearchNodesRequestV1,
    GdbotsIamSearchUsersRequestV1
{
    use GdbotsPbjxRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:iam:request:search-users-request:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxRequestV1Mixin::create(),
                GdbotsNcrSearchNodesRequestV1Mixin::create(),
                GdbotsIamSearchUsersRequestV1Mixin::create(),
            ]
        );
    }
}
