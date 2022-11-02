import './styles/index.scss'

import classNames from 'classnames'
import { MouseEvent, useEffect, useState } from 'react'

import { useOnWindowScroll } from '../../hooks'
import { HomePage } from '../../pages'
import { scrollTo } from '../../utils'
import styles from './App.module.scss'
import aptos from './aptos.svg'
import { Background } from './Background'
import medium from './medium.svg'
import telegram from './telegram.svg'
import twitter from './twitter.svg'

export function App(): JSX.Element {
  const [animate, setAnimate] = useState(false)
  const [isHeaderSmall, setIsHeaderSmall] = useState(false)
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)

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
          onClick={(): void => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setTimeout(() => (window.location.hash = ''), 100)
          }}
        >
          <svg width="7" height="27" viewBox="0 0 7 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.16073 7.34151C6.16005 7.44922 6.13738 7.55571 6.09404 7.65467C6.0507 7.75363 5.98757 7.84306 5.9084 7.91767L4.67428 9.07449C4.59931 9.14682 4.53965 9.23296 4.49871 9.32797C4.45777 9.42298 4.43636 9.52499 4.43571 9.62814L4.43571 9.67766C4.43622 9.78623 4.45973 9.89352 4.50474 9.9927C4.54976 10.0919 4.61531 10.1808 4.69722 10.2538L5.82123 11.2261C5.9273 11.318 6.01237 11.4309 6.07087 11.5573C6.12938 11.6838 6.16 11.8209 6.16073 11.9598L6.16073 25.7201C5.06215 26.2443 3.89732 26.6228 2.69694 26.8454L2.69694 13.6342C2.69643 13.4964 2.66635 13.3603 2.60864 13.2346C2.55094 13.109 2.46691 12.9967 2.36203 12.905L1.23802 11.9283C1.1546 11.8562 1.08774 11.7676 1.04186 11.6683C0.995988 11.5689 0.972151 11.4612 0.971927 11.3521C0.971612 11.2436 0.99523 11.1364 1.04116 11.0377C1.08709 10.939 1.15425 10.8513 1.23802 10.7805L2.20146 9.94323C2.35751 9.80705 2.48236 9.63995 2.56777 9.45296C2.65317 9.26597 2.6972 9.06334 2.69694 8.85843L2.69694 -7.54028e-08C3.90024 0.220414 5.0682 0.597337 6.1699 1.1208L6.16073 7.34151Z"
              fill="#F5F5F5"
            />
          </svg>
          <span>
            Aptos<span className="_TextAccent">NFT</span>.Market
          </span>
          <svg width="6" height="28" viewBox="0 0 6 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.43626 21.0793L3.43626 18.6711C3.4364 18.5322 3.46676 18.3949 3.5253 18.2683C3.58385 18.1418 3.66923 18.029 3.77576 17.9374L4.89977 16.9607C4.98211 16.8885 5.04798 16.8 5.09308 16.7011C5.13818 16.6022 5.1615 16.4951 5.1615 16.3867C5.1615 16.2784 5.13818 16.1713 5.09308 16.0724C5.04798 15.9735 4.98211 15.885 4.89977 15.8128L3.93633 14.9756C3.77956 14.8407 3.65388 14.6746 3.56766 14.4883C3.48143 14.3021 3.43664 14.0999 3.43626 13.8953L3.43626 0.715695C2.32624 0.33571 1.17163 0.0952312 4.76837e-07 -2.25616e-07L-6.69944e-08 12.4414C0.000147748 12.5492 0.0225858 12.6558 0.0659579 12.7549C0.10933 12.8539 0.172732 12.9433 0.252328 13.0176L1.48645 14.1789C1.56203 14.2508 1.62211 14.3368 1.66309 14.4319C1.70408 14.527 1.72513 14.6293 1.72501 14.7325L1.72501 14.7776C1.72451 14.8861 1.701 14.9934 1.65598 15.0926C1.61096 15.1918 1.54542 15.2807 1.46351 15.3537L0.339497 16.3305C0.232742 16.4219 0.147197 16.5346 0.0886328 16.6612C0.0300681 16.7878 -0.000155235 16.9252 -2.69062e-07 17.0642L-7.12745e-07 27.2145C1.17195 27.1214 2.32684 26.8808 3.43626 26.4988L3.43626 21.0973L3.43626 21.0793Z"
              fill="#00C48B"
            />
          </svg>
        </div>
        <ul className={classNames(styles.HeaderLinks, { [styles.animate]: animate })}>
          <li>
            <a className={styles.HeaderLink} href="#sale" onClick={(event): void => scrollTo('sale', event)}>
              Public Sale
            </a>
          </li>
          <li>
            <a className={styles.HeaderLink} href="#roadmap" onClick={(event): void => scrollTo('roadmap', event)}>
              Roadmap
            </a>
          </li>
          <li>
            <a className={styles.HeaderLink} href="#SOON" onClick={(event: MouseEvent): void => event.preventDefault()}>
              Litepaper (Soon)
            </a>
          </li>
        </ul>
        <div className={classNames(styles.RightSide, { [styles.animate]: animate })}>
          <ul className={styles.SocialNetworks}>
            <li>
              <a href="https://twitter.com/AptosNFT_Market" target="_blank" rel="noopener noreferrer">
                <img className={styles.SocialNetwork} src={twitter} alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="https://t.me/AptosNFT_Market" target="_blank" rel="noopener noreferrer">
                <img className={styles.SocialNetwork} src={telegram} alt="Telegram" />
              </a>
            </li>
            <li>
              <a href="https://medium.com/@AptosNFT_Market" target="_blank" rel="noopener noreferrer">
                <img className={styles.SocialNetwork} src={medium} alt="Medium" />
              </a>
            </li>
          </ul>
          <button className="_Button">Open dApp (soon)</button>
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
              <button className="_Button">Open dApp (soon)</button>
            </li>
            <li>
              <ul className={styles.HeaderLinks}>
                <li>
                  <a
                    className={styles.HeaderLink}
                    href="#sale"
                    onClick={(event): void => {
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
                      scrollTo('roadmap', event)
                      setIsMobileMenuActive(false)
                    }}
                  >
                    Roadmap
                  </a>
                </li>
                <li>
                  <a
                    className={styles.HeaderLink}
                    href="#SOON"
                    onClick={(event: MouseEvent): void => event.preventDefault()}
                  >
                    Litepaper (Soon)
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <ul className={styles.SocialNetworks}>
                <li>
                  <a href="https://twitter.com/AptosNFT_Market" target="_blank" rel="noopener noreferrer">
                    <img className={styles.SocialNetwork} src={twitter} alt="Twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://t.me/AptosNFT_Market" target="_blank" rel="noopener noreferrer">
                    <img className={styles.SocialNetwork} src={telegram} alt="Telegram" />
                  </a>
                </li>
                <li>
                  <a href="https://medium.com/@AptosNFT_Market" target="_blank" rel="noopener noreferrer">
                    <img className={styles.SocialNetwork} src={medium} alt="Medium" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </header>
      <main className={styles.Content}>
        <HomePage />
      </main>
      <footer className={styles.Footer}>
        <div className={styles.Policies}>
          <a className={styles.Policy} href="#TODO">
            T&Cs
          </a>
          <a className={styles.Policy} href="#TODO">
            Privacy Policy
          </a>
        </div>

        <div className={styles.CenterPart}>
          <img src={aptos} alt="Build for Aptos" />
          <p className={styles.Sign}>Built with ❤️️ & 🔥 on APTOS</p>
          <ul className={styles.SocialNetworks}>
            <li>
              <a href="https://twitter.com/AptosNFT_Market" target="_blank" rel="noopener noreferrer">
                <img className={styles.SocialNetwork} src={twitter} alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="https://t.me/AptosNFT_Market" target="_blank" rel="noopener noreferrer">
                <img className={styles.SocialNetwork} src={telegram} alt="Telegram" />
              </a>
            </li>
            <li>
              <a href="https://medium.com/@AptosNFT_Market" target="_blank" rel="noopener noreferrer">
                <img className={styles.SocialNetwork} src={medium} alt="Medium" />
              </a>
            </li>
          </ul>
        </div>

        <div>© Copyright AptosNFT.Market 2022</div>
      </footer>
    </>
  )
}
