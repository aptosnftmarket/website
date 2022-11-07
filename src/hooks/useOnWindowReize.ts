import { useEffect } from 'react'

let timeoutId: NodeJS.Timeout

export function useOnWindowReize(onWindowResize: () => void, debounce = 250): void {
  useEffect(() => {
    onWindowResize()

    window.addEventListener('resize', () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(onWindowResize, debounce)
    })

    return (): void => window.removeEventListener('resize', onWindowResize)
  }, [debounce, onWindowResize])
}
