<?php
// @link https://schemas.tmz.com/json-schema/tmz/sys/node/redirect/1-0-0.json#
namespace Tmz\Schemas\Sys\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\Indexed\IndexedV1 as GdbotsNcrIndexedV1;
use Gdbots\Schemas\Ncr\Mixin\Indexed\IndexedV1Mixin as GdbotsNcrIndexedV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1 as GdbotsNcrNodeV1;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin as GdbotsNcrNodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Trait as GdbotsNcrNodeV1Trait;
use Triniti\Schemas\Sys\Mixin\Redirect\RedirectV1 as TrinitiSysRedirectV1;
use Triniti\Schemas\Sys\Mixin\Redirect\RedirectV1Mixin as TrinitiSysRedirectV1Mixin;
use Triniti\Schemas\Sys\Mixin\Redirect\RedirectV1Trait as TrinitiSysRedirectV1Trait;

final class RedirectV1 extends AbstractMessage implements
    Redirect,
    GdbotsNcrNodeV1,
    TrinitiSysRedirectV1,
    GdbotsNcrIndexedV1
{
    use GdbotsNcrNodeV1Trait;
    use TrinitiSysRedirectV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:sys:node:redirect:1-0-0', __CLASS__,
            [],
            [
                GdbotsNcrNodeV1Mixin::create(),
                TrinitiSysRedirectV1Mixin::create(),
                GdbotsNcrIndexedV1Mixin::create(),
            ]
        );
    }
}
