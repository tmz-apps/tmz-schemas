# CHANGELOG


## v3.0.1
* Use `gdbots/schemas` v3.0.2
* Use `triniti/schemas` v3.0.3
* __Add Schemas:__
  * `tmz:apollo:node:reactions`


## v3.0.0
__BREAKING CHANGES__

* Require `php>=8.1`.
* Use node v14.18.2.
* Use `gdbots/schemas` v3.0.1
* Use `triniti/schemas` v3.0.2
* Use npm gdbots/pbj 3.x.
* Use new php builtin enum instead of custom enum classes.
* __Modify Schemas:__
  * `gdbots:ncr:mixin:search-nodes-request` patch revision `1-0-4`
    * Add `track_total_hits` boolean field.
  * `gdbots:ncr:request:get-node-history-request` patch revision `1-0-1`
    * Add `topic` string field with pattern `^[\w\.-]+$`.
    * Add `partition` string field with pattern `^[\w\.-]+$`.
    * Add `sub_partition` string field with pattern `^[\w\.-]+$`.
  * `gdbots:pbjx:mixin:search-events-request` patch revision `1-0-1`
    * Add `track_total_hits` boolean field.


## v2.0.2
* Use `gdbots/schemas` v2.1.1
* Use `triniti/schemas` v2.0.3
* __Add Schemas:__
  * `tmz:iam:node:twitter-app`
  * `tmz:notify:node:twitter-notification`
* Remove all use of `gdbots:ncr:mixin:indexed:v1` as it is deprecated.


## v2.0.1
* Use `triniti/schemas` v2.0.2


## v2.0.0
* Use `gdbots/schemas` v2.1.0
* Use `triniti/schemas` v2.0.0


## v1.1.11
* Use `triniti/schemas` v1.1.12.


## v1.1.10
* Use `gdbots/schemas` v1.6.6.
* __Modify Schemas:__
  * `tmz:curator:node:gallery` patch revision `1-0-1`
    * Add mixin `gdbots:common:mixin:labelable:v1`
  * `tmz:news:node:article` patch revision `1-0-1`
    * Add mixin `gdbots:common:mixin:labelable:v1`
  * `tmz:ovp:node:video` patch revision `1-0-3`
    * Add `xumo_enabled` boolean field.
    * Add mixin `gdbots:common:mixin:labelable:v1`


## v1.1.9
* Use `triniti/schemas` v1.1.11.


## v1.1.8
* Use `triniti/schemas` v1.1.10.
* __Modify Schemas:__
  * `tmz:dam:node:video-asset` patch revision `1-0-1`
    * Add mixin `triniti:ovp:mixin:transcodeable:v1`
    * Add mixin `triniti:ovp:mixin:transcribable:v1`


## v1.1.7
* Use `gdbots/schemas` v1.6.5.
* Use `triniti/schemas` v1.1.8.
* __Add Schemas:__
  * `tmz:canvas:block:tumblr-post-block`


## v1.1.6
* Use `gdbots/schemas` v1.6.4.
* Use `triniti/schemas` v1.1.7.


## v1.1.5
* Use `triniti/schemas` v1.1.6.
* __Modify Schemas:__
  * `tmz:ovp:node:video` patch revision `1-0-2`
    * Add mixin `triniti:ovp.jwplayer:mixin:has-media:v1`


## v1.1.4
* Use `triniti/schemas` v1.1.5.


## v1.1.3
* Use `gdbots/schemas` v1.6.3.
* Use `triniti/schemas` v1.1.4.


## v1.1.2
* Use `gdbots/schemas` v1.6.2.
* Use `triniti/schemas` v1.1.3.
* __Modify Schemas:__
  * `tmz:ovp:node:video` patch revision `1-0-1`
    * Add mixin `triniti:ovp.medialive:mixin:has-channel:v1`


## v1.1.1
* Use `triniti/schemas` v1.1.2.
* __Add Schemas:__
  * `tmz:canvas:block:spotify-embed-block`
  * `tmz:canvas:block:tiktok-embed-block`


## v1.1.0
* Use `gdbots/schemas` v1.6.0.
* Use `triniti/schemas` v1.1.0.


## v1.0.7
* __Modify Schemas:__
  * `tmz:canvas:block:image-block` patch revision `1-0-1`
    * Add mixin `triniti:common:mixin:themeable:v1`


## v1.0.6
* Use `triniti/schemas` v1.0.7.
* __Add Schemas:__
  * `tmz:canvas:block:divider-block`
  * `tmz:curator:command:remove-teaser-slotting`
  * `tmz:curator:event:teaser-slotting-removed`
  * `tmz:curator:node:asset-teaser`


## v1.0.5
* Use `triniti/schemas` v1.0.5.


## v1.0.4
* Use `triniti/schemas` v1.0.4.


## v1.0.3
* Use `gdbots/schemas` v1.5.13.
* Use `triniti/schemas` v1.0.3.


## v1.0.2
* Use `triniti/schemas` v1.0.2.
* __Add Schemas:__
  * `tmz:curator:command:update-gallery-image-count`
  * `tmz:curator:event:gallery-image-count-updated`


## v1.0.1
* Use `triniti/schemas` v1.0.1.


## v1.0.0
* Peg stable version.


## v0.7.9
* Use `triniti/schemas` v0.15.7.


## v0.7.8
* Use `gdbots/schemas` v1.5.12.
* Use `triniti/schemas` v0.15.6.


## v0.7.7
* Use `gdbots/schemas` v1.5.11.
* Use `triniti/schemas` v0.15.5.


## v0.7.6
* Use `triniti/schemas` v0.15.4.


## v0.7.5
* Use `triniti/schemas` v0.15.3.


## v0.7.4
* Use `gdbots/schemas` v1.5.10.
* Use `triniti/schemas` v0.15.2.


## v0.7.3
* Use `gdbots/pbjc` v0.4.0 with optimized manifest for php.


## v0.7.2
* Use `gdbots/schemas` v1.5.9.


## v0.7.1
* Use `gdbots/schemas` v1.5.8.
* Use `triniti/schemas` v0.15.1.


## v0.7.0
* Use `triniti/schemas` v0.15.0.


## v0.6.0
* Use `triniti/schemas` v0.14.0.


## v0.5.3
* Use `triniti/schemas` v0.13.2.


## v0.5.2
* Use `triniti/schemas` v0.13.1.


## v0.5.1
* __Add Schemas (for real this time):__
  * `tmz:news:command:collect-article-stats`
  * `tmz:news:event:article-stats-collected`


## v0.5.0
__BREAKING CHANGES__

* Use `triniti/schemas` v0.13.0.


## v0.4.6
* Use `triniti/schemas` v0.12.3.
* __Add Schemas:__
  * `tmz:news:command:collect-article-stats`
  * `tmz:news:event:article-stats-collected`


## v0.4.5
* Use `triniti/schemas` v0.12.2.


## v0.4.4
* Use `triniti/schemas` v0.12.1.


## v0.4.3
* Use `triniti/schemas` v0.12.0.
* __Add Schemas:__
  * `tmz:apollo:node:poll-stats`
  * `tmz:news:node:article-stats`


## v0.4.2
* Use `triniti/schemas` v0.11.2.
* __Add Schemas:__
  * `tmz:curator:node:alert-widget`
  * `tmz:curator:node:gallery-widget`
  * `tmz:curator:node:playlist-widget`
  * `tmz:news:command:remove-article-slotting`
  * `tmz:news:event:apple-news-article-synced`
  * `tmz:news:event:article-slotting-removed`


## v0.4.1
* Use `triniti/schemas` v0.11.1.
* __Add Schemas:__
  * `tmz:canvas:block:spotify-track-block`


## v0.4.0
__BREAKING CHANGES__

* Use `triniti/schemas` v0.11.0.
* __Add Schemas:__
  * `tmz:curator:node:ad-widget`
  * `tmz:curator:node:media-list-widget`


## v0.3.0
__BREAKING CHANGES__

* Use `triniti/schemas` v0.10.0.
* __Add Schemas:__
  * `tmz:curator:node:showtimes-widget`
  * `tmz:curator:node:spotlight-widget`
* __Delete Schemas:__
  * `tmz:curator:node:card-widget`


## v0.2.0
__BREAKING CHANGES__

* Use `triniti/schemas` v0.9.0.
* __Add Schemas:__
  * `tmz:curator:node:card-widget`
  * `tmz:curator:node:code-widget`
  * `tmz:curator:node:hero-bar-widget`
  * `tmz:curator:node:slider-widget`
  * `tmz:curator:node:tag-cloud-widget`
  * `tmz:curator:request:render-promotion-request`
  * `tmz:curator:request:render-promotion-response`
  * `tmz:curator:request:render-widget-request`
  * `tmz:curator:request:render-widget-response`
* __Modify Schemas:__ _(no version changes as there is no production use yet)_
  * `tmz:curator:node:blogroll-widget`
    * Add mixin `triniti:curator:mixin:widget-has-search-request:v1`
  * `tmz:curator:node:carousel-widget`
    * Add mixin `triniti:curator:mixin:widget-has-search-request:v1`
  * `tmz:curator:node:gridler-widget`
    * Add mixin `triniti:curator:mixin:widget-has-search-request:v1`
  * `tmz:curator:node:tetris-widget`
    * Add mixin `triniti:curator:mixin:widget-has-search-request:v1`
  * `tmz:curator:request:search-galleries-request`
    * Add mixin `triniti:curator:mixin:widget-search-request:v1`
  * `tmz:curator:request:search-galleries-response`
    * Add mixin `triniti:curator:mixin:widget-search-response:v1`
  * `tmz:curator:request:search-teasers-response`
    * Add mixin `triniti:curator:mixin:widget-search-response:v1`
  * `tmz:news:request:search-articles-response`
    * Add mixin `triniti:curator:mixin:widget-search-response:v1`
  * `tmz:ovp:request:search-videos-request`
    * Add mixin `triniti:curator:mixin:widget-search-request:v1`
  * `tmz:ovp:request:search-videos-response`
    * Add mixin `triniti:curator:mixin:widget-search-response:v1`
* __Delete Schemas:__
  * `tmz:curator:node:card-deck-widget`


## v0.1.7
* Use `triniti/schemas` v0.8.0.
* __Modify Schemas:__ _(no version changes as there is no production use yet)_
  * `tmz:curator:request:search-teasers-request`
    * Add mixin `triniti:curator:mixin:widget-search-request:v1`
  * `tmz:dam:node:image-asset`
    * Add mixin `triniti:apollo:mixin:has-poll:v1`
  * `tmz:news:request:search-articles-request`
    * Add mixin `triniti:curator:mixin:widget-search-request:v1`


## v0.1.6
* Use `gdbots/schemas` v1.5.7 and `triniti/schemas` v0.7.0.
* __Delete Schemas:__
  * `tmz:canvas:block:pinterest-board-block`
  * `tmz:canvas:block:pinterest-profile-block`
  * `tmz:canvas:block:twitter-collection-timeline-block`
  * `tmz:canvas:block:twitter-follow-button-block`
  * `tmz:canvas:block:twitter-hashtag-button-block`
  * `tmz:canvas:block:twitter-likes-timeline-block`
  * `tmz:canvas:block:twitter-list-timeline-block`
  * `tmz:canvas:block:twitter-mention-button-block`
  * `tmz:canvas:block:twitter-moment-block`
  * `tmz:canvas:block:twitter-search-timeline-block`
  * `tmz:canvas:block:twitter-user-timeline-block`
  * `tmz:canvas:block:twitter-video-block`
  * `tmz:canvas:block:vevo-video-block`


## v0.1.5
* Use `gdbots/schemas` v1.5.6 and `triniti/schemas` v0.6.5.
* __Add Schemas:__
  * `tmz:curator:node:gridler-widget`
  * `tmz:curator:node:tetris-widget`


## v0.1.4
* Use `gdbots/schemas` v1.5.5 and `triniti/schemas` v0.6.4.
* __Modify Schemas:__ _(no version changes as there is no production use yet)_
  * `tmz:ovp:node:video`
    * Remove `launch_quote` string field.


## v0.1.3
* __Add Schemas:__
  * `tmz:curator:command:sync-teaser`


## v0.1.2
* __Add Schemas:__
  * `tmz:sys:commmand:create-flagset`
  * `tmz:sys:commmand:delete-flagset`
  * `tmz:sys:commmand:update-flagset`
  * `tmz:sys:event:flagset-created`
  * `tmz:sys:event:flagset-deleted`
  * `tmz:sys:event:flagset-updated`
  * `tmz:sys:node:flagset`
  * `tmz:sys:request:get-flagset-history-request`
  * `tmz:sys:request:get-flagset-history-response`
  * `tmz:sys:request:get-flagset-request`
  * `tmz:sys:request:get-flagset-response`
  * `tmz:sys:request:list-all-flagsets-request`
  * `tmz:sys:request:list-all-flagsets-response`
* __Modify Schemas:__ _(no version changes as there is no production use yet)_
  * `tmz:canvas:node:page`
    * Add mixin `triniti:sys:mixin:vanity-urlable:v1`
  * `tmz:sys:request:get-redirect-response`
    * Add mixin `triniti:sys:mixin:get-redirect-response:v1`


## v0.1.1
* Re-publish to npm now that it's separated from monorepo.  We will now publish new npm tags on each update.


## v0.1.0
* __Add Schemas:__
  * __tmz:apollo__
    * `tmz:apollo::poll-answer`
    * `tmz:apollo:command:cast-vote`
    * `tmz:apollo:command:create-poll`
    * `tmz:apollo:command:delete-poll`
    * `tmz:apollo:command:expire-poll`
    * `tmz:apollo:command:mark-poll-as-draft`
    * `tmz:apollo:command:mark-poll-as-pending`
    * `tmz:apollo:command:publish-poll`
    * `tmz:apollo:command:unpublish-poll`
    * `tmz:apollo:command:update-poll`
    * `tmz:apollo:event:poll-created`
    * `tmz:apollo:event:poll-deleted`
    * `tmz:apollo:event:poll-expired`
    * `tmz:apollo:event:poll-marked-as-draft`
    * `tmz:apollo:event:poll-marked-as-pending`
    * `tmz:apollo:event:poll-published`
    * `tmz:apollo:event:poll-scheduled`
    * `tmz:apollo:event:poll-unpublished`
    * `tmz:apollo:event:poll-updated`
    * `tmz:apollo:event:vote-casted`
    * `tmz:apollo:node:poll`
    * `tmz:apollo:request:get-poll-history-request`
    * `tmz:apollo:request:get-poll-history-response`
    * `tmz:apollo:request:get-poll-request`
    * `tmz:apollo:request:get-poll-response`
    * `tmz:apollo:request:search-polls-request`
    * `tmz:apollo:request:search-polls-response`
  * __tmz:boost__
    * `tmz:boost:command:create-sponsor`
    * `tmz:boost:command:delete-sponsor`
    * `tmz:boost:command:expire-sponsor`
    * `tmz:boost:command:mark-sponsor-as-draft`
    * `tmz:boost:command:mark-sponsor-as-pending`
    * `tmz:boost:command:publish-sponsor`
    * `tmz:boost:command:rename-sponsor`
    * `tmz:boost:command:unpublish-sponsor`
    * `tmz:boost:command:update-sponsor`
    * `tmz:boost:event:sponsor-created`
    * `tmz:boost:event:sponsor-deleted`
    * `tmz:boost:event:sponsor-expired`
    * `tmz:boost:event:sponsor-marked-as-draft`
    * `tmz:boost:event:sponsor-marked-as-pending`
    * `tmz:boost:event:sponsor-published`
    * `tmz:boost:event:sponsor-renamed`
    * `tmz:boost:event:sponsor-scheduled`
    * `tmz:boost:event:sponsor-unpublished`
    * `tmz:boost:event:sponsor-updated`
    * `tmz:boost:node:sponsor`
    * `tmz:boost:request:get-sponsor-history-request`
    * `tmz:boost:request:get-sponsor-history-response`
    * `tmz:boost:request:get-sponsor-request`
    * `tmz:boost:request:get-sponsor-response`
    * `tmz:boost:request:search-sponsors-request`
    * `tmz:boost:request:search-sponsors-response`
  * __tmz:canvas__
    * `tmz:canvas:block:article-block`
    * `tmz:canvas:block:audio-block`
    * `tmz:canvas:block:code-block`
    * `tmz:canvas:block:document-block`
    * `tmz:canvas:block:facebook-post-block`
    * `tmz:canvas:block:facebook-video-block`
    * `tmz:canvas:block:gallery-block`
    * `tmz:canvas:block:google-map-block`
    * `tmz:canvas:block:heading-block`
    * `tmz:canvas:block:iframe-block`
    * `tmz:canvas:block:image-block`
    * `tmz:canvas:block:imgur-post-block`
    * `tmz:canvas:block:instagram-media-block`
    * `tmz:canvas:block:page-break-block`
    * `tmz:canvas:block:pinterest-board-block`
    * `tmz:canvas:block:pinterest-pin-block`
    * `tmz:canvas:block:pinterest-profile-block`
    * `tmz:canvas:block:poll-block`
    * `tmz:canvas:block:poll-grid-block`
    * `tmz:canvas:block:quote-block`
    * `tmz:canvas:block:soundcloud-audio-block`
    * `tmz:canvas:block:text-block`
    * `tmz:canvas:block:twitter-collection-timeline-block`
    * `tmz:canvas:block:twitter-follow-button-block`
    * `tmz:canvas:block:twitter-hashtag-button-block`
    * `tmz:canvas:block:twitter-likes-timeline-block`
    * `tmz:canvas:block:twitter-list-timeline-block`
    * `tmz:canvas:block:twitter-mention-button-block`
    * `tmz:canvas:block:twitter-moment-block`
    * `tmz:canvas:block:twitter-search-timeline-block`
    * `tmz:canvas:block:twitter-tweet-block`
    * `tmz:canvas:block:twitter-user-timeline-block`
    * `tmz:canvas:block:twitter-video-block`
    * `tmz:canvas:block:vevo-video-block`
    * `tmz:canvas:block:video-block`
    * `tmz:canvas:block:vimeo-video-block`
    * `tmz:canvas:block:youtube-playlist-block`
    * `tmz:canvas:block:youtube-video-block`
    * `tmz:canvas:command:create-page`
    * `tmz:canvas:command:delete-page`
    * `tmz:canvas:command:expire-page`
    * `tmz:canvas:command:mark-page-as-draft`
    * `tmz:canvas:command:mark-page-as-pending`
    * `tmz:canvas:command:publish-page`
    * `tmz:canvas:command:rename-page`
    * `tmz:canvas:command:unpublish-page`
    * `tmz:canvas:command:update-page`
    * `tmz:canvas:event:page-created`
    * `tmz:canvas:event:page-deleted`
    * `tmz:canvas:event:page-expired`
    * `tmz:canvas:event:page-marked-as-draft`
    * `tmz:canvas:event:page-marked-as-pending`
    * `tmz:canvas:event:page-published`
    * `tmz:canvas:event:page-renamed`
    * `tmz:canvas:event:page-scheduled`
    * `tmz:canvas:event:page-unpublished`
    * `tmz:canvas:event:page-updated`
    * `tmz:canvas:node:page`
    * `tmz:canvas:request:get-page-history-request`
    * `tmz:canvas:request:get-page-history-response`
    * `tmz:canvas:request:get-page-request`
    * `tmz:canvas:request:get-page-response`
    * `tmz:canvas:request:search-pages-request`
    * `tmz:canvas:request:search-pages-response`
  * __tmz:curator__
    * `tmz:curator:command:create-gallery`
    * `tmz:curator:command:create-promotion`
    * `tmz:curator:command:create-teaser`
    * `tmz:curator:command:create-timeline`
    * `tmz:curator:command:create-widget`
    * `tmz:curator:command:delete-gallery`
    * `tmz:curator:command:delete-promotion`
    * `tmz:curator:command:delete-teaser`
    * `tmz:curator:command:delete-timeline`
    * `tmz:curator:command:delete-widget`
    * `tmz:curator:command:expire-gallery`
    * `tmz:curator:command:expire-promotion`
    * `tmz:curator:command:expire-teaser`
    * `tmz:curator:command:expire-timeline`
    * `tmz:curator:command:mark-gallery-as-draft`
    * `tmz:curator:command:mark-gallery-as-pending`
    * `tmz:curator:command:mark-promotion-as-draft`
    * `tmz:curator:command:mark-promotion-as-pending`
    * `tmz:curator:command:mark-teaser-as-draft`
    * `tmz:curator:command:mark-teaser-as-pending`
    * `tmz:curator:command:mark-timeline-as-draft`
    * `tmz:curator:command:mark-timeline-as-pending`
    * `tmz:curator:command:publish-gallery`
    * `tmz:curator:command:publish-promotion`
    * `tmz:curator:command:publish-teaser`
    * `tmz:curator:command:publish-timeline`
    * `tmz:curator:command:rename-gallery`
    * `tmz:curator:command:rename-timeline`
    * `tmz:curator:command:unpublish-gallery`
    * `tmz:curator:command:unpublish-promotion`
    * `tmz:curator:command:unpublish-teaser`
    * `tmz:curator:command:unpublish-timeline`
    * `tmz:curator:command:update-gallery`
    * `tmz:curator:command:update-promotion`
    * `tmz:curator:command:update-teaser`
    * `tmz:curator:command:update-timeline`
    * `tmz:curator:command:update-widget`
    * `tmz:curator:event:gallery-created`
    * `tmz:curator:event:gallery-deleted`
    * `tmz:curator:event:gallery-expired`
    * `tmz:curator:event:gallery-marked-as-draft`
    * `tmz:curator:event:gallery-marked-as-pending`
    * `tmz:curator:event:gallery-published`
    * `tmz:curator:event:gallery-renamed`
    * `tmz:curator:event:gallery-scheduled`
    * `tmz:curator:event:gallery-unpublished`
    * `tmz:curator:event:gallery-updated`
    * `tmz:curator:event:promotion-created`
    * `tmz:curator:event:promotion-deleted`
    * `tmz:curator:event:promotion-expired`
    * `tmz:curator:event:promotion-marked-as-draft`
    * `tmz:curator:event:promotion-marked-as-pending`
    * `tmz:curator:event:promotion-published`
    * `tmz:curator:event:promotion-scheduled`
    * `tmz:curator:event:promotion-unpublished`
    * `tmz:curator:event:promotion-updated`
    * `tmz:curator:event:teaser-created`
    * `tmz:curator:event:teaser-deleted`
    * `tmz:curator:event:teaser-expired`
    * `tmz:curator:event:teaser-marked-as-draft`
    * `tmz:curator:event:teaser-marked-as-pending`
    * `tmz:curator:event:teaser-published`
    * `tmz:curator:event:teaser-scheduled`
    * `tmz:curator:event:teaser-unpublished`
    * `tmz:curator:event:teaser-updated`
    * `tmz:curator:event:timeline-created`
    * `tmz:curator:event:timeline-deleted`
    * `tmz:curator:event:timeline-expired`
    * `tmz:curator:event:timeline-marked-as-draft`
    * `tmz:curator:event:timeline-marked-as-pending`
    * `tmz:curator:event:timeline-published`
    * `tmz:curator:event:timeline-renamed`
    * `tmz:curator:event:timeline-scheduled`
    * `tmz:curator:event:timeline-unpublished`
    * `tmz:curator:event:timeline-updated`
    * `tmz:curator:event:widget-created`
    * `tmz:curator:event:widget-deleted`
    * `tmz:curator:event:widget-updated`
    * `tmz:curator:node:article-teaser`
    * `tmz:curator:node:blogroll-widget`
    * `tmz:curator:node:carousel-widget`
    * `tmz:curator:node:category-teaser`
    * `tmz:curator:node:channel-teaser`
    * `tmz:curator:node:gallery`
    * `tmz:curator:node:gallery-teaser`
    * `tmz:curator:node:link-teaser`
    * `tmz:curator:node:page-teaser`
    * `tmz:curator:node:person-teaser`
    * `tmz:curator:node:poll-teaser`
    * `tmz:curator:node:promotion`
    * `tmz:curator:node:timeline`
    * `tmz:curator:node:timeline-teaser`
    * `tmz:curator:node:video-teaser`
    * `tmz:curator:node:youtube-video-teaser`
    * `tmz:curator:request:get-gallery-history-request`
    * `tmz:curator:request:get-gallery-history-response`
    * `tmz:curator:request:get-gallery-request`
    * `tmz:curator:request:get-gallery-response`
    * `tmz:curator:request:get-promotion-history-request`
    * `tmz:curator:request:get-promotion-history-response`
    * `tmz:curator:request:get-promotion-request`
    * `tmz:curator:request:get-promotion-response`
    * `tmz:curator:request:get-teaser-history-request`
    * `tmz:curator:request:get-teaser-history-response`
    * `tmz:curator:request:get-teaser-request`
    * `tmz:curator:request:get-teaser-response`
    * `tmz:curator:request:get-timeline-history-request`
    * `tmz:curator:request:get-timeline-history-response`
    * `tmz:curator:request:get-timeline-request`
    * `tmz:curator:request:get-timeline-response`
    * `tmz:curator:request:get-widget-history-request`
    * `tmz:curator:request:get-widget-history-response`
    * `tmz:curator:request:get-widget-request`
    * `tmz:curator:request:get-widget-response`
    * `tmz:curator:request:search-galleries-request`
    * `tmz:curator:request:search-galleries-response`
    * `tmz:curator:request:search-promotions-request`
    * `tmz:curator:request:search-promotions-response`
    * `tmz:curator:request:search-teasers-request`
    * `tmz:curator:request:search-teasers-response`
    * `tmz:curator:request:search-timelines-request`
    * `tmz:curator:request:search-timelines-response`
    * `tmz:curator:request:search-widgets-request`
    * `tmz:curator:request:search-widgets-response`
  * __tmz:dam__
    * `tmz:dam:command:create-asset`
    * `tmz:dam:command:delete-asset`
    * `tmz:dam:command:expire-asset`
    * `tmz:dam:command:link-assets`
    * `tmz:dam:command:patch-assets`
    * `tmz:dam:command:reorder-gallery-assets`
    * `tmz:dam:command:unlink-assets`
    * `tmz:dam:command:update-asset`
    * `tmz:dam:event:asset-created`
    * `tmz:dam:event:asset-deleted`
    * `tmz:dam:event:asset-expired`
    * `tmz:dam:event:asset-linked`
    * `tmz:dam:event:asset-patched`
    * `tmz:dam:event:asset-unlinked`
    * `tmz:dam:event:asset-updated`
    * `tmz:dam:event:gallery-asset-reordered`
    * `tmz:dam:node:archive-asset`
    * `tmz:dam:node:audio-asset`
    * `tmz:dam:node:code-asset`
    * `tmz:dam:node:document-asset`
    * `tmz:dam:node:image-asset`
    * `tmz:dam:node:unknown-asset`
    * `tmz:dam:node:video-asset`
    * `tmz:dam:request:get-asset-history-request`
    * `tmz:dam:request:get-asset-history-response`
    * `tmz:dam:request:get-asset-request`
    * `tmz:dam:request:get-asset-response`
    * `tmz:dam:request:get-upload-urls-request`
    * `tmz:dam:request:get-upload-urls-response`
    * `tmz:dam:request:search-assets-request`
    * `tmz:dam:request:search-assets-response`
  * __tmz:iam__
    * `tmz:iam:command:create-app`
    * `tmz:iam:command:create-role`
    * `tmz:iam:command:create-user`
    * `tmz:iam:command:delete-app`
    * `tmz:iam:command:delete-role`
    * `tmz:iam:command:delete-user`
    * `tmz:iam:command:grant-roles-to-app`
    * `tmz:iam:command:grant-roles-to-user`
    * `tmz:iam:command:revoke-roles-from-app`
    * `tmz:iam:command:revoke-roles-from-user`
    * `tmz:iam:command:update-app`
    * `tmz:iam:command:update-role`
    * `tmz:iam:command:update-user`
    * `tmz:iam:event:app-created`
    * `tmz:iam:event:app-deleted`
    * `tmz:iam:event:app-roles-granted`
    * `tmz:iam:event:app-roles-revoked`
    * `tmz:iam:event:app-updated`
    * `tmz:iam:event:role-created`
    * `tmz:iam:event:role-deleted`
    * `tmz:iam:event:role-updated`
    * `tmz:iam:event:user-created`
    * `tmz:iam:event:user-deleted`
    * `tmz:iam:event:user-roles-granted`
    * `tmz:iam:event:user-roles-revoked`
    * `tmz:iam:event:user-updated`
    * `tmz:iam:node:alexa-app`
    * `tmz:iam:node:android-app`
    * `tmz:iam:node:apple-news-app`
    * `tmz:iam:node:browser-app`
    * `tmz:iam:node:email-app`
    * `tmz:iam:node:ios-app`
    * `tmz:iam:node:role`
    * `tmz:iam:node:slack-app`
    * `tmz:iam:node:sms-app`
    * `tmz:iam:node:user`
    * `tmz:iam:request:get-all-apps-request`
    * `tmz:iam:request:get-all-apps-response`
    * `tmz:iam:request:get-app-history-request`
    * `tmz:iam:request:get-app-history-response`
    * `tmz:iam:request:get-app-request`
    * `tmz:iam:request:get-app-response`
    * `tmz:iam:request:get-role-history-request`
    * `tmz:iam:request:get-role-history-response`
    * `tmz:iam:request:get-role-request`
    * `tmz:iam:request:get-role-response`
    * `tmz:iam:request:get-user-history-request`
    * `tmz:iam:request:get-user-history-response`
    * `tmz:iam:request:get-user-request`
    * `tmz:iam:request:get-user-response`
    * `tmz:iam:request:list-all-roles-request`
    * `tmz:iam:request:list-all-roles-response`
    * `tmz:iam:request:search-users-request`
    * `tmz:iam:request:search-users-response`
  * __tmz:news__
    * `tmz:news:command:create-article`
    * `tmz:news:command:delete-article`
    * `tmz:news:command:expire-article`
    * `tmz:news:command:lock-article`
    * `tmz:news:command:mark-article-as-draft`
    * `tmz:news:command:mark-article-as-pending`
    * `tmz:news:command:publish-article`
    * `tmz:news:command:rename-article`
    * `tmz:news:command:unlock-article`
    * `tmz:news:command:unpublish-article`
    * `tmz:news:command:update-article`
    * `tmz:news:event:article-created`
    * `tmz:news:event:article-deleted`
    * `tmz:news:event:article-expired`
    * `tmz:news:event:article-locked`
    * `tmz:news:event:article-marked-as-draft`
    * `tmz:news:event:article-marked-as-pending`
    * `tmz:news:event:article-published`
    * `tmz:news:event:article-renamed`
    * `tmz:news:event:article-scheduled`
    * `tmz:news:event:article-unpublished`
    * `tmz:news:event:article-unlocked`
    * `tmz:news:event:article-updated`
    * `tmz:news:node:article`
    * `tmz:news:request:get-article-history-request`
    * `tmz:news:request:get-article-history-response`
    * `tmz:news:request:get-article-request`
    * `tmz:news:request:get-article-response`
    * `tmz:news:request:search-articles-request`
    * `tmz:news:request:search-articles-response`
  * __tmz:notify__
    * `tmz:notify:command:create-notification`
    * `tmz:notify:command:delete-notification`
    * `tmz:notify:command:update-notification`
    * `tmz:notify:event:notification-created`
    * `tmz:notify:event:notification-deleted`
    * `tmz:notify:event:notification-failed`
    * `tmz:notify:event:notification-sent`
    * `tmz:notify:event:notification-updated`
    * `tmz:notify:node:alexa-notification`
    * `tmz:notify:node:android-notification`
    * `tmz:notify:node:apple-news-notification`
    * `tmz:notify:node:browser-notification`
    * `tmz:notify:node:email-notification`
    * `tmz:notify:node:ios-notification`
    * `tmz:notify:node:slack-notification`
    * `tmz:notify:node:sms-notification`
    * `tmz:notify:request:get-notification-history-request`
    * `tmz:notify:request:get-notification-history-response`
    * `tmz:notify:request:get-notification-request`
    * `tmz:notify:request:get-notification-response`
    * `tmz:notify:request:search-notifications-request`
    * `tmz:notify:request:search-notifications-response`
  * __tmz:ovp__
    * `tmz:ovp:command:create-video`
    * `tmz:ovp:command:delete-video`
    * `tmz:ovp:command:expire-video`
    * `tmz:ovp:command:mark-video-as-draft`
    * `tmz:ovp:command:mark-video-as-pending`
    * `tmz:ovp:command:publish-video`
    * `tmz:ovp:command:rename-video`
    * `tmz:ovp:command:unpublish-video`
    * `tmz:ovp:command:update-video`
    * `tmz:ovp:event:video-created`
    * `tmz:ovp:event:video-deleted`
    * `tmz:ovp:event:video-expired`
    * `tmz:ovp:event:video-marked-as-draft`
    * `tmz:ovp:event:video-marked-as-pending`
    * `tmz:ovp:event:video-published`
    * `tmz:ovp:event:video-renamed`
    * `tmz:ovp:event:video-scheduled`
    * `tmz:ovp:event:video-unpublished`
    * `tmz:ovp:event:video-updated`
    * `tmz:ovp:node:video`
    * `tmz:ovp:request:get-video-history-request`
    * `tmz:ovp:request:get-video-history-response`
    * `tmz:ovp:request:get-video-request`
    * `tmz:ovp:request:get-video-response`
    * `tmz:ovp:request:search-videos-request`
    * `tmz:ovp:request:search-videos-response`
  * __tmz:people__
    * `tmz:people:command:create-person`
    * `tmz:people:command:delete-person`
    * `tmz:people:command:rename-person`
    * `tmz:people:command:update-person`
    * `tmz:people:event:person-created`
    * `tmz:people:event:person-deleted`
    * `tmz:people:event:person-renamed`
    * `tmz:people:event:person-updated`
    * `tmz:people:node:person`
    * `tmz:people:request:get-person-history-request`
    * `tmz:people:request:get-person-history-response`
    * `tmz:people:request:get-person-request`
    * `tmz:people:request:get-person-response`
    * `tmz:people:request:search-people-request`
    * `tmz:people:request:search-people-response`
  * __tmz:sys__
    * `tmz:sys:command:create-picklist`
    * `tmz:sys:command:create-redirect`
    * `tmz:sys:command:delete-picklist`
    * `tmz:sys:command:delete-redirect`
    * `tmz:sys:command:update-picklist`
    * `tmz:sys:command:update-redirect`
    * `tmz:sys:event:picklist-created`
    * `tmz:sys:event:picklist-deleted`
    * `tmz:sys:event:picklist-updated`
    * `tmz:sys:event:redirect-created`
    * `tmz:sys:event:redirect-deleted`
    * `tmz:sys:event:redirect-updated`
    * `tmz:sys:node:picklist`
    * `tmz:sys:node:redirect`
    * `tmz:sys:request:get-picklist-history-request`
    * `tmz:sys:request:get-picklist-history-response`
    * `tmz:sys:request:get-picklist-request`
    * `tmz:sys:request:get-picklist-response`
    * `tmz:sys:request:get-redirect-history-request`
    * `tmz:sys:request:get-redirect-history-response`
    * `tmz:sys:request:get-redirect-request`
    * `tmz:sys:request:get-redirect-response`
    * `tmz:sys:request:list-all-picklists-request`
    * `tmz:sys:request:list-all-picklists-response`
    * `tmz:sys:request:search-redirects-request`
    * `tmz:sys:request:search-redirects-response`
  * __tmz:taxonomy__
    * `tmz:taxonomy:command:create-category`
    * `tmz:taxonomy:command:create-channel`
    * `tmz:taxonomy:command:delete-category`
    * `tmz:taxonomy:command:delete-channel`
    * `tmz:taxonomy:command:rename-category`
    * `tmz:taxonomy:command:rename-channel`
    * `tmz:taxonomy:command:update-category`
    * `tmz:taxonomy:command:update-channel`
    * `tmz:taxonomy:event:category-created`
    * `tmz:taxonomy:event:category-deleted`
    * `tmz:taxonomy:event:category-renamed`
    * `tmz:taxonomy:event:category-updated`
    * `tmz:taxonomy:event:channel-created`
    * `tmz:taxonomy:event:channel-deleted`
    * `tmz:taxonomy:event:channel-renamed`
    * `tmz:taxonomy:event:channel-updated`
    * `tmz:taxonomy:node:category`
    * `tmz:taxonomy:node:channel`
    * `tmz:taxonomy:request:get-all-channels-request`
    * `tmz:taxonomy:request:get-all-channels-response`
    * `tmz:taxonomy:request:get-category-history-request`
    * `tmz:taxonomy:request:get-category-history-response`
    * `tmz:taxonomy:request:get-category-request`
    * `tmz:taxonomy:request:get-category-response`
    * `tmz:taxonomy:request:get-channel-history-request`
    * `tmz:taxonomy:request:get-channel-history-response`
    * `tmz:taxonomy:request:get-channel-request`
    * `tmz:taxonomy:request:get-channel-response`
    * `tmz:taxonomy:request:search-categories-request`
    * `tmz:taxonomy:request:search-categories-response`
    * `tmz:taxonomy:request:suggest-hashtags-request`
    * `tmz:taxonomy:request:suggest-hashtags-response`
