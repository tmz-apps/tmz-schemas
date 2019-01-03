<?php
// @link https://schemas.tmz.com/json-schema/tmz/notify/request/search-notifications-response/1-0-0.json#
namespace Tmz\Schemas\Notify\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesResponse\SearchNodesResponseV1 as GdbotsNcrSearchNodesResponseV1;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesResponse\SearchNodesResponseV1Mixin as GdbotsNcrSearchNodesResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1 as GdbotsPbjxResponseV1;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Mixin as GdbotsPbjxResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Trait as GdbotsPbjxResponseV1Trait;
use Triniti\Schemas\Notify\Mixin\SearchNotificationsResponse\SearchNotificationsResponseV1 as TrinitiNotifySearchNotificationsResponseV1;
use Triniti\Schemas\Notify\Mixin\SearchNotificationsResponse\SearchNotificationsResponseV1Mixin as TrinitiNotifySearchNotificationsResponseV1Mixin;

final class SearchNotificationsResponseV1 extends AbstractMessage implements
    SearchNotificationsResponse,
    GdbotsPbjxResponseV1,
    GdbotsNcrSearchNodesResponseV1,
    TrinitiNotifySearchNotificationsResponseV1
{
    use GdbotsPbjxResponseV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:notify:request:search-notifications-response:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxResponseV1Mixin::create(),
                GdbotsNcrSearchNodesResponseV1Mixin::create(),
                TrinitiNotifySearchNotificationsResponseV1Mixin::create(),
            ]
        );
    }
}
