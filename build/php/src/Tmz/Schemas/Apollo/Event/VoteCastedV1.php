<?php
// @link http://schemas.tmz.com/json-schema/tmz/apollo/event/vote-casted/1-0-0.json#
namespace Tmz\Schemas\Apollo\Event;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Analytics\Mixin\TrackedMessage\TrackedMessageV1 as GdbotsAnalyticsTrackedMessageV1;
use Gdbots\Schemas\Analytics\Mixin\TrackedMessage\TrackedMessageV1Mixin as GdbotsAnalyticsTrackedMessageV1Mixin;
use Gdbots\Schemas\Enrichments\Mixin\IpToGeo\IpToGeoV1 as GdbotsEnrichmentsIpToGeoV1;
use Gdbots\Schemas\Enrichments\Mixin\IpToGeo\IpToGeoV1Mixin as GdbotsEnrichmentsIpToGeoV1Mixin;
use Gdbots\Schemas\Enrichments\Mixin\TimeParting\TimePartingV1 as GdbotsEnrichmentsTimePartingV1;
use Gdbots\Schemas\Enrichments\Mixin\TimeParting\TimePartingV1Mixin as GdbotsEnrichmentsTimePartingV1Mixin;
use Gdbots\Schemas\Enrichments\Mixin\TimeSampling\TimeSamplingV1 as GdbotsEnrichmentsTimeSamplingV1;
use Gdbots\Schemas\Enrichments\Mixin\TimeSampling\TimeSamplingV1Mixin as GdbotsEnrichmentsTimeSamplingV1Mixin;
use Gdbots\Schemas\Enrichments\Mixin\UaParser\UaParserV1 as GdbotsEnrichmentsUaParserV1;
use Gdbots\Schemas\Enrichments\Mixin\UaParser\UaParserV1Mixin as GdbotsEnrichmentsUaParserV1Mixin;
use Gdbots\Schemas\Enrichments\Mixin\Utm\UtmV1 as GdbotsEnrichmentsUtmV1;
use Gdbots\Schemas\Enrichments\Mixin\Utm\UtmV1Mixin as GdbotsEnrichmentsUtmV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1 as GdbotsPbjxEventV1;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Mixin as GdbotsPbjxEventV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Trait as GdbotsPbjxEventV1Trait;
use Triniti\Schemas\Apollo\Mixin\VoteCasted\VoteCastedV1 as TrinitiApolloVoteCastedV1;
use Triniti\Schemas\Apollo\Mixin\VoteCasted\VoteCastedV1Mixin as TrinitiApolloVoteCastedV1Mixin;

final class VoteCastedV1 extends AbstractMessage implements
    VoteCasted,
    GdbotsPbjxEventV1,
    TrinitiApolloVoteCastedV1,
    GdbotsAnalyticsTrackedMessageV1,
    GdbotsEnrichmentsIpToGeoV1,
    GdbotsEnrichmentsTimePartingV1,
    GdbotsEnrichmentsTimeSamplingV1,
    GdbotsEnrichmentsUaParserV1,
    GdbotsEnrichmentsUtmV1
{
    use GdbotsPbjxEventV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:apollo:event:vote-casted:1-0-0', __CLASS__,
            [
                /*
                 * "s256" means shard 256. Used to distribute read/write from storage and speed up
                 * replay/reindex processes. It can also be used to distribute workload in front end
                 * user interfaces or notifications (like isles in a grocery store).
                 * This value should NOT change once set.
                 */
                Fb::create('s256', T\TinyIntType::create())
                    ->build(),
                /*
                 * "s32" means shard 32. See field "s256" for explanation.
                 */
                Fb::create('s32', T\TinyIntType::create())
                    ->build(),
                /*
                 * "s16" means shard 16. See field "s256" for explanation.
                 */
                Fb::create('s16', T\TinyIntType::create())
                    ->build(),
            ],
            [
                GdbotsPbjxEventV1Mixin::create(),
                TrinitiApolloVoteCastedV1Mixin::create(),
                GdbotsAnalyticsTrackedMessageV1Mixin::create(),
                GdbotsEnrichmentsIpToGeoV1Mixin::create(),
                GdbotsEnrichmentsTimePartingV1Mixin::create(),
                GdbotsEnrichmentsTimeSamplingV1Mixin::create(),
                GdbotsEnrichmentsUaParserV1Mixin::create(),
                GdbotsEnrichmentsUtmV1Mixin::create(),
            ]
        );
    }
}
