import * as testing from '@testing-library/react'
import {FC, useState} from 'react'
import * as React from 'react'
import {useResponsive} from '../index'
import {act} from 'react-dom/test-utils'

test('response to window width changes', function () {
  function changeWidth(width: number) {
    act(() => {
      //@ts-ignore
      global.innerWidth = width
      //@ts-ignore
      global.dispatchEvent(new Event('resize'))
    })
  }
  changeWidth(1024)
  
  function App() {
    const breakpoint = useResponsive()
    return (
      <p>{breakpoint}</p>
    )
  }
  const renderer = testing.render(
    <App/>
  )
  
  expect(renderer.asFragment()).toMatchSnapshot()
  changeWidth(300)
  expect(renderer.asFragment()).toMatchSnapshot()
  changeWidth(700)
  expect(renderer.asFragment()).toMatchSnapshot()
  changeWidth(800)
  expect(renderer.asFragment()).toMatchSnapshot()
  changeWidth(1200)
  expect(renderer.asFragment()).toMatchSnapshot()
})
