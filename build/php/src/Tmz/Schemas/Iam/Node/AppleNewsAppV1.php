<?php
// @link https://schemas.tmz.com/json-schema/tmz/iam/node/apple-news-app/1-0-0.json#
namespace Tmz\Schemas\Iam\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\App\AppV1 as GdbotsIamAppV1;
use Gdbots\Schemas\Iam\Mixin\App\AppV1Mixin as GdbotsIamAppV1Mixin;
use Gdbots\Schemas\Iam\Mixin\AppleNewsApp\AppleNewsAppV1 as GdbotsIamAppleNewsAppV1;
use Gdbots\Schemas\Iam\Mixin\AppleNewsApp\AppleNewsAppV1Mixin as GdbotsIamAppleNewsAppV1Mixin;
use Gdbots\Schemas\Iam\Mixin\AppleNewsApp\AppleNewsAppV1Trait as GdbotsIamAppleNewsAppV1Trait;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1 as GdbotsNcrNodeV1;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin as GdbotsNcrNodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Trait as GdbotsNcrNodeV1Trait;

final class AppleNewsAppV1 extends AbstractMessage implements
    AppleNewsApp,
    GdbotsNcrNodeV1,
    GdbotsIamAppV1,
    GdbotsIamAppleNewsAppV1
{
    use GdbotsNcrNodeV1Trait;
    use GdbotsIamAppleNewsAppV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:iam:node:apple-news-app:1-0-0', __CLASS__,
            [],
            [
                GdbotsNcrNodeV1Mixin::create(),
                GdbotsIamAppV1Mixin::create(),
                GdbotsIamAppleNewsAppV1Mixin::create(),
            ]
        );
    }
}
