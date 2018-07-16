<?php
// @link http://schemas.tmz.com/json-schema/tmz/iam/command/revoke-roles-from-user/1-0-0.json#
namespace Tmz\Schemas\Iam\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\RevokeRolesFromUser\RevokeRolesFromUserV1 as GdbotsIamRevokeRolesFromUserV1;
use Gdbots\Schemas\Iam\Mixin\RevokeRolesFromUser\RevokeRolesFromUserV1Mixin as GdbotsIamRevokeRolesFromUserV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;

final class RevokeRolesFromUserV1 extends AbstractMessage implements
    RevokeRolesFromUser,
    GdbotsPbjxCommandV1,
    GdbotsIamRevokeRolesFromUserV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:iam:command:revoke-roles-from-user:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                GdbotsIamRevokeRolesFromUserV1Mixin::create(),
            ]
        );
    }
}
