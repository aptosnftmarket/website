import classNames from 'classnames'

import { scrollToElement } from '../../utils'
import arrowDown from './arrowDown.svg'
import styles from './HomePage.module.scss'

// const communityLinks: { icon: IconName; text: string; link: string }[] = [
//   { icon: 'twitter', text: 'Follow us on Twitter', link: 'https://google.com' },
//   { icon: 'telegram', text: 'Join the AptosNFT.Market Telegram community', link: 'https://google.com' },
//   { icon: 'medium', text: 'Follow us on Medium', link: 'https://google.com' }
// ]

export function HomePage(): JSX.Element {
  return (
    <div className={styles.HomePage}>
      <div className={styles.Section100vh}>
        <h1 className={styles.Title}>
          All <div className="_TextAccent">Aptos NFTs</div> in one place!
        </h1>
        <p className={styles.Description}>
          The easiest way to evaluate, purchase
          <br />and sell <span className="_TextAccent">Aptos NFTs</span> on all marketplaces at once.
          <br />Building in stealth, launching soon!
        </p>
        <button className={classNames('_Button big', styles.OpenDapp)}>Open dApp (soon)</button>
      </div>

      {/*
      <div className={styles.CommunityTitle} id="anchor">
        <Typography className={styles.H2} variant="h2">
          Join <br className="_onlyMobile" />
          our community
        </Typography>
      </div>

      <ul className={styles.CommunityLinks}>
        {communityLinks.map(({ icon, text, link }) => (
          <li key={icon} className={styles.CommunityLinkItem}>
            <Link className={styles.CommunityLink} href={link} target="_blank">
              <Icon
                className={classNames(styles.CommunityLinkIcon, styles.IconWithWhiteBackground, '_hover')}
                icon={icon}
                customSize={80}
                fillColor="white"
                withHover
              />
              <Typography className={styles.Text}>{text}</Typography>
            </Link>
          </li>
        ))}
      </ul>
      */}
    </div>
  )
}
