<?php
// @link https://schemas.tmz.com/json-schema/tmz/people/node/person/1-0-0.json#
namespace Tmz\Schemas\People\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Common\Mixin\Taggable\TaggableV1 as GdbotsCommonTaggableV1;
use Gdbots\Schemas\Common\Mixin\Taggable\TaggableV1Mixin as GdbotsCommonTaggableV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Indexed\IndexedV1 as GdbotsNcrIndexedV1;
use Gdbots\Schemas\Ncr\Mixin\Indexed\IndexedV1Mixin as GdbotsNcrIndexedV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1 as GdbotsNcrNodeV1;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin as GdbotsNcrNodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Trait as GdbotsNcrNodeV1Trait;
use Gdbots\Schemas\Ncr\Mixin\Sluggable\SluggableV1 as GdbotsNcrSluggableV1;
use Gdbots\Schemas\Ncr\Mixin\Sluggable\SluggableV1Mixin as GdbotsNcrSluggableV1Mixin;
use Triniti\Schemas\Canvas\Mixin\HasBlocks\HasBlocksV1 as TrinitiCanvasHasBlocksV1;
use Triniti\Schemas\Canvas\Mixin\HasBlocks\HasBlocksV1Mixin as TrinitiCanvasHasBlocksV1Mixin;
use Triniti\Schemas\Common\Mixin\Advertising\AdvertisingV1 as TrinitiCommonAdvertisingV1;
use Triniti\Schemas\Common\Mixin\Advertising\AdvertisingV1Mixin as TrinitiCommonAdvertisingV1Mixin;
use Triniti\Schemas\Common\Mixin\Seo\SeoV1 as TrinitiCommonSeoV1;
use Triniti\Schemas\Common\Mixin\Seo\SeoV1Mixin as TrinitiCommonSeoV1Mixin;
use Triniti\Schemas\Common\Mixin\Themeable\ThemeableV1 as TrinitiCommonThemeableV1;
use Triniti\Schemas\Common\Mixin\Themeable\ThemeableV1Mixin as TrinitiCommonThemeableV1Mixin;
use Triniti\Schemas\Curator\Mixin\Teaserable\TeaserableV1 as TrinitiCuratorTeaserableV1;
use Triniti\Schemas\Curator\Mixin\Teaserable\TeaserableV1Mixin as TrinitiCuratorTeaserableV1Mixin;
use Triniti\Schemas\People\Mixin\Person\PersonV1 as TrinitiPeoplePersonV1;
use Triniti\Schemas\People\Mixin\Person\PersonV1Mixin as TrinitiPeoplePersonV1Mixin;
use Triniti\Schemas\People\Mixin\Person\PersonV1Trait as TrinitiPeoplePersonV1Trait;
use Triniti\Schemas\Taxonomy\Mixin\Hashtaggable\HashtaggableV1 as TrinitiTaxonomyHashtaggableV1;
use Triniti\Schemas\Taxonomy\Mixin\Hashtaggable\HashtaggableV1Mixin as TrinitiTaxonomyHashtaggableV1Mixin;

final class PersonV1 extends AbstractMessage implements
    Person,
    GdbotsNcrNodeV1,
    TrinitiPeoplePersonV1,
    GdbotsCommonTaggableV1,
    GdbotsNcrIndexedV1,
    GdbotsNcrSluggableV1,
    TrinitiCanvasHasBlocksV1,
    TrinitiCommonAdvertisingV1,
    TrinitiCommonSeoV1,
    TrinitiCommonThemeableV1,
    TrinitiCuratorTeaserableV1,
    TrinitiTaxonomyHashtaggableV1
{
    use GdbotsNcrNodeV1Trait;
    use TrinitiPeoplePersonV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:people:node:person:1-0-0', __CLASS__,
            [],
            [
                GdbotsNcrNodeV1Mixin::create(),
                TrinitiPeoplePersonV1Mixin::create(),
                GdbotsCommonTaggableV1Mixin::create(),
                GdbotsNcrIndexedV1Mixin::create(),
                GdbotsNcrSluggableV1Mixin::create(),
                TrinitiCanvasHasBlocksV1Mixin::create(),
                TrinitiCommonAdvertisingV1Mixin::create(),
                TrinitiCommonSeoV1Mixin::create(),
                TrinitiCommonThemeableV1Mixin::create(),
                TrinitiCuratorTeaserableV1Mixin::create(),
                TrinitiTaxonomyHashtaggableV1Mixin::create(),
            ]
        );
    }
}
