<?php
// @link http://schemas.tmz.com/json-schema/tmz/iam/node/sms-app/1-0-0.json#
namespace Tmz\Schemas\Iam\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\App\AppV1 as GdbotsIamAppV1;
use Gdbots\Schemas\Iam\Mixin\App\AppV1Mixin as GdbotsIamAppV1Mixin;
use Gdbots\Schemas\Iam\Mixin\SmsApp\SmsAppV1 as GdbotsIamSmsAppV1;
use Gdbots\Schemas\Iam\Mixin\SmsApp\SmsAppV1Mixin as GdbotsIamSmsAppV1Mixin;
use Gdbots\Schemas\Iam\Mixin\SmsApp\SmsAppV1Trait as GdbotsIamSmsAppV1Trait;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1 as GdbotsNcrNodeV1;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin as GdbotsNcrNodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Trait as GdbotsNcrNodeV1Trait;

final class SmsAppV1 extends AbstractMessage implements
    SmsApp,
    GdbotsNcrNodeV1,
    GdbotsIamAppV1,
    GdbotsIamSmsAppV1
{
    use GdbotsNcrNodeV1Trait;
    use GdbotsIamSmsAppV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:iam:node:sms-app:1-0-0', __CLASS__,
            [],
            [
                GdbotsNcrNodeV1Mixin::create(),
                GdbotsIamAppV1Mixin::create(),
                GdbotsIamSmsAppV1Mixin::create(),
            ]
        );
    }
}
