<?php
// @link https://schemas.tmz.com/json-schema/tmz/dam/node/video-asset/1-0-1.json#
namespace Tmz\Schemas\Dam\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Common\Mixin\Taggable\TaggableV1 as GdbotsCommonTaggableV1;
use Gdbots\Schemas\Common\Mixin\Taggable\TaggableV1Mixin as GdbotsCommonTaggableV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Expirable\ExpirableV1 as GdbotsNcrExpirableV1;
use Gdbots\Schemas\Ncr\Mixin\Expirable\ExpirableV1Mixin as GdbotsNcrExpirableV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Indexed\IndexedV1 as GdbotsNcrIndexedV1;
use Gdbots\Schemas\Ncr\Mixin\Indexed\IndexedV1Mixin as GdbotsNcrIndexedV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1 as GdbotsNcrNodeV1;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin as GdbotsNcrNodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Trait as GdbotsNcrNodeV1Trait;
use Triniti\Schemas\Dam\Mixin\Asset\AssetV1 as TrinitiDamAssetV1;
use Triniti\Schemas\Dam\Mixin\Asset\AssetV1Mixin as TrinitiDamAssetV1Mixin;
use Triniti\Schemas\Dam\Mixin\VideoAsset\VideoAssetV1 as TrinitiDamVideoAssetV1;
use Triniti\Schemas\Dam\Mixin\VideoAsset\VideoAssetV1Mixin as TrinitiDamVideoAssetV1Mixin;
use Triniti\Schemas\Dam\Mixin\VideoAsset\VideoAssetV1Trait as TrinitiDamVideoAssetV1Trait;
use Triniti\Schemas\Ovp\Mixin\Transcodeable\TranscodeableV1 as TrinitiOvpTranscodeableV1;
use Triniti\Schemas\Ovp\Mixin\Transcodeable\TranscodeableV1Mixin as TrinitiOvpTranscodeableV1Mixin;
use Triniti\Schemas\Ovp\Mixin\Transcribable\TranscribableV1 as TrinitiOvpTranscribableV1;
use Triniti\Schemas\Ovp\Mixin\Transcribable\TranscribableV1Mixin as TrinitiOvpTranscribableV1Mixin;
use Triniti\Schemas\People\Mixin\HasPeople\HasPeopleV1 as TrinitiPeopleHasPeopleV1;
use Triniti\Schemas\People\Mixin\HasPeople\HasPeopleV1Mixin as TrinitiPeopleHasPeopleV1Mixin;
use Triniti\Schemas\Taxonomy\Mixin\Hashtaggable\HashtaggableV1 as TrinitiTaxonomyHashtaggableV1;
use Triniti\Schemas\Taxonomy\Mixin\Hashtaggable\HashtaggableV1Mixin as TrinitiTaxonomyHashtaggableV1Mixin;

final class VideoAssetV1 extends AbstractMessage implements
    VideoAsset,
    GdbotsNcrNodeV1,
    TrinitiDamAssetV1,
    TrinitiDamVideoAssetV1,
    GdbotsCommonTaggableV1,
    GdbotsNcrExpirableV1,
    GdbotsNcrIndexedV1,
    TrinitiOvpTranscodeableV1,
    TrinitiOvpTranscribableV1,
    TrinitiPeopleHasPeopleV1,
    TrinitiTaxonomyHashtaggableV1
{
    use GdbotsNcrNodeV1Trait;
    use TrinitiDamVideoAssetV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:dam:node:video-asset:1-0-1', __CLASS__,
            [],
            [
                GdbotsNcrNodeV1Mixin::create(),
                TrinitiDamAssetV1Mixin::create(),
                TrinitiDamVideoAssetV1Mixin::create(),
                GdbotsCommonTaggableV1Mixin::create(),
                GdbotsNcrExpirableV1Mixin::create(),
                GdbotsNcrIndexedV1Mixin::create(),
                TrinitiOvpTranscodeableV1Mixin::create(),
                TrinitiOvpTranscribableV1Mixin::create(),
                TrinitiPeopleHasPeopleV1Mixin::create(),
                TrinitiTaxonomyHashtaggableV1Mixin::create(),
            ]
        );
    }
}
