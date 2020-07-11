import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import { useColorMode, Button } from 'theme-ui'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Blog', page: '/blog' },
  { label: 'Contact', page: '/contact' },
]

const logoUrl = 'https://i.ibb.co/dbHFM1C/avatar.png'

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()
  const [colorMode, setColorMode] = useColorMode()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} Glass of Sky Blog</title>
        <meta
          name="description"
          content="A place where you can leave your ideas and thougts"
        />
        <meta name="og:title" content="Glass of Sky Blog" />
        <meta property="og:image" content={logoUrl} />
        <meta name="twitter:site" content="@glassofsky_" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={logoUrl} />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
      <Button
        onClick={e => {
          setColorMode(colorMode === 'light' ? 'dark' : 'light')
        }}
      >
        {colorMode === 'light' ? 'Light' : 'Dark'}
      </Button>
    </header>
  )
}
