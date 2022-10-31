export function scrollToElement(elementId: string, offset = 0): void {
  const element = document.getElementById(elementId)

  if (element) {
    window.scrollBy({
      top: element.offsetTop - window.scrollY - offset,
      behavior: 'smooth'
    })
  }
}
