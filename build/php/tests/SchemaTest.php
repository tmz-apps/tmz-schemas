<?php

use Gdbots\Common\Util\ArrayUtils;
use Gdbots\Pbj\Exception\RequiredFieldNotSet;
use Gdbots\Pbj\Message;
use Gdbots\Pbj\MessageRef;
use Gdbots\Pbj\MessageResolver;
use PHPUnit\Framework\TestCase;

class SchemaTest extends TestCase
{
    /**
     * @throws \Throwable
     */
    public function testCanCreateAllMessages()
    {
        /** @var Message $className */
        foreach (MessageResolver::all() as $curie => $className) {
            $message = $className::create();
            $this->assertInstanceOf($className, $message);
            $this->assertInstanceOf(Message::class, $message);

            try {
                $ref = $message->generateMessageRef('tag');
                $this->assertInstanceOf(MessageRef::class, $ref);
                $this->assertSame($ref->toString(), $message->generateMessageRef('tag')->toString());
            } catch (RequiredFieldNotSet $e) {
                // this is ok as some messages generate etags in their message
                // refs which serialize the message and cause this exception
            } catch (\Throwable $e) {
                throw $e;
            }

            $this->assertTrue(ArrayUtils::isAssoc($message->getUriTemplateVars()));
        }
    }
}
