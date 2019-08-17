import {useEffect, useState} from 'react'

type Subscriber = () => void

const subscribers = new Set<Subscriber>()

export type ResponsiveConfig = [number, string][]

let responsiveConfig: ResponsiveConfig = [
  [0, 'xs'],
  [576, 'sm'],
  [768, 'md'],
  [992, 'lg'],
  [1200, 'xl'],
]

export function configResponsive(config: ResponsiveConfig) {
  responsiveConfig = config
}

let breakpoint: string = calculate()

function calculate() {
  const width = window.innerWidth
  let b: string
  for (let row of responsiveConfig) {
    if (width >= row[0]) {
      b = row[1]
    }
  }
  return b
}

window.addEventListener('resize', () => {
  breakpoint = calculate()
  for (const subscriber of subscribers) {
    subscriber()
  }
})

export function useResponsive() {
  const [state, setState] = useState<string>(breakpoint)
  
  useEffect(() => {
    const subscriber = () => {
      setState(breakpoint)
      console.log(breakpoint)
    }
    subscribers.add(subscriber)
    return () => {
      subscribers.delete(subscriber)
    }
  }, [])
  
  return state
}
