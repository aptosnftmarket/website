import './styles/index.scss'

import classNames from 'classnames'
import { MouseEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { litepaperUrl } from '../../config/links'
import { useOnWindowScroll } from '../../hooks'
import { scrollTo } from '../../utils'
import { SocialNetworkLink } from '../SocialNetworkLink'
import { Tooltip } from '../Tooltip'
import styles from './App.module.scss'
import aptos from './aptos.svg'
import { Background } from './Background'
import { Router } from './Router'

export function App(): JSX.Element {
  const [animate, setAnimate] = useState(false)
  const [isHeaderSmall, setIsHeaderSmall] = useState(false)
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)
  const navigate = useNavigate()

  useOnWindowScroll(() => setIsHeaderSmall(window.scrollY > 64))

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <>
      <Background />
      <header
        className={classNames(styles.Header, {
          [styles.animate]: animate,
          [styles.small]: isHeaderSmall
        })}
      >
        <div
          className={classNames(styles.Logo, { [styles.animate]: animate })}
          onClick={(event): void => {
            event.preventDefault()
            navigate('/')
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        />
        <ul className={classNames(styles.HeaderLinks, { [styles.animate]: animate })}>
          <li>
            <a
              className={styles.HeaderLink}
              href="#sale"
              onClick={(event): void => {
                event.preventDefault()
                navigate('/')
                scrollTo('sale', event)
              }}
            >
              Public Sale
            </a>
          </li>
          <li>
            <a
              className={styles.HeaderLink}
              href="#roadmap"
              onClick={(event): void => {
                event.preventDefault()
                navigate('/')
                scrollTo('roadmap', event)
              }}
            >
              Roadmap
            </a>
          </li>
          <li>
            <a className={styles.HeaderLink} href={litepaperUrl} target="_blank" rel="noopener noreferrer">
              Litepaper
            </a>
          </li>
        </ul>
        <div className={classNames(styles.RightSide, { [styles.animate]: animate })}>
          <ul className={styles.SocialNetworks}>
            <li>
              <SocialNetworkLink className={styles.SocialNetwork} name="twitter" type="transparent" size={32} />
            </li>
            <li>
              <SocialNetworkLink className={styles.SocialNetwork} name="telegram" type="transparent" size={32} />
            </li>
            <li>
              <SocialNetworkLink className={styles.SocialNetwork} name="medium" type="transparent" size={32} />
            </li>
          </ul>
          <Tooltip text="Coming soon">
            <button className="_Button" disabled>
              Open dApp
            </button>
          </Tooltip>
        </div>
        <div className={classNames(styles.MobileMenu, { [styles.animate]: animate })}>
          <div
            className={classNames(styles.MobileMenuButton, { [styles.active]: isMobileMenuActive })}
            onClick={(): void => setIsMobileMenuActive((value) => !value)}
          >
            <ul className={styles.MobileMenuButtonOpen}>
              <li />
              <li />
              <li />
            </ul>
            <svg
              className={styles.MobileMenuButtonClose}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.2877 19.2879C19.681 18.8947 19.681 18.257 19.2877 17.8638L11.4241 10.0001L19.2879 2.13622C19.6812 1.74295 19.6812 1.10534 19.2879 0.712073C18.8946 0.318806 18.257 0.318806 17.8638 0.712073L9.99997 8.57593L2.13617 0.712071C1.74291 0.318804 1.1053 0.318804 0.712036 0.712071C0.318772 1.10534 0.318771 1.74295 0.712035 2.13622L8.57583 10.0001L0.712187 17.8638C0.318923 18.257 0.318923 18.8947 0.712187 19.2879C1.10545 19.6812 1.74306 19.6812 2.13632 19.2879L9.99997 11.4242L17.8636 19.2879C18.2569 19.6812 18.8945 19.6812 19.2877 19.2879Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <ul className={classNames(styles.MobileMenuContent, { [styles.active]: isMobileMenuActive })}>
            <li>
              <Tooltip text="Coming soon">
                <button className="_Button" disabled>
                  Open dApp
                </button>
              </Tooltip>
            </li>
            <li>
              <ul className={styles.HeaderLinks}>
                <li>
                  <a
                    className={styles.HeaderLink}
                    href="#sale"
                    onClick={(event): void => {
                      event.preventDefault()
                      navigate('/')
                      scrollTo('sale', event)
                      setIsMobileMenuActive(false)
                    }}
                  >
                    Public Sale
                  </a>
                </li>
                <li>
                  <a
                    className={styles.HeaderLink}
                    href="#roadmap"
                    onClick={(event): void => {
                      event.preventDefault()
                      navigate('/')
                      scrollTo('roadmap', event)
                      setIsMobileMenuActive(false)
                    }}
                  >
                    Roadmap
                  </a>
                </li>
                <li>
                  <a
                    className={classNames(styles.HeaderLink, '_disabled')}
                    href={litepaperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Litepaper
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <ul className={styles.SocialNetworks}>
                <li>
                  <SocialNetworkLink className={styles.SocialNetwork} name="twitter" type="transparent" size={32} />
                </li>
                <li>
                  <SocialNetworkLink className={styles.SocialNetwork} name="telegram" type="transparent" size={32} />
                </li>
                <li>
                  <SocialNetworkLink className={styles.SocialNetwork} name="medium" type="transparent" size={32} />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </header>
      <main className={styles.Content}>
        <Router />
      </main>
      <footer className={styles.Footer}>
        <div className={styles.Policies}>
          <a
            className={classNames(styles.Policy)}
            href="/terms"
            onClick={(event: MouseEvent): void => {
              event.preventDefault()
              navigate('/terms')
              window.scrollTo({ top: 0 })
            }}
          >
            T&Cs
          </a>
          <a
            className={classNames(styles.Policy)}
            href="/privacy"
            onClick={(event: MouseEvent): void => {
              event.preventDefault()
              navigate('/privacy')
              window.scrollTo({ top: 0 })
            }}
          >
            Privacy Policy
          </a>
        </div>

        <div className={styles.CenterPart}>
          <img src={aptos} alt="Build for Aptos" />
          <p className={styles.Sign}>Built with ❤️️ & 🔥 on APTOS</p>
          <ul className={styles.SocialNetworks}>
            <li>
              <SocialNetworkLink className={styles.SocialNetwork} name="twitter" type="transparent" size={40} />
            </li>
            <li>
              <SocialNetworkLink className={styles.SocialNetwork} name="telegram" type="transparent" size={40} />
            </li>
            <li>
              <SocialNetworkLink className={styles.SocialNetwork} name="medium" type="transparent" size={40} />
            </li>
          </ul>
        </div>

        <div>© Copyright AptosNFT.Market 2022</div>
      </footer>
    </>
  )
}
