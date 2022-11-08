import classNames from 'classnames'
import { PropsWithChildren, useEffect, useId, useRef, useState } from 'react'
import ReactTooltip from 'react-tooltip'

import styles from './Tooltip.module.scss'

export interface TooltipProps extends PropsWithChildren {
  text: string | string[]
  isPermanentlyVisible?: boolean
  className?: string
}

export function Tooltip({ text, className, children }: TooltipProps): JSX.Element {
  const [isVisible, setIsVisible] = useState(false) // Because of https://stackoverflow.com/a/73197730
  const id = useId().replaceAll(':', '')
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ReactTooltip.rebuild()
  }, [isVisible])

  const content =
    typeof text === 'string' ? (
      text
    ) : (
      <div className={styles.ContentArray}>
        {text.map((value, index) => (
          <div key={index}>{value}</div>
        ))}
      </div>
    )

  return (
    <div className={classNames(styles.Tooltip, className)}>
      <div
        ref={ref}
        data-for={id}
        data-tip={true}
        onMouseEnter={(): void => setIsVisible(true)}
        onMouseLeave={(): void => setIsVisible(false)}
      >
        {children}
      </div>
      <div className={classNames(styles.Container, { [styles.visible]: isVisible })}>
        <ReactTooltip className={classNames(styles.Content)} id={id} place="top" effect="solid" scrollHide>
          {content}
        </ReactTooltip>
      </div>
    </div>
  )
}
