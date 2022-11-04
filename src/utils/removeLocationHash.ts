export function removeLocationHash(): void {
  history.pushState('', document.title, `${window.location.pathname}${window.location.search}`)
}
