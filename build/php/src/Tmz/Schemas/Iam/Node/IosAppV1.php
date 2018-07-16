<?php
// @link http://schemas.tmz.com/json-schema/tmz/iam/node/ios-app/1-0-0.json#
namespace Tmz\Schemas\Iam\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\App\AppV1 as GdbotsIamAppV1;
use Gdbots\Schemas\Iam\Mixin\App\AppV1Mixin as GdbotsIamAppV1Mixin;
use Gdbots\Schemas\Iam\Mixin\IosApp\IosAppV1 as GdbotsIamIosAppV1;
use Gdbots\Schemas\Iam\Mixin\IosApp\IosAppV1Mixin as GdbotsIamIosAppV1Mixin;
use Gdbots\Schemas\Iam\Mixin\IosApp\IosAppV1Trait as GdbotsIamIosAppV1Trait;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1 as GdbotsNcrNodeV1;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin as GdbotsNcrNodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Trait as GdbotsNcrNodeV1Trait;

final class IosAppV1 extends AbstractMessage implements
    IosApp,
    GdbotsNcrNodeV1,
    GdbotsIamAppV1,
    GdbotsIamIosAppV1
{
    use GdbotsNcrNodeV1Trait;
    use GdbotsIamIosAppV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:iam:node:ios-app:1-0-0', __CLASS__,
            [],
            [
                GdbotsNcrNodeV1Mixin::create(),
                GdbotsIamAppV1Mixin::create(),
                GdbotsIamIosAppV1Mixin::create(),
            ]
        );
    }
}
