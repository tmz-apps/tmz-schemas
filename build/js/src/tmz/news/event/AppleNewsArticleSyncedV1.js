// @link https://schemas.tmz.com/json-schema/tmz/news/event/apple-news-article-synced/1-0-0.json#
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiNewsAppleNewsArticleSyncedV1Mixin from '@triniti/schemas/triniti/news/mixin/apple-news-article-synced/AppleNewsArticleSyncedV1Mixin';

export default class AppleNewsArticleSyncedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:news:event:apple-news-article-synced:1-0-0', AppleNewsArticleSyncedV1,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        TrinitiNewsAppleNewsArticleSyncedV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(AppleNewsArticleSyncedV1);
MessageResolver.register('tmz:news:event:apple-news-article-synced', AppleNewsArticleSyncedV1);
Object.freeze(AppleNewsArticleSyncedV1);
Object.freeze(AppleNewsArticleSyncedV1.prototype);
