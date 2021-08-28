import { useState, useEffect } from 'react'

function useDebounce(value: any, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const handler = window.setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    // *清除副作用：return就可以清除，並且會在下一個effect前清除
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])
  return debouncedValue
}

export default useDebounce
