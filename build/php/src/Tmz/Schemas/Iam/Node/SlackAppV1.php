<?php
// @link https://schemas.tmz.com/json-schema/tmz/iam/node/slack-app/1-0-0.json#
namespace Tmz\Schemas\Iam\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\App\AppV1 as GdbotsIamAppV1;
use Gdbots\Schemas\Iam\Mixin\App\AppV1Mixin as GdbotsIamAppV1Mixin;
use Gdbots\Schemas\Iam\Mixin\SlackApp\SlackAppV1 as GdbotsIamSlackAppV1;
use Gdbots\Schemas\Iam\Mixin\SlackApp\SlackAppV1Mixin as GdbotsIamSlackAppV1Mixin;
use Gdbots\Schemas\Iam\Mixin\SlackApp\SlackAppV1Trait as GdbotsIamSlackAppV1Trait;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1 as GdbotsNcrNodeV1;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin as GdbotsNcrNodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Trait as GdbotsNcrNodeV1Trait;

final class SlackAppV1 extends AbstractMessage implements
    SlackApp,
    GdbotsNcrNodeV1,
    GdbotsIamAppV1,
    GdbotsIamSlackAppV1
{
    use GdbotsNcrNodeV1Trait;
    use GdbotsIamSlackAppV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:iam:node:slack-app:1-0-0', __CLASS__,
            [],
            [
                GdbotsNcrNodeV1Mixin::create(),
                GdbotsIamAppV1Mixin::create(),
                GdbotsIamSlackAppV1Mixin::create(),
            ]
        );
    }
}
