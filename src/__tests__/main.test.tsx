import * as testing from '@testing-library/react'
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
    const info = useResponsive()
    return (
      <>
        <p>xs: {info.xs.toString()}</p>
        <p>sm: {info.sm.toString()}</p>
        <p>md: {info.md.toString()}</p>
        <p>lg: {info.lg.toString()}</p>
        <p>xl: {info.xl.toString()}</p>
      </>
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
  changeWidth(1000)
  expect(renderer.asFragment()).toMatchSnapshot()
  changeWidth(1200)
  expect(renderer.asFragment()).toMatchSnapshot()
})
