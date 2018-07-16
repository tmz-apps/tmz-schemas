<?php
// @link http://schemas.tmz.com/json-schema/tmz/iam/node/browser-app/1-0-0.json#
namespace Tmz\Schemas\Iam\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\App\AppV1 as GdbotsIamAppV1;
use Gdbots\Schemas\Iam\Mixin\App\AppV1Mixin as GdbotsIamAppV1Mixin;
use Gdbots\Schemas\Iam\Mixin\BrowserApp\BrowserAppV1 as GdbotsIamBrowserAppV1;
use Gdbots\Schemas\Iam\Mixin\BrowserApp\BrowserAppV1Mixin as GdbotsIamBrowserAppV1Mixin;
use Gdbots\Schemas\Iam\Mixin\BrowserApp\BrowserAppV1Trait as GdbotsIamBrowserAppV1Trait;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1 as GdbotsNcrNodeV1;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin as GdbotsNcrNodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Trait as GdbotsNcrNodeV1Trait;

final class BrowserAppV1 extends AbstractMessage implements
    BrowserApp,
    GdbotsNcrNodeV1,
    GdbotsIamAppV1,
    GdbotsIamBrowserAppV1
{
    use GdbotsNcrNodeV1Trait;
    use GdbotsIamBrowserAppV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:iam:node:browser-app:1-0-0', __CLASS__,
            [],
            [
                GdbotsNcrNodeV1Mixin::create(),
                GdbotsIamAppV1Mixin::create(),
                GdbotsIamBrowserAppV1Mixin::create(),
            ]
        );
    }
}
