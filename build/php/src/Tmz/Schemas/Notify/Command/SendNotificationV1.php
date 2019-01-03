<?php
// @link https://schemas.tmz.com/json-schema/tmz/notify/command/send-notification/1-0-0.json#
namespace Tmz\Schemas\Notify\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;
use Triniti\Schemas\Notify\Mixin\SendNotification\SendNotificationV1 as TrinitiNotifySendNotificationV1;
use Triniti\Schemas\Notify\Mixin\SendNotification\SendNotificationV1Mixin as TrinitiNotifySendNotificationV1Mixin;

final class SendNotificationV1 extends AbstractMessage implements
    SendNotification,
    GdbotsPbjxCommandV1,
    TrinitiNotifySendNotificationV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:notify:command:send-notification:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                TrinitiNotifySendNotificationV1Mixin::create(),
            ]
        );
    }
}
