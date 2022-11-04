import { MouseEvent } from 'react'

export function scrollTo(elementId: string, event?: MouseEvent): void {
  const headerHeight = 20 + 26 * 2

  event?.preventDefault()
  scrollToElement(elementId, headerHeight + 16)
  history.pushState({}, '', `#${elementId}`)
}

function scrollToElement(elementId: string, offset = 0): void {
  const element = document.getElementById(elementId)

  if (element) {
    window.scrollBy({
      top: element.getBoundingClientRect().top - offset,
      behavior: 'smooth'
    })
  }
}
