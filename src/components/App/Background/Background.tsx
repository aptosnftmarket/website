import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import { Container, Engine } from 'tsparticles-engine'

import styles from './Background.module.scss'
import config from './config.json'

export function Background(): JSX.Element {
  return (
    <Particles
      // id="tsparticles"
      className={styles.Background}
      // @ts-ignore
      params={config}
      init={loadFull}
      loaded={particlesLoaded}
    />
  )
}

async function particlesInit(engine: Engine): Promise<void> {
  // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
  // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  // starting from v2 you can add only the features you need reducing the bundle size
  await loadFull(engine)
  // console.log(engine)
}

async function particlesLoaded(container?: Container): Promise<void> {
  // console.log(container)
}
