import classNames from 'classnames'
import { useCallback, useEffect, useRef, useState } from 'react'

import { SocialNetworkLink, Tooltip } from '../../components'
import { litepaperUrl, socialNetworksUrls } from '../../config'
import { useOnWindowReize } from '../../hooks'
import { scrollTo } from '../../utils'
import appPreview from './appPreview.png'
import styles from './HomePage.module.scss'
import nft2 from './nft2.png'
import nft3 from './nft3.png'
import nft4 from './nft4.png'
import nft6 from './nft6.png'

export function HomePage(): JSX.Element {
  const ref1 = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)
  const [animate, setAnimate] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [margin, setMargin] = useState(0)

  useOnWindowReize(
    useCallback(() => {
      if (ref1.current && ref2.current) {
        const offset = ref1.current.offsetHeight - ref2.current.offsetHeight
        const desktopOffset = 64 + 12
        const mobileOffset = 48
        const isMobile = screen.width <= 1200

        setMargin(-(offset / 2) - (isMobile ? mobileOffset : desktopOffset))
      }
    }, [])
  )

  useEffect(() => {
    setAnimate(true)
  }, [])

  useEffect(() => {
    const { hash } = window.location

    if (isReady) {
      scrollTo(hash.replace('#', ''))
    }
  }, [isReady])

  return (
    <div className={styles.HomePage}>
      <div className={styles.Section100vh} ref={ref1}>
        <div className={styles.Section100vhContent} ref={ref2}>
          <div className={classNames(styles.Nft, styles.Nft1, { [styles.animate]: animate })} />
          <img className={classNames(styles.Nft, styles.Nft2, { [styles.animate]: animate })} src={nft2} alt="NFT" />
          <img className={classNames(styles.Nft, styles.Nft3, { [styles.animate]: animate })} src={nft3} alt="NFT" />
          <img className={classNames(styles.Nft, styles.Nft4, { [styles.animate]: animate })} src={nft4} alt="NFT" />
          <div className={classNames(styles.Nft, styles.Nft5, { [styles.animate]: animate })} />
          <img className={classNames(styles.Nft, styles.Nft6, { [styles.animate]: animate })} src={nft6} alt="NFT" />
          <div className={classNames(styles.Info, { [styles.animate]: animate })}>
            <h1 className={styles.Title}>
              All <p className="_TextAccent">Aptos NFTs</p> in one place!
            </h1>
            <p className={styles.Description}>
              The easiest way to evaluate, purchase
              <br />
              and sell <span className="_TextAccent">Aptos NFTs</span> on all marketplaces at once.
              <br />
              Building in stealth, launching soon!
            </p>
            <Tooltip text="Coming soon">
              <button className={classNames(styles.OpenDapp, '_Button big')} disabled>
                Open dApp
              </button>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className={styles.Container}>
        <div className={styles.AppPreviewContainer} style={{ marginTop: margin }}>
          <div className={classNames(styles.AppPreview, { [styles.animate]: animate })}>
            <img
              className={styles.AppPreviewImage}
              src={appPreview}
              alt="AptosNFT.Market app"
              onLoad={(): void => setIsReady(true)}
              onError={(): void => setIsReady(true)}
            />
          </div>
        </div>

        <hr />

        <div className={styles.BackgroundFog}>
          <div id="sale" className={styles.SaleSection}>
            <h2 className={classNames(styles.Title2, styles.SaleTitle)}>
              Public Sale for <span className="_TextAccent">Aptos</span> community
            </h2>
            <p className={classNames(styles.Description2, styles.SaleDescription)}>
              We believe in community ownership and will be implementing Public Sale for AptosNFT.market token{' '}
              <span className="_TextAccent">ANFT</span> within the next weeks. Whitelist will be open shortly.
              <br />
              Read{' '}
              <a
                className={styles.AnftDocsLink}
                href={socialNetworksUrls.medium}
                target="_blank"
                rel="noopener noreferrer"
              >
                here for more
              </a>
              .
              <div className="_df">
                <Tooltip text="Coming soon">
                  <button
                    className={classNames('_Button big', styles.GoToPublicSaleButton)}
                    // onClick={(): string => (window.location.href = idoUrl)}
                    disabled
                  >
                    Go to Public Sale
                  </button>
                </Tooltip>
              </div>
            </p>
          </div>

          <hr />

          <div id="roadmap" className={styles.RoadmapSection}>
            <h2 className={classNames(styles.Title2, '_tac')}>Roadmap</h2>
            <p className={styles.RoadmapDescription}>
              Our high level roadmap. Read more in{' '}
              <a className={styles.LitepaperLink} href={litepaperUrl} target="_blank" rel="noopener noreferrer">
                litepaper
              </a>
              .
            </p>
            <ul className={styles.RoadmapList}>
              <li>
                <p className={styles.RoadmapSublistTitle}>Q3 / 2022</p>
                <ul className={styles.RoadmapSublist}>
                  <li>Founders with Google and Web2/Web3 experience</li>
                  <li>Team of experienced Rust devs assembled</li>
                  <li>Evaluating MOVE and Aptos ecosystem</li>
                  <li>Legal & regulatory analysis</li>
                </ul>
              </li>
              <li>
                <p className={styles.RoadmapSublistTitle}>Q4 / 2022</p>
                <ul className={styles.RoadmapSublist}>
                  <li>Developing tokenomics and litepaper</li>
                  <li>Partner with Aptos ecosystem projects</li>
                  <li>IDO & TGE of token ANFT</li>
                  <li>ANFT launch on DEXes and CEXes</li>
                  <li>ANFT staking</li>
                  <li>Alpha AptosNFT.Market development</li>
                </ul>
              </li>
              <li>
                <p className={styles.RoadmapSublistTitle}>Q1 / 2023</p>
                <ul className={styles.RoadmapSublist}>
                  <li>Alpha AptosNFT.Market launch</li>
                  <li>Smart Contracts audits</li>
                  <li>NFT Oracles Integrations</li>
                  <li>Beta AptosNFT.Market development</li>
                </ul>
              </li>
              <li>
                <p className={styles.RoadmapSublistTitle}>Q2 / 2023</p>
                <ul className={styles.RoadmapSublist}>
                  <li>Beta AptosNFT.Market launch</li>
                  <li>Feature enhancement and iterations</li>
                  <li>DAO governance</li>
                  <li>Fiat on-off ramps</li>
                </ul>
              </li>
            </ul>
          </div>

          <hr />

          <div className={styles.CommunitySection}>
            <h2 className={classNames(styles.Title2, '_tac')}>Join our community </h2>
            <ul className={styles.CommunityLinks}>
              <li>
                <SocialNetworkLink className={styles.CommunityLink} name="twitter" type="white" size={80}>
                  <span className={styles.CommunityLinkText}>Follow us on Twitter</span>
                </SocialNetworkLink>
              </li>
              <li>
                <SocialNetworkLink className={styles.CommunityLink} name="telegram" type="white" size={80}>
                  <span className={styles.CommunityLinkText}>Join the Telegram community</span>
                </SocialNetworkLink>
              </li>
              <li>
                <SocialNetworkLink className={styles.CommunityLink} name="medium" type="white" size={80}>
                  <span className={styles.CommunityLinkText}>Follow us on Medium</span>
                </SocialNetworkLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
