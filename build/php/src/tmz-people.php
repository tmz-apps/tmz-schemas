<?php
/**
 * DO NOT EDIT THIS FILE as it will be overwritten by the Pbj compiler.
 * @link https://github.com/gdbots/pbjc-php
 *
 * Registers all of the pbj schemas with the MessageResolver.
 *
 * @link https://schemas.tmz.com/
 */

\Gdbots\Pbj\MessageResolver::registerMap([
    'tmz:people:command:create-person' => 'Tmz\Schemas\People\Command\CreatePersonV1',
    'tmz:people:command:delete-person' => 'Tmz\Schemas\People\Command\DeletePersonV1',
    'tmz:people:command:rename-person' => 'Tmz\Schemas\People\Command\RenamePersonV1',
    'tmz:people:command:update-person' => 'Tmz\Schemas\People\Command\UpdatePersonV1',
    'tmz:people:event:person-created' => 'Tmz\Schemas\People\Event\PersonCreatedV1',
    'tmz:people:event:person-deleted' => 'Tmz\Schemas\People\Event\PersonDeletedV1',
    'tmz:people:event:person-renamed' => 'Tmz\Schemas\People\Event\PersonRenamedV1',
    'tmz:people:event:person-updated' => 'Tmz\Schemas\People\Event\PersonUpdatedV1',
    'tmz:people:node:person' => 'Tmz\Schemas\People\Node\PersonV1',
    'tmz:people:request:get-person-history-request' => 'Tmz\Schemas\People\Request\GetPersonHistoryRequestV1',
    'tmz:people:request:get-person-history-response' => 'Tmz\Schemas\People\Request\GetPersonHistoryResponseV1',
    'tmz:people:request:get-person-request' => 'Tmz\Schemas\People\Request\GetPersonRequestV1',
    'tmz:people:request:get-person-response' => 'Tmz\Schemas\People\Request\GetPersonResponseV1',
    'tmz:people:request:search-people-request' => 'Tmz\Schemas\People\Request\SearchPeopleRequestV1',
    'tmz:people:request:search-people-response' => 'Tmz\Schemas\People\Request\SearchPeopleResponseV1',
]);
