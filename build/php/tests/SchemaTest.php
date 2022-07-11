<?php
declare(strict_types=1);

use Gdbots\Pbj\Exception\RequiredFieldNotSet;
use Gdbots\Pbj\Message;
use Gdbots\Pbj\MessageResolver;
use Gdbots\Pbj\Util\ArrayUtil;
use Gdbots\Pbj\WellKnown\MessageRef;
use PHPUnit\Framework\TestCase;

class SchemaTest extends TestCase
{
    public function testCanCreateAllMessages()
    {
        /** @var Message|string $className */
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

            $vars = $message->getUriTemplateVars();
            $this->assertTrue(!count($vars) || (count($vars) > 0 && ArrayUtil::isAssoc($vars)));
        }
    }
}
