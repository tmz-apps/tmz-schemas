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
    'tmz:apollo:node:poll' => 'Tmz\Schemas\Apollo\Node\PollV1',
    'tmz:boost:node:sponsor' => 'Tmz\Schemas\Boost\Node\SponsorV1',
    'tmz:canvas:node:page' => 'Tmz\Schemas\Canvas\Node\PageV1',
    'tmz:curator:node:ad-widget' => 'Tmz\Schemas\Curator\Node\AdWidgetV1',
    'tmz:curator:node:alert-widget' => 'Tmz\Schemas\Curator\Node\AlertWidgetV1',
    'tmz:curator:node:article-teaser' => 'Tmz\Schemas\Curator\Node\ArticleTeaserV1',
    'tmz:curator:node:blogroll-widget' => 'Tmz\Schemas\Curator\Node\BlogrollWidgetV1',
    'tmz:curator:node:carousel-widget' => 'Tmz\Schemas\Curator\Node\CarouselWidgetV1',
    'tmz:curator:node:category-teaser' => 'Tmz\Schemas\Curator\Node\CategoryTeaserV1',
    'tmz:curator:node:channel-teaser' => 'Tmz\Schemas\Curator\Node\ChannelTeaserV1',
    'tmz:curator:node:code-widget' => 'Tmz\Schemas\Curator\Node\CodeWidgetV1',
    'tmz:curator:node:gallery' => 'Tmz\Schemas\Curator\Node\GalleryV1',
    'tmz:curator:node:gallery-teaser' => 'Tmz\Schemas\Curator\Node\GalleryTeaserV1',
    'tmz:curator:node:gallery-widget' => 'Tmz\Schemas\Curator\Node\GalleryWidgetV1',
    'tmz:curator:node:gridler-widget' => 'Tmz\Schemas\Curator\Node\GridlerWidgetV1',
    'tmz:curator:node:hero-bar-widget' => 'Tmz\Schemas\Curator\Node\HeroBarWidgetV1',
    'tmz:curator:node:link-teaser' => 'Tmz\Schemas\Curator\Node\LinkTeaserV1',
    'tmz:curator:node:media-list-widget' => 'Tmz\Schemas\Curator\Node\MediaListWidgetV1',
    'tmz:curator:node:page-teaser' => 'Tmz\Schemas\Curator\Node\PageTeaserV1',
    'tmz:curator:node:person-teaser' => 'Tmz\Schemas\Curator\Node\PersonTeaserV1',
    'tmz:curator:node:playlist-widget' => 'Tmz\Schemas\Curator\Node\PlaylistWidgetV1',
    'tmz:curator:node:poll-teaser' => 'Tmz\Schemas\Curator\Node\PollTeaserV1',
    'tmz:curator:node:promotion' => 'Tmz\Schemas\Curator\Node\PromotionV1',
    'tmz:curator:node:showtimes-widget' => 'Tmz\Schemas\Curator\Node\ShowtimesWidgetV1',
    'tmz:curator:node:slider-widget' => 'Tmz\Schemas\Curator\Node\SliderWidgetV1',
    'tmz:curator:node:spotlight-widget' => 'Tmz\Schemas\Curator\Node\SpotlightWidgetV1',
    'tmz:curator:node:tag-cloud-widget' => 'Tmz\Schemas\Curator\Node\TagCloudWidgetV1',
    'tmz:curator:node:tetris-widget' => 'Tmz\Schemas\Curator\Node\TetrisWidgetV1',
    'tmz:curator:node:timeline' => 'Tmz\Schemas\Curator\Node\TimelineV1',
    'tmz:curator:node:timeline-teaser' => 'Tmz\Schemas\Curator\Node\TimelineTeaserV1',
    'tmz:curator:node:video-teaser' => 'Tmz\Schemas\Curator\Node\VideoTeaserV1',
    'tmz:curator:node:youtube-video-teaser' => 'Tmz\Schemas\Curator\Node\YoutubeVideoTeaserV1',
    'tmz:dam:node:archive-asset' => 'Tmz\Schemas\Dam\Node\ArchiveAssetV1',
    'tmz:dam:node:audio-asset' => 'Tmz\Schemas\Dam\Node\AudioAssetV1',
    'tmz:dam:node:code-asset' => 'Tmz\Schemas\Dam\Node\CodeAssetV1',
    'tmz:dam:node:document-asset' => 'Tmz\Schemas\Dam\Node\DocumentAssetV1',
    'tmz:dam:node:image-asset' => 'Tmz\Schemas\Dam\Node\ImageAssetV1',
    'tmz:dam:node:unknown-asset' => 'Tmz\Schemas\Dam\Node\UnknownAssetV1',
    'tmz:dam:node:video-asset' => 'Tmz\Schemas\Dam\Node\VideoAssetV1',
    'tmz:iam:node:alexa-app' => 'Tmz\Schemas\Iam\Node\AlexaAppV1',
    'tmz:iam:node:android-app' => 'Tmz\Schemas\Iam\Node\AndroidAppV1',
    'tmz:iam:node:apple-news-app' => 'Tmz\Schemas\Iam\Node\AppleNewsAppV1',
    'tmz:iam:node:browser-app' => 'Tmz\Schemas\Iam\Node\BrowserAppV1',
    'tmz:iam:node:email-app' => 'Tmz\Schemas\Iam\Node\EmailAppV1',
    'tmz:iam:node:ios-app' => 'Tmz\Schemas\Iam\Node\IosAppV1',
    'tmz:iam:node:role' => 'Tmz\Schemas\Iam\Node\RoleV1',
    'tmz:iam:node:slack-app' => 'Tmz\Schemas\Iam\Node\SlackAppV1',
    'tmz:iam:node:sms-app' => 'Tmz\Schemas\Iam\Node\SmsAppV1',
    'tmz:iam:node:user' => 'Tmz\Schemas\Iam\Node\UserV1',
    'tmz:news:node:article' => 'Tmz\Schemas\News\Node\ArticleV1',
    'tmz:notify:node:alexa-notification' => 'Tmz\Schemas\Notify\Node\AlexaNotificationV1',
    'tmz:notify:node:android-notification' => 'Tmz\Schemas\Notify\Node\AndroidNotificationV1',
    'tmz:notify:node:apple-news-notification' => 'Tmz\Schemas\Notify\Node\AppleNewsNotificationV1',
    'tmz:notify:node:browser-notification' => 'Tmz\Schemas\Notify\Node\BrowserNotificationV1',
    'tmz:notify:node:email-notification' => 'Tmz\Schemas\Notify\Node\EmailNotificationV1',
    'tmz:notify:node:ios-notification' => 'Tmz\Schemas\Notify\Node\IosNotificationV1',
    'tmz:notify:node:slack-notification' => 'Tmz\Schemas\Notify\Node\SlackNotificationV1',
    'tmz:notify:node:sms-notification' => 'Tmz\Schemas\Notify\Node\SmsNotificationV1',
    'tmz:ovp:node:video' => 'Tmz\Schemas\Ovp\Node\VideoV1',
    'tmz:people:node:person' => 'Tmz\Schemas\People\Node\PersonV1',
    'tmz:sys:node:flagset' => 'Tmz\Schemas\Sys\Node\FlagsetV1',
    'tmz:sys:node:picklist' => 'Tmz\Schemas\Sys\Node\PicklistV1',
    'tmz:sys:node:redirect' => 'Tmz\Schemas\Sys\Node\RedirectV1',
    'tmz:taxonomy:node:category' => 'Tmz\Schemas\Taxonomy\Node\CategoryV1',
    'tmz:taxonomy:node:channel' => 'Tmz\Schemas\Taxonomy\Node\ChannelV1',
]);
