<?php
// @link http://schemas.tmz.com/json-schema/tmz/sys/node/picklist/1-0-0.json#
namespace Tmz\Schemas\Sys\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1 as GdbotsNcrNodeV1;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin as GdbotsNcrNodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Trait as GdbotsNcrNodeV1Trait;
use Triniti\Schemas\Sys\Mixin\Picklist\PicklistV1 as TrinitiSysPicklistV1;
use Triniti\Schemas\Sys\Mixin\Picklist\PicklistV1Mixin as TrinitiSysPicklistV1Mixin;
use Triniti\Schemas\Sys\Mixin\Picklist\PicklistV1Trait as TrinitiSysPicklistV1Trait;

final class PicklistV1 extends AbstractMessage implements
    Picklist,
    GdbotsNcrNodeV1,
    TrinitiSysPicklistV1
{
    use GdbotsNcrNodeV1Trait;
    use TrinitiSysPicklistV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:sys:node:picklist:1-0-0', __CLASS__,
            [],
            [
                GdbotsNcrNodeV1Mixin::create(),
                TrinitiSysPicklistV1Mixin::create(),
            ]
        );
    }
}
