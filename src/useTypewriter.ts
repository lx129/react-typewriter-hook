import { useState, useEffect, useRef, useMemo } from "react"
import TypeWritter from './typeWriter'

const writter = new TypeWritter()

export interface TypeWriterHookOptions {
  duration?: number
  interval?: number
}

export default function useTypeWritter(str: string, options: TypeWriterHookOptions) {
  const [word, setWord] = useState<null | string>(null)
  const intervalRef = useRef<any>({})
  const strRef = useRef<any>({})

  if (options.interval && options.duration) {
    console.warn(`react-typewriter-hook: WARNING: If both are present, duration overrides interval.`)
  }

  useEffect(() => {
    strRef.current = setWord(writter.startTypeWord(str))
  }, [str])

  useEffect(() => {
    let interval = options.interval ? options.interval : writter.rd()
    if (options.duration) {
      interval = options.duration / str.length
    }
    intervalRef.current = setInterval(() => {
      setWord(writter.typing())
    }, interval)
    return function clear() {
      clearInterval(intervalRef.current)
    }
  }, [word, options.duration, options.interval])

  return word
}