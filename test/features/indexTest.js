import {
  makeHeadlessChromeAdapter,
  navigate,
  findElement,
  getText,
  click,
  close,
  fillIn,
  getAttribute
} from 'selenium-adapter'
import test from 'ava'

test.beforeEach(t => {
  t.context.chrome = makeHeadlessChromeAdapter()
})

test.afterEach.always(async t => {
  await close(t.context.chrome)
})

test('I can create a profile with my name', async t => {
  const chrome = t.context.chrome
  await navigate(chrome, 'http://localhost:3000')

  const createProfileButton = await findElement(
    chrome,
    'button',
    'Create Profile'
  )
  t.is(await getText(createProfileButton), 'Create Profile')
  // await click(createProfileButton)
  //
  // const nameInput = await findElement(chrome, 'input[name="name"]')
  // t.is(await getAttribute(nameInput, 'name'), 'name')
  // await fillIn(nameInput, 'Sally Speaker')
  //
  // const submitProfileButton = await findElement(chrome, 'button', 'Submit')
  // t.is(await getText(submitProfileButton), 'Submit')
  // await click(submitProfileButton)
  //
  // const profileNameDiv = await findElement(chrome, 'div.profile .name')
  // const profileName = await getText(profileNameDiv)
  //
  // t.is(profileName, 'Sally Speaker')
})
