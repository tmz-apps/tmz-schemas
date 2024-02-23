<?php
declare(strict_types=1);

// @link https://schemas.tmz.com/json-schema/tmz/news/command/inspect-article-seo/1-0-0.json#
namespace Tmz\Schemas\News\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Enum\Format;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;

final class InspectArticleSeoV1 extends AbstractMessage
{
    const SCHEMA_ID = 'pbj:tmz:news:command:inspect-article-seo:1-0-0';
    const SCHEMA_CURIE = 'tmz:news:command:inspect-article-seo';
    const SCHEMA_CURIE_MAJOR = 'tmz:news:command:inspect-article-seo:v1';
    const MIXINS = [
      'triniti:sys:command:inspect-seo:v1',
      'triniti:sys:command:inspect-seo',
    ];

    use TrinitiSysInspectSeoV1Mixin;

    protected static function defineSchema(): Schema
    {
        return new Schema(self::SCHEMA_ID, __CLASS__,
            [
                Fb::create('node_ref', T\NodeRefType::create())
                    ->required()
                    ->build(),
                /*
                 * The search engines for which to inspect the node's SEO status, e.g. google, bing, baidu, etc.
                 * When not provided you should inspect for all search engines.
                 */
                Fb::create('search_engines', T\StringType::create())
                    ->asASet()
                    ->format(Format::SLUG)
                    ->build(),
            ],
            self::MIXINS
        );
    }
}
