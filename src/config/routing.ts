import { HomePage, PrivacyPage, TermsPage } from '~/pages'

export const routes = [
  { path: '/', Component: HomePage },
  { path: '/terms', Component: TermsPage },
  { path: '/privacy', Component: PrivacyPage }
]
