import test from 'tape';
import isFunction from 'lodash-es/isFunction.js';
import isPlainObject from 'lodash-es/isPlainObject.js';
import RequiredFieldNotSet from '@gdbots/pbj/exceptions/RequiredFieldNotSet.js';
import Message from '@gdbots/pbj/Message.js';
import MessageRef from '@gdbots/pbj/well-known/MessageRef.js';
import MessageResolver from '@gdbots/pbj/MessageResolver.js';
import '@tmz/schemas';


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
