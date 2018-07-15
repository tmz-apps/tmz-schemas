import test from 'tape';
import isPlainObject from 'lodash/isPlainObject';
import RequiredFieldNotSet from '@gdbots/pbj/exceptions/RequiredFieldNotSet';
import Message from '@gdbots/pbj/Message';
import MessageRef from '@gdbots/pbj/MessageRef';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import '@tmz/schemas';

test('Can create all messages', (t) => {
  MessageResolver.all().forEach((classProto) => {
    const message = classProto.create();
    t.true(message instanceof Message, `Unable to create [${classProto.schema().getId()}].`);

    try {
      const ref = message.generateMessageRef('tag');
      t.true(ref instanceof MessageRef, `Failed to generateMessageRef for [${classProto.schema().getId()}].`);
      t.same(`${ref}`, `${message.generateMessageRef('tag')}`);
    } catch (e) {
      if (!(e instanceof RequiredFieldNotSet)) {
        // this is ok as some messages generate etags in their message
        // refs which serialize the message and cause this exception
        throw e;
      }
    }

    t.true(isPlainObject(message.getUriTemplateVars()), `getUriTemplateVars from [${classProto.schema().getId()}] is not an object.`);
  });

  t.end();
});
