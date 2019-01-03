<?php
// @link https://schemas.tmz.com/json-schema/tmz/notify/node/slack-notification/1-0-0.json#
namespace Tmz\Schemas\Notify\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\Indexed\IndexedV1 as GdbotsNcrIndexedV1;
use Gdbots\Schemas\Ncr\Mixin\Indexed\IndexedV1Mixin as GdbotsNcrIndexedV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1 as GdbotsNcrNodeV1;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin as GdbotsNcrNodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Trait as GdbotsNcrNodeV1Trait;
use Triniti\Schemas\Notify\Mixin\Notification\NotificationV1 as TrinitiNotifyNotificationV1;
use Triniti\Schemas\Notify\Mixin\Notification\NotificationV1Mixin as TrinitiNotifyNotificationV1Mixin;
use Triniti\Schemas\Notify\Mixin\SlackNotification\SlackNotificationV1 as TrinitiNotifySlackNotificationV1;
use Triniti\Schemas\Notify\Mixin\SlackNotification\SlackNotificationV1Mixin as TrinitiNotifySlackNotificationV1Mixin;
use Triniti\Schemas\Notify\Mixin\SlackNotification\SlackNotificationV1Trait as TrinitiNotifySlackNotificationV1Trait;

final class SlackNotificationV1 extends AbstractMessage implements
    SlackNotification,
    GdbotsNcrNodeV1,
    TrinitiNotifyNotificationV1,
    TrinitiNotifySlackNotificationV1,
    GdbotsNcrIndexedV1
{
    use GdbotsNcrNodeV1Trait;
    use TrinitiNotifySlackNotificationV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:notify:node:slack-notification:1-0-0', __CLASS__,
            [],
            [
                GdbotsNcrNodeV1Mixin::create(),
                TrinitiNotifyNotificationV1Mixin::create(),
                TrinitiNotifySlackNotificationV1Mixin::create(),
                GdbotsNcrIndexedV1Mixin::create(),
            ]
        );
    }
}
