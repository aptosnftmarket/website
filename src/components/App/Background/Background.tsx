import { useMemo } from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'

import styles from './Background.module.scss'
import config from './config.json'

export function Background(): JSX.Element {
  const params = useMemo(() => {
    const isMobile = screen.width <= 1200

    config.particles.number.value = isMobile ? 100 : 300
    config.particles.size.value = isMobile ? 4 : 2

    return config
  }, [])

  // @ts-ignore
  return <Particles className={styles.Background} params={params} init={loadFull} />
}
