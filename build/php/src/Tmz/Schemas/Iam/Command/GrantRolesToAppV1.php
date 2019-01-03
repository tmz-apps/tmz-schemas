<?php
// @link https://schemas.tmz.com/json-schema/tmz/iam/command/grant-roles-to-app/1-0-0.json#
namespace Tmz\Schemas\Iam\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\GrantRolesToApp\GrantRolesToAppV1 as GdbotsIamGrantRolesToAppV1;
use Gdbots\Schemas\Iam\Mixin\GrantRolesToApp\GrantRolesToAppV1Mixin as GdbotsIamGrantRolesToAppV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;

final class GrantRolesToAppV1 extends AbstractMessage implements
    GrantRolesToApp,
    GdbotsPbjxCommandV1,
    GdbotsIamGrantRolesToAppV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:iam:command:grant-roles-to-app:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                GdbotsIamGrantRolesToAppV1Mixin::create(),
            ]
        );
    }
}
