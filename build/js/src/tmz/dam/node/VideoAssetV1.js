// @link https://schemas.tmz.com/json-schema/tmz/dam/node/video-asset/1-0-1.json#
import GdbotsCommonTaggableV1Mixin from '@gdbots/schemas/gdbots/common/mixin/taggable/TaggableV1Mixin';
import GdbotsNcrExpirableV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/expirable/ExpirableV1Mixin';
import GdbotsNcrIndexedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/indexed/IndexedV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import TrinitiDamAssetV1Mixin from '@triniti/schemas/triniti/dam/mixin/asset/AssetV1Mixin';
import TrinitiDamVideoAssetV1Mixin from '@triniti/schemas/triniti/dam/mixin/video-asset/VideoAssetV1Mixin';
import TrinitiDamVideoAssetV1Trait from '@triniti/schemas/triniti/dam/mixin/video-asset/VideoAssetV1Trait';
import TrinitiOvpTranscodeableV1Mixin from '@triniti/schemas/triniti/ovp/mixin/transcodeable/TranscodeableV1Mixin';
import TrinitiOvpTranscribableV1Mixin from '@triniti/schemas/triniti/ovp/mixin/transcribable/TranscribableV1Mixin';
import TrinitiPeopleHasPeopleV1Mixin from '@triniti/schemas/triniti/people/mixin/has-people/HasPeopleV1Mixin';
import TrinitiTaxonomyHashtaggableV1Mixin from '@triniti/schemas/triniti/taxonomy/mixin/hashtaggable/HashtaggableV1Mixin';

export default class VideoAssetV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:tmz:dam:node:video-asset:1-0-1', VideoAssetV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        TrinitiDamAssetV1Mixin.create(),
        TrinitiDamVideoAssetV1Mixin.create(),
        GdbotsCommonTaggableV1Mixin.create(),
        GdbotsNcrExpirableV1Mixin.create(),
        GdbotsNcrIndexedV1Mixin.create(),
        TrinitiOvpTranscodeableV1Mixin.create(),
        TrinitiOvpTranscribableV1Mixin.create(),
        TrinitiPeopleHasPeopleV1Mixin.create(),
        TrinitiTaxonomyHashtaggableV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(VideoAssetV1);
TrinitiDamVideoAssetV1Trait(VideoAssetV1);
MessageResolver.register('tmz:dam:node:video-asset', VideoAssetV1);
Object.freeze(VideoAssetV1);
Object.freeze(VideoAssetV1.prototype);
