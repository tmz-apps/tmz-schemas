<?php
// @link https://schemas.tmz.com/json-schema/tmz/sys/node/flagset/1-0-0.json#
namespace Tmz\Schemas\Sys\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1 as GdbotsNcrNodeV1;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin as GdbotsNcrNodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Trait as GdbotsNcrNodeV1Trait;
use Triniti\Schemas\Sys\Mixin\Flagset\FlagsetV1 as TrinitiSysFlagsetV1;
use Triniti\Schemas\Sys\Mixin\Flagset\FlagsetV1Mixin as TrinitiSysFlagsetV1Mixin;
use Triniti\Schemas\Sys\Mixin\Flagset\FlagsetV1Trait as TrinitiSysFlagsetV1Trait;

final class FlagsetV1 extends AbstractMessage implements
    Flagset,
    GdbotsNcrNodeV1,
    TrinitiSysFlagsetV1
{
    use GdbotsNcrNodeV1Trait;
    use TrinitiSysFlagsetV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:sys:node:flagset:1-0-0', __CLASS__,
            [],
            [
                GdbotsNcrNodeV1Mixin::create(),
                TrinitiSysFlagsetV1Mixin::create(),
            ]
        );
    }
}
