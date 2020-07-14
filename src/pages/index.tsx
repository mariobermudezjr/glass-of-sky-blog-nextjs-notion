import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'

import Footer from '../components/footer'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <body>
    <div className={sharedStyles.gridContainer}>
      <div className={sharedStyles.header}>
        <Header titlePre="Home" />
      </div>

      <div className={sharedStyles.main}>
        <div className={sharedStyles.layout}>
          <img
            src="/avatar.png"
            height="100"
            width="100"
            alt="glass-of-sky-logo"
          />
          <h1>Glass of Sky</h1>
          <h2>a place where you can leave your ideas and thoughts</h2>
        </div>
      </div>
      <footer className={sharedStyles.footer}>
        <Footer />
      </footer>
    </div>
  </body>
)
