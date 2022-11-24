import 'swiper/css'
import 'swiper/css/autoplay'

import classNames from 'classnames'
import { useCallback, useState } from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useOnWindowReize } from '~/hooks'

import partnerAptosfoundation from './partnerAptosfoundation.png'
import partnerAptoslaunch from './partnerAptoslaunch.svg'
import partnerKanalabs from './partnerKanalabs.svg'
import partnerMirafinance from './partnerMirafinance.png'
import partnerPontem from './partnerPontem.png'
import partnerStaderlabs from './partnerStaderlabs.svg'
import styles from './Slider.module.scss'

const slides = [
  { name: 'Aptos Foundation', url: 'https://aptosfoundation.org/', src: partnerAptosfoundation },
  { name: 'Stader Labs', url: 'https://staderlabs.com/', src: partnerStaderlabs },
  { name: 'Kana Labs', url: 'https://app.kanalabs.io/', src: partnerKanalabs },
  { name: 'Mira Finance', url: 'https://www.mirafinance.io/', src: partnerMirafinance },
  { name: 'Aptos Launch', url: 'https://aptoslaunch.io/', src: partnerAptoslaunch },
  { name: 'Pontem Network', url: 'https://pontem.network/', src: partnerPontem }
].map(({ name, url, src }, index) => {
  return (
    <a key={index} className={styles.SlideContent} href={url} target="_blank" rel="noopener noreferrer">
      <img className={styles.SlideLogo} src={src} alt={name} />
      <span className={styles.SlideTitle}>{name}</span>
    </a>
  )
})

interface SliderProps {
  // slides: ReactNode
  className?: string
}

export function Slider({ className }: SliderProps): JSX.Element {
  const [slidesPerView, setSlidesPerView] = useState(0)

  useOnWindowReize(
    useCallback(() => {
      const { length } = slides
      const { innerWidth } = window

      setSlidesPerView(
        innerWidth <= 1200 ? (innerWidth <= 800 ? 1 : length - 3) : innerWidth <= 1365 ? length - 1 : length
      )
    }, [])
  )

  const isEnabled = slidesPerView < slides.length

  return (
    <div className={classNames(styles.Slider, className)}>
      {slidesPerView ? (
        <Swiper
          className={styles.Container}
          autoplay={isEnabled ? { delay: 2000, disableOnInteraction: false } : undefined}
          loop={isEnabled}
          centeredSlides={isEnabled}
          slidesPerView={slidesPerView}
          spaceBetween={50}
          modules={[Autoplay]}
        >
          {slides.map((slideContent, index) => (
            <SwiperSlide key={index} className={styles.Slide}>
              {slideContent}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}
    </div>
  )
}
