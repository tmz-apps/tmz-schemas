<?php
// @link http://schemas.tmz.com/json-schema/tmz/iam/node/alexa-app/1-0-0.json#
namespace Tmz\Schemas\Iam\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\AlexaApp\AlexaAppV1 as GdbotsIamAlexaAppV1;
use Gdbots\Schemas\Iam\Mixin\AlexaApp\AlexaAppV1Mixin as GdbotsIamAlexaAppV1Mixin;
use Gdbots\Schemas\Iam\Mixin\AlexaApp\AlexaAppV1Trait as GdbotsIamAlexaAppV1Trait;
use Gdbots\Schemas\Iam\Mixin\App\AppV1 as GdbotsIamAppV1;
use Gdbots\Schemas\Iam\Mixin\App\AppV1Mixin as GdbotsIamAppV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1 as GdbotsNcrNodeV1;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin as GdbotsNcrNodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Trait as GdbotsNcrNodeV1Trait;

final class AlexaAppV1 extends AbstractMessage implements
    AlexaApp,
    GdbotsNcrNodeV1,
    GdbotsIamAppV1,
    GdbotsIamAlexaAppV1
{
    use GdbotsNcrNodeV1Trait;
    use GdbotsIamAlexaAppV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:iam:node:alexa-app:1-0-0', __CLASS__,
            [],
            [
                GdbotsNcrNodeV1Mixin::create(),
                GdbotsIamAppV1Mixin::create(),
                GdbotsIamAlexaAppV1Mixin::create(),
            ]
        );
    }
}
