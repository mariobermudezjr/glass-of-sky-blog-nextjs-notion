import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Blog', page: '/blog' },
  { label: 'Contact', page: '/contact' },
]

const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'
const logoUrl =
  'data:image/png;base64,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'

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} Glass of Sky Blog</title>
        <meta
          name="description"
          content="An example Next.js site using Notion for the blog"
        />
        <meta name="og:title" content="Glass of Sky Blog" />
        <meta property="og:image" content={logoUrl} />
        <meta name="twitter:site" content="@_ijjk" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
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
    </header>
  )
}
