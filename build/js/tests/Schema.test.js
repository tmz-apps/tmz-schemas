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
