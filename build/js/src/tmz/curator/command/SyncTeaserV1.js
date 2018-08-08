// @link http://schemas.tmz.com/json-schema/tmz/curator/command/sync-teaser/1-0-0.json#
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiCuratorSyncTeaserV1Mixin from '@triniti/schemas/triniti/curator/mixin/sync-teaser/SyncTeaserV1Mixin';

export default class SyncTeaserV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:curator:command:sync-teaser:1-0-0', SyncTeaserV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        TrinitiCuratorSyncTeaserV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(SyncTeaserV1);
MessageResolver.register('tmz:curator:command:sync-teaser', SyncTeaserV1);
Object.freeze(SyncTeaserV1);
Object.freeze(SyncTeaserV1.prototype);
