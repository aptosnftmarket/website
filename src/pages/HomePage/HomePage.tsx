import classNames from 'classnames'
import { useRef, useState } from 'react'

import { useOnWindowReize } from '../../hooks'
import nft2 from './2.png'
import nft3 from './3.png'
import nft4 from './4.png'
import nft6 from './6.png'
import appPreview from './appPreview.jpeg'
import styles from './HomePage.module.scss'
import medium from './medium.svg'
import telegram from './telegram.svg'
import twitter from './twitter.svg'

export function HomePage(): JSX.Element {
  const ref1 = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)
  const [margin, setMargin] = useState(0)

  useOnWindowReize(() => {
    if (ref1.current && ref2.current) {
      const offset = ref1.current.offsetHeight - ref2.current.offsetHeight

      setMargin(-(offset / 2) - 64 + 12)
    }
  })

  return (
    <div className={styles.HomePage}>
      <div className={styles.Section100vh} ref={ref1}>
        <div className={styles.Section100vhContent} ref={ref2}>
          <div className={classNames(styles.Nft, styles.Nft1)} />
          <img className={classNames(styles.Nft, styles.Nft2)} src={nft2} alt="NFT" />
          <img className={classNames(styles.Nft, styles.Nft3)} src={nft3} alt="NFT" />
          <img className={classNames(styles.Nft, styles.Nft4)} src={nft4} alt="NFT" />
          <div className={classNames(styles.Nft, styles.Nft5)} />
          <img className={classNames(styles.Nft, styles.Nft6)} src={nft6} alt="NFT" />
          <h1 className={styles.Title}>
            All <div className="_TextAccent">Aptos NFTs</div> in one place!
          </h1>
          <p className={styles.Description}>
            The easiest way to evaluate, purchase
            <br />
            and sell <span className="_TextAccent">Aptos NFTs</span> on all marketplaces at once.
            <br />
            Building in stealth, launching soon!
          </p>
          <button className={classNames('_Button big', styles.OpenDapp)}>Open dApp (soon)</button>
        </div>
      </div>

      <div className={styles.Container}>
        <div className={styles.AppPreview} style={{ marginTop: margin }}>
          <img className={styles.AppPreviewImage} src={appPreview} alt="AptosNFT.Market app" />
        </div>

        <hr />

        <div id="sale" className={styles.SaleSection}>
          <h2 className={classNames(styles.Title2, styles.SaleTitle)}>
            Public Sale for <span className="_TextAccent">Aptos</span> community
          </h2>
          <p className={classNames(styles.Description2, styles.SaleDescription)}>
            We believe in community ownership and will be implementing Public Sale for AptosNFT.market token{' '}
            <span className="_TextAccent">ANFT</span> within the next weeks. Whitelist will be open shortly.
            <br />
            Read{' '}
            <a className={styles.AnftDocsLink} href="#TODO">
              here for more
            </a>
            .<button className={classNames('_Button big', styles.GoToPublicSaleButton)}>Go to Public Sale</button>
          </p>
        </div>

        <hr />

        <div id="roadmap" className={styles.RoadmapSection}>
          <h2 className={classNames(styles.Title2, '_tac')}>Roadmap</h2>
          <p className={styles.RoadmapDescription}>
            Our high level roadmap. Read more in{' '}
            <a className={styles.LitepaperLink} href="#TODO">
              litepaper
            </a>{' '}
            (Soon).
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
              <a className={styles.CommunityLink} href="#TODO">
                <img className={styles.CommunityLinkIcon} src={twitter} alt="Twitter" />
                Follow us on Twitter
              </a>
            </li>
            <li>
              <a className={styles.CommunityLink} href="#TODO">
                <img className={styles.CommunityLinkIcon} src={telegram} alt="Telegram" />
                Join the Telegram community
              </a>
            </li>
            <li>
              <a className={styles.CommunityLink} href="#TODO">
                <img className={styles.CommunityLinkIcon} src={medium} alt="Medium" />
                Follow us on Medium
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
