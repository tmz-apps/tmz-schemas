<?php
// @link https://schemas.tmz.com/json-schema/tmz/notify/node/android-notification/1-0-0.json#
namespace Tmz\Schemas\Notify\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\Indexed\IndexedV1 as GdbotsNcrIndexedV1;
use Gdbots\Schemas\Ncr\Mixin\Indexed\IndexedV1Mixin as GdbotsNcrIndexedV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1 as GdbotsNcrNodeV1;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin as GdbotsNcrNodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Trait as GdbotsNcrNodeV1Trait;
use Triniti\Schemas\Notify\Mixin\AndroidNotification\AndroidNotificationV1 as TrinitiNotifyAndroidNotificationV1;
use Triniti\Schemas\Notify\Mixin\AndroidNotification\AndroidNotificationV1Mixin as TrinitiNotifyAndroidNotificationV1Mixin;
use Triniti\Schemas\Notify\Mixin\AndroidNotification\AndroidNotificationV1Trait as TrinitiNotifyAndroidNotificationV1Trait;
use Triniti\Schemas\Notify\Mixin\Notification\NotificationV1 as TrinitiNotifyNotificationV1;
use Triniti\Schemas\Notify\Mixin\Notification\NotificationV1Mixin as TrinitiNotifyNotificationV1Mixin;

final class AndroidNotificationV1 extends AbstractMessage implements
    AndroidNotification,
    GdbotsNcrNodeV1,
    TrinitiNotifyNotificationV1,
    TrinitiNotifyAndroidNotificationV1,
    GdbotsNcrIndexedV1
{
    use GdbotsNcrNodeV1Trait;
    use TrinitiNotifyAndroidNotificationV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:notify:node:android-notification:1-0-0', __CLASS__,
            [],
            [
                GdbotsNcrNodeV1Mixin::create(),
                TrinitiNotifyNotificationV1Mixin::create(),
                TrinitiNotifyAndroidNotificationV1Mixin::create(),
                GdbotsNcrIndexedV1Mixin::create(),
            ]
        );
    }
}
