import {
  makeHeadlessChromeAdapter,
  navigate,
  findElement,
  getText,
  close
} from 'selenium-adapter'
import test from 'ava'

test('welcomes the user', async t => {
  const chrome = makeHeadlessChromeAdapter()
  await navigate(chrome, 'http://localhost:3000')

  const p = await findElement(chrome, 'p')
  const welcomeText = await getText(p)
  await close(chrome)

  t.is(welcomeText, 'Hello World!')
})
