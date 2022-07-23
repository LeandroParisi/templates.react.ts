/* eslint-disable consistent-return */
import { useEffect, useRef } from 'react'

export interface useIntervalParams {
  callback: () => any
  delay?: number
}

export const useInterval = ({ callback, delay } : useIntervalParams) => {
  const savedCallback = useRef<typeof callback>()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current!()
    }
    if (!delay) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export default useInterval
