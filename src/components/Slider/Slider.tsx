import 'swiper/css'
import 'swiper/css/autoplay'

import classNames from 'classnames'
import { useCallback, useEffect, useState } from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useOnWindowReize } from '~/hooks'

import partnerAptosFoundation from './partnerAptosFoundation.png'
import partnerAptosLaunch from './partnerAptosLaunch.png'
import partnerKanaLabs from './partnerKanaLabs.svg'
import partnerMiraFinance from './partnerMiraFinance.png'
import partnerPontem from './partnerPontem.png'
import partnerStaderLabs from './partnerStaderLabs.svg'
import styles from './Slider.module.scss'

const slides = [
  { name: 'Aptos Foundation', url: 'https://aptosfoundation.org/', src: partnerAptosFoundation },
  { name: 'Stader Labs', url: 'https://staderlabs.com/', src: partnerStaderLabs },
  { name: 'Kana Labs', url: 'https://app.kanalabs.io/', src: partnerKanaLabs },
  { name: 'Pontem Network', url: 'https://pontem.network/', src: partnerPontem },
  { name: 'Mira Finance', url: 'https://www.mirafinance.io/', src: partnerMiraFinance },
  { name: 'Aptos Launch', url: 'https://aptoslaunch.io/', src: partnerAptosLaunch }
].map(({ name, url, src }, index) => {
  return (
    <a key={index} className={styles.SlideContent} href={url} target="_blank" rel="noopener noreferrer">
      <img
        className={styles.SlideLogo}
        style={src === partnerKanaLabs ? { marginInline: 13 } : {}}
        src={src}
        alt={name}
      />
      <span className={styles.SlideTitle}>{name}</span>
    </a>
  )
})

interface SliderProps {
  // slides: ReactNode
  className?: string
}

const maxWidth = 1280

export function Slider({ className }: SliderProps): JSX.Element {
  const [isActive, setIsActive] = useState(window.innerWidth <= maxWidth)
  const [key, setKey] = useState(0)

  useOnWindowReize(() => setIsActive(window.innerWidth <= maxWidth))
  useEffect(() => setKey((currentKey) => currentKey++), [isActive])

  return (
    <div key={key} className={classNames(styles.Slider, className)}>
      <Swiper
        className={styles.Container}
        autoplay={isActive ? { delay: 2000, disableOnInteraction: false } : undefined}
        loop={isActive}
        modules={[Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 50
          },
          520: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          680: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          800: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 40
          }
        }}
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index} className={styles.Slide}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
