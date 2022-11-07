import { Page404 } from '~/pages'
import { Route, Routes } from 'react-router-dom'

import { routes } from '../../config'

export function Router(): JSX.Element {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}
