// tslint:disable:no-expression-statement
import test from 'ava';
import { APIS } from './generated-clients/api';

test('hoge', t => {
  t.is((1+2), 3);
});

test('client root', async t => {
  const client = new APIS[0]();
  const {body} = await client.rootGet();
  t.is(body.hello, "world");
});

test('client users name', async t => {
  const client = new APIS[0]();
  const {body} = await client.usersNameGet('foo');
  t.is(body.foo, 'bar');
})
