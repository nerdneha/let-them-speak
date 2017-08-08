import test from 'ava'

test('pass should pass', t => {
  t.pass('ALARM')
})

test('bar', async t => {
  const bar = Promise.resolve(
    'bar',
    'baz',
    'asdfasdfasdfasdf',
    'adfasdf asdfasdfasdfasdfasdfa',
    'asdfasdf'
  )

  t.is(await bar, 'bar')
})
