<?php
// @link https://schemas.tmz.com/json-schema/tmz/notify/request/search-notifications-request/1-0-0.json#
namespace Tmz\Schemas\Notify\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1 as GdbotsNcrSearchNodesRequestV1;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1Mixin as GdbotsNcrSearchNodesRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1 as GdbotsPbjxRequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin as GdbotsPbjxRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait as GdbotsPbjxRequestV1Trait;
use Triniti\Schemas\Notify\Mixin\SearchNotificationsRequest\SearchNotificationsRequestV1 as TrinitiNotifySearchNotificationsRequestV1;
use Triniti\Schemas\Notify\Mixin\SearchNotificationsRequest\SearchNotificationsRequestV1Mixin as TrinitiNotifySearchNotificationsRequestV1Mixin;

final class SearchNotificationsRequestV1 extends AbstractMessage implements
    SearchNotificationsRequest,
    GdbotsPbjxRequestV1,
    GdbotsNcrSearchNodesRequestV1,
    TrinitiNotifySearchNotificationsRequestV1
{
    use GdbotsPbjxRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:notify:request:search-notifications-request:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxRequestV1Mixin::create(),
                GdbotsNcrSearchNodesRequestV1Mixin::create(),
                TrinitiNotifySearchNotificationsRequestV1Mixin::create(),
            ]
        );
    }
}
