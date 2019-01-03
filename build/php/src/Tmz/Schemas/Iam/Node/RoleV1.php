<?php
// @link https://schemas.tmz.com/json-schema/tmz/iam/node/role/1-0-0.json#
namespace Tmz\Schemas\Iam\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\Role\RoleV1 as GdbotsIamRoleV1;
use Gdbots\Schemas\Iam\Mixin\Role\RoleV1Mixin as GdbotsIamRoleV1Mixin;
use Gdbots\Schemas\Iam\Mixin\Role\RoleV1Trait as GdbotsIamRoleV1Trait;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1 as GdbotsNcrNodeV1;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin as GdbotsNcrNodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Trait as GdbotsNcrNodeV1Trait;

final class RoleV1 extends AbstractMessage implements
    Role,
    GdbotsNcrNodeV1,
    GdbotsIamRoleV1
{
    use GdbotsNcrNodeV1Trait;
    use GdbotsIamRoleV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:iam:node:role:1-0-0', __CLASS__,
            [],
            [
                GdbotsNcrNodeV1Mixin::create(),
                GdbotsIamRoleV1Mixin::create(),
            ]
        );
    }
}
