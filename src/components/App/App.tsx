import './styles/index.scss'

import { Button, Icon, Link, Typography } from '@onestaree/ui-kit'
import classNames from 'classnames'

import logo from '../../../public/icon.svg'
import { HomePage } from '../../pages'
import styles from './App.module.scss'
import logoText from './logoText.svg'

export function App(): JSX.Element {
  return (
    <>
      <header className={styles.Header}>
        <div className={styles.Logo}>
          {/*TODO*/}
        </div>
        <div className={styles.HeaderButtons}>
          <Link icon="twitter" iconCustomSize={28} href="https://google.com" />
          <Link icon="medium" iconCustomSize={28} href="https://google.com" />
          <Button className={styles.DappButton} title="dApp Soon" size="small" />
        </div>
      </header>
      <main className={styles.Content}>
        <HomePage />
      </main>
      <footer className={styles.Footer}>
        <div className={styles.Policies}>
          <Link className={styles.Policy} href="#" target="_self">
            <Typography className={styles.FooterText} variant="text2">
              T&Cs
            </Typography>
          </Link>
          <Link className={styles.Policy} href="#" target="_self">
            <Typography className={styles.FooterText} variant="text2">
              Privacy Policy
            </Typography>
          </Link>
        </div>

        <div className={styles.FooterButtons}>
          <Link icon="twitter" iconCustomSize={28} href="https://google.com" />
          <Link icon="medium" iconCustomSize={28} href="https://google.com" />
        </div>

        <Typography className={styles.FooterText} variant="text2">
          © Copyright AptosNFT Market 2022
        </Typography>
      </footer>
    </>
  )
}
