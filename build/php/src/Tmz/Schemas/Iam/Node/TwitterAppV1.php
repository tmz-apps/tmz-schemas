<?php
// @link https://schemas.tmz.com/json-schema/tmz/iam/node/twitter-app/1-0-0.json#
namespace Tmz\Schemas\Iam\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\App\AppV1 as GdbotsIamAppV1;
use Gdbots\Schemas\Iam\Mixin\App\AppV1Mixin as GdbotsIamAppV1Mixin;
use Gdbots\Schemas\Iam\Mixin\TwitterApp\TwitterAppV1 as GdbotsIamTwitterAppV1;
use Gdbots\Schemas\Iam\Mixin\TwitterApp\TwitterAppV1Mixin as GdbotsIamTwitterAppV1Mixin;
use Gdbots\Schemas\Iam\Mixin\TwitterApp\TwitterAppV1Trait as GdbotsIamTwitterAppV1Trait;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1 as GdbotsNcrNodeV1;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin as GdbotsNcrNodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Trait as GdbotsNcrNodeV1Trait;

final class TwitterAppV1 extends AbstractMessage implements
    TwitterApp,
    GdbotsNcrNodeV1,
    GdbotsIamAppV1,
    GdbotsIamTwitterAppV1
{
    use GdbotsNcrNodeV1Trait;
    use GdbotsIamTwitterAppV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:iam:node:twitter-app:1-0-0', __CLASS__,
            [],
            [
                GdbotsNcrNodeV1Mixin::create(),
                GdbotsIamAppV1Mixin::create(),
                GdbotsIamTwitterAppV1Mixin::create(),
            ]
        );
    }
}
