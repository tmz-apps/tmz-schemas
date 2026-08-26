import test from 'tape';
import isFunction from 'lodash-es/isFunction.js';
import isPlainObject from 'lodash-es/isPlainObject.js';
import RequiredFieldNotSet from '@gdbots/pbj/exceptions/RequiredFieldNotSet.js';
import Message from '@gdbots/pbj/Message.js';
import MessageRef from '@gdbots/pbj/well-known/MessageRef.js';
import MessageResolver from '@gdbots/pbj/MessageResolver.js';
import '@tmz/schemas';
import Timeline from '../src/tmz/curator/node/TimelineV1.js';
import LiveBlogUpdateTeaser from '../src/tmz/curator/node/LiveBlogUpdateTeaserV1.js';
import SliderBlock from '../src/tmz/canvas/block/SliderBlockV1.js';
import SearchArticlesRequest from '../src/tmz/news/request/SearchArticlesRequestV1.js';
import SearchVideosRequest from '../src/tmz/ovp/request/SearchVideosRequestV1.js';
import SearchGalleriesRequest from '../src/tmz/curator/request/SearchGalleriesRequestV1.js';
import SearchTeasersRequest from '../src/tmz/curator/request/SearchTeasersRequestV1.js';


async function resolveImport(resolver) {
  const result = await (isFunction(resolver) ? resolver() : resolver);
  return result.default || result;
}

test('Can create all messages', async (t) => {
  for (const resolver of Object.values(MessageResolver.all())) {
    const message = (await resolveImport(resolver)).create();
    const classProto = message.schema().getClassProto();
    t.true(message instanceof Message, `Able to create [${classProto.schema().getId()}].`);

    try {
      const ref = message.generateMessageRef('tag');
      t.true(ref instanceof MessageRef, `Able to generateMessageRef for [${classProto.schema().getId()}].`);
      t.same(`${ref}`, `${message.generateMessageRef('tag')}`);
    } catch (e) {
      if (!(e instanceof RequiredFieldNotSet)) {
        // this is ok as some messages generate etags in their message
        // refs which serialize the message and cause this exception
        throw e;
      }
    }

    t.true(isPlainObject(message.getUriTemplateVars()), `getUriTemplateVars from [${classProto.schema().getId()}] is not an object.`);
  }

  t.end();
});

test('Timeline inherits live blog support from the Triniti timeline mixin', (t) => {
  const schema = Timeline.schema();
  const timeline = Timeline.create();

  t.equal(Timeline.SCHEMA_ID, 'pbj:tmz:curator:node:timeline:1-0-0');
  t.true(schema.hasMixin('triniti:curator:mixin:timeline:v1'));
  t.false(schema.hasMixin('triniti:curator:mixin:live-bloggable:v1'));
  t.true(schema.hasField('is_live_blog'));
  t.equal(timeline.get('is_live_blog'), false);

  t.end();
});

test('Live blog update teaser has body content and no target behavior', (t) => {
  const schema = LiveBlogUpdateTeaser.schema();
  const teaser = LiveBlogUpdateTeaser.create();
  const uriTemplateVars = teaser.getUriTemplateVars();

  t.true(schema.hasMixin('triniti:curator:mixin:teaser:v1'));
  t.true(schema.hasMixin('triniti:curator:mixin:live-blog-update-teaser:v1'));
  t.true(schema.hasMixin('triniti:canvas:mixin:has-blocks:v1'));
  t.true(schema.hasField('order_date'));
  t.true(schema.hasField('image_ref'));
  t.true(schema.hasField('timeline_ref'));
  t.true(schema.hasField('blocks'));
  t.false(schema.hasMixin('triniti:curator:mixin:teaser-has-target:v1'));
  t.false(schema.hasMixin('triniti:curator:mixin:link-teaser:v1'));
  t.false(schema.hasField('target_ref'));
  t.false(schema.hasField('link_url'));
  t.true(Object.prototype.hasOwnProperty.call(uriTemplateVars, '_id'));
  t.true(Object.prototype.hasOwnProperty.call(uriTemplateVars, 'timeline_ref'));
  t.equal(uriTemplateVars.timeline_ref, '');

  t.end();
});

test('Slider block is a canvas block that sources nodes from a search request', (t) => {
  const schema = SliderBlock.schema();
  const block = SliderBlock.create();

  t.equal(SliderBlock.SCHEMA_ID, 'pbj:tmz:canvas:block:slider-block:1-0-0');
  t.true(schema.hasMixin('triniti:canvas:mixin:block:v1'));
  t.true(schema.hasMixin('tmz:canvas:mixin:block-has-search-request:v1'));
  t.true(schema.hasField('etag'));
  t.true(schema.hasField('aside'));
  t.true(schema.hasField('search_request'));
  t.true(schema.hasField('prefetched_nodes'));
  t.true(schema.hasField('show_header'));
  t.true(schema.hasField('header_text'));
  t.true(schema.getField('prefetched_nodes').isAList());
  t.deepEqual(schema.getField('search_request').getAnyOfCuries(), ['tmz:canvas:mixin:block-search-request']);
  t.deepEqual(schema.getField('prefetched_nodes').getAnyOfCuries(), ['gdbots:ncr:mixin:node']);
  t.equal(block.get('show_header'), true);
  t.false(block.has('header_text'));

  t.end();
});

test('Search requests can be used as a slider block search request', (t) => {
  [SearchArticlesRequest, SearchVideosRequest, SearchGalleriesRequest, SearchTeasersRequest].forEach((request) => {
    t.true(request.schema().hasMixin('tmz:canvas:mixin:block-search-request:v1'), request.SCHEMA_CURIE);
  });

  t.end();
});
