import test from 'tape';
import AssertionFailed from '@gdbots/pbj/exceptions/AssertionFailed.js';
import NodeRef from '@gdbots/pbj/well-known/NodeRef.js';
import '@tmz/schemas';
import Article from '../src/tmz/news/node/ArticleV1.js';
import Person from '../src/tmz/people/node/PersonV1.js';
import SearchArticlesRequest from '../src/tmz/news/request/SearchArticlesRequestV1.js';

test('Author details are optional and social handles use storage constraints', (t) => {
  const person = Person.create();
  t.equal(person.get('is_author'), false);
  ['job_title', 'facebook_username', 'tiktok_username'].forEach((field) => {
    t.false(person.has(field));
  });

  person.set('is_author', true).set('job_title', 'Reporter');
  person.set('facebook_username', 'a'.repeat(51));
  t.equal(person.get('facebook_username'), 'a'.repeat(51), 'no unsupported Facebook limit of 50');

  // These fields store handles; they do not reproduce platform signup policies.
  ['facebook_username', 'tiktok_username'].forEach((field) => {
    person.set(field, 'legacy.handle-');
    t.equal(person.get(field), 'legacy.handle-');
  });

  person.set('tiktok_username', 'a'.repeat(24));
  t.equal(person.get('tiktok_username'), 'a'.repeat(24));
  t.throws(() => person.set('tiktok_username', 'a'.repeat(25)), AssertionFailed);
  t.throws(() => person.set('tiktok_username', 'é'.repeat(13)), AssertionFailed, 'PBJ measures UTF-8 bytes');
  t.equal(person.toObject().is_author, true);
  t.equal(person.toObject().job_title, 'Reporter');
  t.end();
});

test('Article author order survives serialization and search filters deduplicate', async (t) => {
  const first = NodeRef.fromString('tmz:person:11111111-1111-4111-8111-111111111111');
  const second = NodeRef.fromString('tmz:person:22222222-2222-4222-8222-222222222222');
  const refs = [second, first, second];
  const article = Article.create().addToList('author_refs', refs);
  const restored = await Article.fromObject(article.toObject());
  t.deepEqual(restored.toObject().author_refs, refs.map(String));

  const search = SearchArticlesRequest.create().addToSet('author_refs', refs);
  t.deepEqual(search.toObject().author_refs, [second, first].map(String));
  t.end();
});
