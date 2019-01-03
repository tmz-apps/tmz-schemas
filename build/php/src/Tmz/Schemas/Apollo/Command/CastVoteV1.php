<?php
// @link https://schemas.tmz.com/json-schema/tmz/apollo/command/cast-vote/1-0-0.json#
namespace Tmz\Schemas\Apollo\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Enrichments\Mixin\TimeParting\TimePartingV1 as GdbotsEnrichmentsTimePartingV1;
use Gdbots\Schemas\Enrichments\Mixin\TimeParting\TimePartingV1Mixin as GdbotsEnrichmentsTimePartingV1Mixin;
use Gdbots\Schemas\Enrichments\Mixin\TimeSampling\TimeSamplingV1 as GdbotsEnrichmentsTimeSamplingV1;
use Gdbots\Schemas\Enrichments\Mixin\TimeSampling\TimeSamplingV1Mixin as GdbotsEnrichmentsTimeSamplingV1Mixin;
use Gdbots\Schemas\Enrichments\Mixin\Utm\UtmV1 as GdbotsEnrichmentsUtmV1;
use Gdbots\Schemas\Enrichments\Mixin\Utm\UtmV1Mixin as GdbotsEnrichmentsUtmV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;
use Triniti\Schemas\Apollo\Mixin\CastVote\CastVoteV1 as TrinitiApolloCastVoteV1;
use Triniti\Schemas\Apollo\Mixin\CastVote\CastVoteV1Mixin as TrinitiApolloCastVoteV1Mixin;

final class CastVoteV1 extends AbstractMessage implements
    CastVote,
    GdbotsPbjxCommandV1,
    TrinitiApolloCastVoteV1,
    GdbotsEnrichmentsTimePartingV1,
    GdbotsEnrichmentsTimeSamplingV1,
    GdbotsEnrichmentsUtmV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:apollo:command:cast-vote:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                TrinitiApolloCastVoteV1Mixin::create(),
                GdbotsEnrichmentsTimePartingV1Mixin::create(),
                GdbotsEnrichmentsTimeSamplingV1Mixin::create(),
                GdbotsEnrichmentsUtmV1Mixin::create(),
            ]
        );
    }
}
