<?php
declare(strict_types=1);

// @link https://schemas.tmz.com/json-schema/tmz/apollo/poll-answer/1-0-0.json#
namespace Tmz\Schemas\Apollo;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Enum\Format;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Triniti\Schemas\Apollo\Mixin\PollAnswer\PollAnswerV1Mixin as TrinitiApolloPollAnswerV1Mixin;

final class PollAnswerV1 extends AbstractMessage
{
    const SCHEMA_ID = 'pbj:tmz:apollo::poll-answer:1-0-0';
    const SCHEMA_CURIE = 'tmz:apollo::poll-answer';
    const SCHEMA_CURIE_MAJOR = 'tmz:apollo::poll-answer:v1';
    const MIXINS = [
      'triniti:apollo:mixin:poll-answer:v1',
      'triniti:apollo:mixin:poll-answer',
    ];

    use TrinitiApolloPollAnswerV1Mixin;

    protected static function defineSchema(): Schema
    {
        return new Schema(self::SCHEMA_ID, __CLASS__,
            [
                Fb::create('_id', T\UuidType::create())
                    ->required()
                    ->build(),
                Fb::create('title', T\StringType::create())
                    ->build(),
                Fb::create('url', T\TextType::create())
                    ->format(Format::URL())
                    ->build(),
                Fb::create('initial_votes', T\IntType::create())
                    ->build(),
            ],
            self::MIXINS
        );
    }
}
