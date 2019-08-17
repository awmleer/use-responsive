import * as testing from '@testing-library/react'
import {FC, useState} from 'react'
import * as React from 'react'
import {useResponsive} from '../index'
import {act} from 'react-dom/test-utils'

test('response to window width changes', function () {
  act(() => {
    //@ts-ignore
    global.innerWidth = 500
    //@ts-ignore
    global.dispatchEvent(new Event('resize'))
  })
  function App() {
    const width = useResponsive()
    return (
      <p>{width}</p>
    )
  }
  const renderer = testing.render(
    <App/>
  )
  expect(renderer.asFragment()).toMatchSnapshot()
  act(() => {
    //@ts-ignore
    global.innerWidth = 1000
    //@ts-ignore
    global.dispatchEvent(new Event('resize'))
  })
  expect(renderer.asFragment()).toMatchSnapshot()
})
