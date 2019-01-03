<?php
// @link https://schemas.tmz.com/json-schema/tmz/taxonomy/request/suggest-hashtags-response/1-0-0.json#
namespace Tmz\Schemas\Taxonomy\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1 as GdbotsPbjxResponseV1;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Mixin as GdbotsPbjxResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Trait as GdbotsPbjxResponseV1Trait;
use Triniti\Schemas\Taxonomy\Mixin\SuggestHashtagsResponse\SuggestHashtagsResponseV1 as TrinitiTaxonomySuggestHashtagsResponseV1;
use Triniti\Schemas\Taxonomy\Mixin\SuggestHashtagsResponse\SuggestHashtagsResponseV1Mixin as TrinitiTaxonomySuggestHashtagsResponseV1Mixin;

final class SuggestHashtagsResponseV1 extends AbstractMessage implements
    SuggestHashtagsResponse,
    GdbotsPbjxResponseV1,
    TrinitiTaxonomySuggestHashtagsResponseV1
{
    use GdbotsPbjxResponseV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:taxonomy:request:suggest-hashtags-response:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxResponseV1Mixin::create(),
                TrinitiTaxonomySuggestHashtagsResponseV1Mixin::create(),
            ]
        );
    }
}
