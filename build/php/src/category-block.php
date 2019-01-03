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
    'tmz:canvas:block:article-block' => 'Tmz\Schemas\Canvas\Block\ArticleBlockV1',
    'tmz:canvas:block:audio-block' => 'Tmz\Schemas\Canvas\Block\AudioBlockV1',
    'tmz:canvas:block:code-block' => 'Tmz\Schemas\Canvas\Block\CodeBlockV1',
    'tmz:canvas:block:document-block' => 'Tmz\Schemas\Canvas\Block\DocumentBlockV1',
    'tmz:canvas:block:facebook-post-block' => 'Tmz\Schemas\Canvas\Block\FacebookPostBlockV1',
    'tmz:canvas:block:facebook-video-block' => 'Tmz\Schemas\Canvas\Block\FacebookVideoBlockV1',
    'tmz:canvas:block:gallery-block' => 'Tmz\Schemas\Canvas\Block\GalleryBlockV1',
    'tmz:canvas:block:google-map-block' => 'Tmz\Schemas\Canvas\Block\GoogleMapBlockV1',
    'tmz:canvas:block:heading-block' => 'Tmz\Schemas\Canvas\Block\HeadingBlockV1',
    'tmz:canvas:block:iframe-block' => 'Tmz\Schemas\Canvas\Block\IframeBlockV1',
    'tmz:canvas:block:image-block' => 'Tmz\Schemas\Canvas\Block\ImageBlockV1',
    'tmz:canvas:block:imgur-post-block' => 'Tmz\Schemas\Canvas\Block\ImgurPostBlockV1',
    'tmz:canvas:block:instagram-media-block' => 'Tmz\Schemas\Canvas\Block\InstagramMediaBlockV1',
    'tmz:canvas:block:page-break-block' => 'Tmz\Schemas\Canvas\Block\PageBreakBlockV1',
    'tmz:canvas:block:pinterest-pin-block' => 'Tmz\Schemas\Canvas\Block\PinterestPinBlockV1',
    'tmz:canvas:block:poll-block' => 'Tmz\Schemas\Canvas\Block\PollBlockV1',
    'tmz:canvas:block:poll-grid-block' => 'Tmz\Schemas\Canvas\Block\PollGridBlockV1',
    'tmz:canvas:block:quote-block' => 'Tmz\Schemas\Canvas\Block\QuoteBlockV1',
    'tmz:canvas:block:soundcloud-audio-block' => 'Tmz\Schemas\Canvas\Block\SoundcloudAudioBlockV1',
    'tmz:canvas:block:spotify-track-block' => 'Tmz\Schemas\Canvas\Block\SpotifyTrackBlockV1',
    'tmz:canvas:block:text-block' => 'Tmz\Schemas\Canvas\Block\TextBlockV1',
    'tmz:canvas:block:twitter-tweet-block' => 'Tmz\Schemas\Canvas\Block\TwitterTweetBlockV1',
    'tmz:canvas:block:video-block' => 'Tmz\Schemas\Canvas\Block\VideoBlockV1',
    'tmz:canvas:block:vimeo-video-block' => 'Tmz\Schemas\Canvas\Block\VimeoVideoBlockV1',
    'tmz:canvas:block:youtube-playlist-block' => 'Tmz\Schemas\Canvas\Block\YoutubePlaylistBlockV1',
    'tmz:canvas:block:youtube-video-block' => 'Tmz\Schemas\Canvas\Block\YoutubeVideoBlockV1',
]);
