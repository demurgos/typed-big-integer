import * as test from 'blue-tape';

import * as bigInt from 'big-integer';

// TODO: this is currently (2016-04-29) not supported by Typescript
// See issue https://github.com/Microsoft/TypeScript/issues/2361
//
// test('valueOf', (t) => {
//   t.plan(1);
//   t.equal(bigInt('100') + bigInt('200') === 300, true);
// });

test('abs', (t) => {
  t.plan(2);
  t.equal(bigInt(-45).abs().toJSNumber(), 45);
  t.equal(bigInt(45).abs().toJSNumber(), 45);
});

test('add', (t) => {
  t.plan(1);
  t.equal(bigInt(5).add(7).toJSNumber(), 12);
});

test('and', (t) => {
  t.plan(2);
  t.equal(bigInt(6).and(3).toJSNumber(), 2);
  t.equal( bigInt(6).and(-3).toJSNumber(), 4);
});