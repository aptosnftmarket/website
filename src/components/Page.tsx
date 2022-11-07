import classNames from 'classnames'
import { PropsWithChildren } from 'react'

import styles from './Page.module.scss'

interface PageProps extends PropsWithChildren {
  title?: string
  className?: string
  isVerticalCenter?: boolean
}

export function Page({ title, isVerticalCenter = false, className, children }: PageProps): JSX.Element {
  return (
    <div className={styles.BackgroundFog}>
      <div className={classNames(styles.Page, className, { [styles.isVerticalCenter]: isVerticalCenter })}>
        {title && <h1 className={styles.Title}>{title}</h1>}
        {children}
      </div>
    </div>
  )
}
