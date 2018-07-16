<?php
// @link http://schemas.tmz.com/json-schema/tmz/taxonomy/node/channel/1-0-0.json#
namespace Tmz\Schemas\Taxonomy\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Common\Mixin\Taggable\TaggableV1 as GdbotsCommonTaggableV1;
use Gdbots\Schemas\Common\Mixin\Taggable\TaggableV1Mixin as GdbotsCommonTaggableV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1 as GdbotsNcrNodeV1;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin as GdbotsNcrNodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Trait as GdbotsNcrNodeV1Trait;
use Gdbots\Schemas\Ncr\Mixin\Sluggable\SluggableV1 as GdbotsNcrSluggableV1;
use Gdbots\Schemas\Ncr\Mixin\Sluggable\SluggableV1Mixin as GdbotsNcrSluggableV1Mixin;
use Triniti\Schemas\Boost\Mixin\Sponsorable\SponsorableV1 as TrinitiBoostSponsorableV1;
use Triniti\Schemas\Boost\Mixin\Sponsorable\SponsorableV1Mixin as TrinitiBoostSponsorableV1Mixin;
use Triniti\Schemas\Common\Mixin\Advertising\AdvertisingV1 as TrinitiCommonAdvertisingV1;
use Triniti\Schemas\Common\Mixin\Advertising\AdvertisingV1Mixin as TrinitiCommonAdvertisingV1Mixin;
use Triniti\Schemas\Common\Mixin\CustomCode\CustomCodeV1 as TrinitiCommonCustomCodeV1;
use Triniti\Schemas\Common\Mixin\CustomCode\CustomCodeV1Mixin as TrinitiCommonCustomCodeV1Mixin;
use Triniti\Schemas\Common\Mixin\Seo\SeoV1 as TrinitiCommonSeoV1;
use Triniti\Schemas\Common\Mixin\Seo\SeoV1Mixin as TrinitiCommonSeoV1Mixin;
use Triniti\Schemas\Common\Mixin\Themeable\ThemeableV1 as TrinitiCommonThemeableV1;
use Triniti\Schemas\Common\Mixin\Themeable\ThemeableV1Mixin as TrinitiCommonThemeableV1Mixin;
use Triniti\Schemas\Curator\Mixin\Teaserable\TeaserableV1 as TrinitiCuratorTeaserableV1;
use Triniti\Schemas\Curator\Mixin\Teaserable\TeaserableV1Mixin as TrinitiCuratorTeaserableV1Mixin;
use Triniti\Schemas\Taxonomy\Mixin\Channel\ChannelV1 as TrinitiTaxonomyChannelV1;
use Triniti\Schemas\Taxonomy\Mixin\Channel\ChannelV1Mixin as TrinitiTaxonomyChannelV1Mixin;
use Triniti\Schemas\Taxonomy\Mixin\Channel\ChannelV1Trait as TrinitiTaxonomyChannelV1Trait;
use Triniti\Schemas\Taxonomy\Mixin\Hashtaggable\HashtaggableV1 as TrinitiTaxonomyHashtaggableV1;
use Triniti\Schemas\Taxonomy\Mixin\Hashtaggable\HashtaggableV1Mixin as TrinitiTaxonomyHashtaggableV1Mixin;

final class ChannelV1 extends AbstractMessage implements
    Channel,
    GdbotsNcrNodeV1,
    TrinitiTaxonomyChannelV1,
    GdbotsCommonTaggableV1,
    GdbotsNcrSluggableV1,
    TrinitiBoostSponsorableV1,
    TrinitiCommonAdvertisingV1,
    TrinitiCommonCustomCodeV1,
    TrinitiCommonSeoV1,
    TrinitiCommonThemeableV1,
    TrinitiCuratorTeaserableV1,
    TrinitiTaxonomyHashtaggableV1
{
    use GdbotsNcrNodeV1Trait;
    use TrinitiTaxonomyChannelV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:taxonomy:node:channel:1-0-0', __CLASS__,
            [],
            [
                GdbotsNcrNodeV1Mixin::create(),
                TrinitiTaxonomyChannelV1Mixin::create(),
                GdbotsCommonTaggableV1Mixin::create(),
                GdbotsNcrSluggableV1Mixin::create(),
                TrinitiBoostSponsorableV1Mixin::create(),
                TrinitiCommonAdvertisingV1Mixin::create(),
                TrinitiCommonCustomCodeV1Mixin::create(),
                TrinitiCommonSeoV1Mixin::create(),
                TrinitiCommonThemeableV1Mixin::create(),
                TrinitiCuratorTeaserableV1Mixin::create(),
                TrinitiTaxonomyHashtaggableV1Mixin::create(),
            ]
        );
    }
}
