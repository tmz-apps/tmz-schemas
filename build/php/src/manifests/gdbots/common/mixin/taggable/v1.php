<?php
declare(strict_types=1);

/**
 * DO NOT EDIT THIS FILE as it will be overwritten by the Pbj compiler.
 * @link https://github.com/gdbots/pbjc-php
 *
 * Returns an array of curies using mixin "gdbots:common:mixin:taggable:v1"
 * @link https://schemas.tmz.com/json-schema/gdbots/common/mixin/taggable/1-0-0.json#
 */

return [
    'gdbots:iam:command:grant-roles-to-app:v1',
    'gdbots:iam:command:grant-roles-to-user:v1',
    'gdbots:iam:command:revoke-roles-from-app:v1',
    'gdbots:iam:command:revoke-roles-from-user:v1',
    'gdbots:iam:event:app-roles-granted:v1',
    'gdbots:iam:event:app-roles-revoked:v1',
    'gdbots:iam:event:user-roles-granted:v1',
    'gdbots:iam:event:user-roles-revoked:v1',
    'gdbots:ncr:command:create-edge:v1',
    'gdbots:ncr:command:create-node:v1',
    'gdbots:ncr:command:delete-edge:v1',
    'gdbots:ncr:command:delete-node:v1',
    'gdbots:ncr:command:expire-node:v1',
    'gdbots:ncr:command:lock-node:v1',
    'gdbots:ncr:command:mark-node-as-draft:v1',
    'gdbots:ncr:command:mark-node-as-pending:v1',
    'gdbots:ncr:command:publish-node:v1',
    'gdbots:ncr:command:rename-node:v1',
    'gdbots:ncr:command:unlock-node:v1',
    'gdbots:ncr:command:unpublish-node:v1',
    'gdbots:ncr:command:update-node-labels:v1',
    'gdbots:ncr:command:update-node-tags:v1',
    'gdbots:ncr:command:update-node:v1',
    'gdbots:ncr:event:edge-created:v1',
    'gdbots:ncr:event:edge-deleted:v1',
    'gdbots:ncr:event:node-created:v1',
    'gdbots:ncr:event:node-deleted:v1',
    'gdbots:ncr:event:node-expired:v1',
    'gdbots:ncr:event:node-labels-updated:v1',
    'gdbots:ncr:event:node-locked:v1',
    'gdbots:ncr:event:node-marked-as-draft:v1',
    'gdbots:ncr:event:node-marked-as-pending:v1',
    'gdbots:ncr:event:node-published:v1',
    'gdbots:ncr:event:node-renamed:v1',
    'gdbots:ncr:event:node-scheduled:v1',
    'gdbots:ncr:event:node-tags-updated:v1',
    'gdbots:ncr:event:node-unlocked:v1',
    'gdbots:ncr:event:node-unpublished:v1',
    'gdbots:ncr:event:node-updated:v1',
    'tmz:apollo:node:poll:v1',
    'tmz:boost:node:sponsor:v1',
    'tmz:canvas:node:page:v1',
    'tmz:curator:node:ad-widget:v1',
    'tmz:curator:node:alert-widget:v1',
    'tmz:curator:node:article-teaser:v1',
    'tmz:curator:node:asset-teaser:v1',
    'tmz:curator:node:blogroll-widget:v1',
    'tmz:curator:node:carousel-widget:v1',
    'tmz:curator:node:category-teaser:v1',
    'tmz:curator:node:channel-teaser:v1',
    'tmz:curator:node:code-widget:v1',
    'tmz:curator:node:gallery-teaser:v1',
    'tmz:curator:node:gallery-widget:v1',
    'tmz:curator:node:gallery:v1',
    'tmz:curator:node:gridler-widget:v1',
    'tmz:curator:node:hero-bar-widget:v1',
    'tmz:curator:node:link-teaser:v1',
    'tmz:curator:node:media-list-widget:v1',
    'tmz:curator:node:page-teaser:v1',
    'tmz:curator:node:person-teaser:v1',
    'tmz:curator:node:playlist-widget:v1',
    'tmz:curator:node:poll-teaser:v1',
    'tmz:curator:node:promotion:v1',
    'tmz:curator:node:showtimes-widget:v1',
    'tmz:curator:node:slider-widget:v1',
    'tmz:curator:node:spotlight-widget:v1',
    'tmz:curator:node:tag-cloud-widget:v1',
    'tmz:curator:node:tetris-widget:v1',
    'tmz:curator:node:timeline-teaser:v1',
    'tmz:curator:node:timeline:v1',
    'tmz:curator:node:video-teaser:v1',
    'tmz:curator:node:youtube-video-teaser:v1',
    'tmz:dam:node:archive-asset:v1',
    'tmz:dam:node:audio-asset:v1',
    'tmz:dam:node:code-asset:v1',
    'tmz:dam:node:document-asset:v1',
    'tmz:dam:node:image-asset:v1',
    'tmz:dam:node:unknown-asset:v1',
    'tmz:dam:node:video-asset:v1',
    'tmz:iam:node:user:v1',
    'tmz:news:node:article:v1',
    'tmz:ovp:node:video:v1',
    'tmz:people:node:person:v1',
    'tmz:taxonomy:node:category:v1',
    'tmz:taxonomy:node:channel:v1',
    'triniti:apollo:command:add-reactions:v1',
    'triniti:apollo:command:cast-vote:v1',
    'triniti:apollo:event:reactions-added:v1',
    'triniti:apollo:event:vote-casted:v1',
    'triniti:news:command:sync-facebook-instant-article:v1',
    'triniti:news:event:facebook-instant-article-synced:v1',
    'triniti:notify::notifier-result:v1',
    'triniti:ovp.jwplayer:command:sync-media:v1',
    'triniti:ovp.jwplayer:event:media-synced:v1',
    'triniti:ovp.medialive:event:channel-started:v1',
    'triniti:ovp.medialive:event:channel-stopped:v1',
    'triniti:ovp:command:update-transcoding-status:v1',
    'triniti:ovp:command:update-transcription-status:v1',
    'triniti:ovp:event:transcoding-completed:v1',
    'triniti:ovp:event:transcoding-failed:v1',
    'triniti:ovp:event:transcoding-started:v1',
    'triniti:ovp:event:transcription-completed:v1',
    'triniti:ovp:event:transcription-failed:v1',
    'triniti:ovp:event:transcription-started:v1',
];
