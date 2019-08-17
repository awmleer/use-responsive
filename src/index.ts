import {useEffect, useState} from 'react'

type Subscriber = (width: number) => void

const subscribers = new Set<Subscriber>()

export function configUseResponsive() {

}

window.addEventListener('resize', () => {
  if (subscribers.size === 0) return
  for (const subscriber of subscribers) {
    subscriber(window.innerWidth)
  }
})

export function useResponsive() {
  const [state, setState] = useState<number>(window.innerWidth)
  
  useEffect(() => {
    const subscriber = (width: number) => {
      setState(width)
    }
    subscribers.add(subscriber)
    return () => {
      subscribers.delete(subscriber)
    }
  }, [])
  
  return state
}
