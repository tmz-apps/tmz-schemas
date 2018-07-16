<?php
// @link http://schemas.tmz.com/json-schema/tmz/dam/request/get-upload-urls-response/1-0-0.json#
namespace Tmz\Schemas\Dam\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1 as GdbotsPbjxResponseV1;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Mixin as GdbotsPbjxResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Trait as GdbotsPbjxResponseV1Trait;
use Triniti\Schemas\Dam\Mixin\GetUploadUrlsResponse\GetUploadUrlsResponseV1 as TrinitiDamGetUploadUrlsResponseV1;
use Triniti\Schemas\Dam\Mixin\GetUploadUrlsResponse\GetUploadUrlsResponseV1Mixin as TrinitiDamGetUploadUrlsResponseV1Mixin;

final class GetUploadUrlsResponseV1 extends AbstractMessage implements
    GetUploadUrlsResponse,
    GdbotsPbjxResponseV1,
    TrinitiDamGetUploadUrlsResponseV1
{
    use GdbotsPbjxResponseV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:tmz:dam:request:get-upload-urls-response:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxResponseV1Mixin::create(),
                TrinitiDamGetUploadUrlsResponseV1Mixin::create(),
            ]
        );
    }
}
