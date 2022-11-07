import { useEffect } from 'react'

let timeoutId: NodeJS.Timeout

export function useOnWindowScroll(onWindowScroll: () => void, debounce = 50): void {
  useEffect(() => {
    onWindowScroll()

    window.addEventListener('scroll', () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(onWindowScroll, debounce)
    })

    return (): void => window.removeEventListener('scroll', onWindowScroll)
  }, [debounce, onWindowScroll])
}
