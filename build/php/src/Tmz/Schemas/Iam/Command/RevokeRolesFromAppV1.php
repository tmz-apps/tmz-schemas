<?php
// @link https://schemas.tmz.com/json-schema/tmz/iam/command/revoke-roles-from-app/1-0-0.json#
namespace Tmz\Schemas\Iam\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\RevokeRolesFromApp\RevokeRolesFromAppV1 as GdbotsIamRevokeRolesFromAppV1;
use Gdbots\Schemas\Iam\Mixin\RevokeRolesFromApp\RevokeRolesFromAppV1Mixin as GdbotsIamRevokeRolesFromAppV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;

final class RevokeRolesFromAppV1 extends AbstractMessage implements
    RevokeRolesFromApp,
    GdbotsPbjxCommandV1,
    GdbotsIamRevokeRolesFromAppV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:iam:command:revoke-roles-from-app:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                GdbotsIamRevokeRolesFromAppV1Mixin::create(),
            ]
        );
    }
}
