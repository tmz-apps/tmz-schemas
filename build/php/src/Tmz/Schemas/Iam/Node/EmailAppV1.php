<?php
// @link http://schemas.tmz.com/json-schema/tmz/iam/node/email-app/1-0-0.json#
namespace Tmz\Schemas\Iam\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\App\AppV1 as GdbotsIamAppV1;
use Gdbots\Schemas\Iam\Mixin\App\AppV1Mixin as GdbotsIamAppV1Mixin;
use Gdbots\Schemas\Iam\Mixin\EmailApp\EmailAppV1 as GdbotsIamEmailAppV1;
use Gdbots\Schemas\Iam\Mixin\EmailApp\EmailAppV1Mixin as GdbotsIamEmailAppV1Mixin;
use Gdbots\Schemas\Iam\Mixin\EmailApp\EmailAppV1Trait as GdbotsIamEmailAppV1Trait;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1 as GdbotsNcrNodeV1;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin as GdbotsNcrNodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Trait as GdbotsNcrNodeV1Trait;

final class EmailAppV1 extends AbstractMessage implements
    EmailApp,
    GdbotsNcrNodeV1,
    GdbotsIamAppV1,
    GdbotsIamEmailAppV1
{
    use GdbotsNcrNodeV1Trait;
    use GdbotsIamEmailAppV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:iam:node:email-app:1-0-0', __CLASS__,
            [],
            [
                GdbotsNcrNodeV1Mixin::create(),
                GdbotsIamAppV1Mixin::create(),
                GdbotsIamEmailAppV1Mixin::create(),
            ]
        );
    }
}
