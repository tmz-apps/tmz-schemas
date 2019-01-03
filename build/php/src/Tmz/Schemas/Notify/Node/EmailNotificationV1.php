<?php
// @link https://schemas.tmz.com/json-schema/tmz/notify/node/email-notification/1-0-0.json#
namespace Tmz\Schemas\Notify\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Enum\Format;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Ncr\Mixin\Indexed\IndexedV1 as GdbotsNcrIndexedV1;
use Gdbots\Schemas\Ncr\Mixin\Indexed\IndexedV1Mixin as GdbotsNcrIndexedV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1 as GdbotsNcrNodeV1;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin as GdbotsNcrNodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Trait as GdbotsNcrNodeV1Trait;
use Triniti\Schemas\Notify\Mixin\EmailNotification\EmailNotificationV1 as TrinitiNotifyEmailNotificationV1;
use Triniti\Schemas\Notify\Mixin\EmailNotification\EmailNotificationV1Mixin as TrinitiNotifyEmailNotificationV1Mixin;
use Triniti\Schemas\Notify\Mixin\EmailNotification\EmailNotificationV1Trait as TrinitiNotifyEmailNotificationV1Trait;
use Triniti\Schemas\Notify\Mixin\Notification\NotificationV1 as TrinitiNotifyNotificationV1;
use Triniti\Schemas\Notify\Mixin\Notification\NotificationV1Mixin as TrinitiNotifyNotificationV1Mixin;

final class EmailNotificationV1 extends AbstractMessage implements
    EmailNotification,
    GdbotsNcrNodeV1,
    TrinitiNotifyNotificationV1,
    TrinitiNotifyEmailNotificationV1,
    GdbotsNcrIndexedV1
{
    use GdbotsNcrNodeV1Trait;
    use TrinitiNotifyEmailNotificationV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:notify:node:email-notification:1-0-0', __CLASS__,
            [
                Fb::create('distro_video_url', T\StringType::create())
                    ->format(Format::URL())
                    ->build(),
                Fb::create('distro_video_embed', T\TextType::create())
                    ->build(),
                Fb::create('distro_photo_url', T\StringType::create())
                    ->format(Format::URL())
                    ->build(),
                Fb::create('distro_document_url', T\StringType::create())
                    ->format(Format::URL())
                    ->build(),
                Fb::create('distro_date', T\StringType::create())
                    ->build(),
            ],
            [
                GdbotsNcrNodeV1Mixin::create(),
                TrinitiNotifyNotificationV1Mixin::create(),
                TrinitiNotifyEmailNotificationV1Mixin::create(),
                GdbotsNcrIndexedV1Mixin::create(),
            ]
        );
    }
}
