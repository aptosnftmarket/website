import { Icon, IconName, Link, Typography } from '@onestaree/ui-kit'
import classNames from 'classnames'

import { scrollToElement } from '../../utils'
import arrowDown from './arrowDown.svg'
import styles from './HomePage.module.scss'

const communityLinks: { icon: IconName; text: string; link: string }[] = [
  { icon: 'twitter', text: 'Follow us on Twitter', link: 'https://google.com' },
  { icon: 'telegram', text: 'Join the AptosNFT Market Telegram community', link: 'https://google.com' },
  { icon: 'medium', text: 'Follow us on Medium', link: 'https://google.com' }
]

export function HomePage(): JSX.Element {
  return (
    <div className={styles.HomePage}>
      <div className={styles.Section100vh}>
        <div className={styles.ScrollDownButton} onClick={(): void => scrollToElement('anchor', 16)}>
          <Icon className={styles.ScrollDownButtonIcon} customIcon={arrowDown} customHeight={20} customWidth={8} />
          <Icon
            className={classNames(styles.IconWithWhiteBackground, '_hover')}
            icon="toastSuccess"
            customSize={80}
            fillColor="white"
            withHover
            rounded
          />
        </div>
      </div>

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
    </div>
  )
}
