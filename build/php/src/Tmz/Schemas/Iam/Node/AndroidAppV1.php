<?php
// @link https://schemas.tmz.com/json-schema/tmz/iam/node/android-app/1-0-0.json#
namespace Tmz\Schemas\Iam\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\AndroidApp\AndroidAppV1 as GdbotsIamAndroidAppV1;
use Gdbots\Schemas\Iam\Mixin\AndroidApp\AndroidAppV1Mixin as GdbotsIamAndroidAppV1Mixin;
use Gdbots\Schemas\Iam\Mixin\AndroidApp\AndroidAppV1Trait as GdbotsIamAndroidAppV1Trait;
use Gdbots\Schemas\Iam\Mixin\App\AppV1 as GdbotsIamAppV1;
use Gdbots\Schemas\Iam\Mixin\App\AppV1Mixin as GdbotsIamAppV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1 as GdbotsNcrNodeV1;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin as GdbotsNcrNodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Trait as GdbotsNcrNodeV1Trait;

final class AndroidAppV1 extends AbstractMessage implements
    AndroidApp,
    GdbotsNcrNodeV1,
    GdbotsIamAppV1,
    GdbotsIamAndroidAppV1
{
    use GdbotsNcrNodeV1Trait;
    use GdbotsIamAndroidAppV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:iam:node:android-app:1-0-0', __CLASS__,
            [],
            [
                GdbotsNcrNodeV1Mixin::create(),
                GdbotsIamAppV1Mixin::create(),
                GdbotsIamAndroidAppV1Mixin::create(),
            ]
        );
    }
}
