import Link from 'next/link'
import Header from '../../components/header'
import ExtLink from '../../components/ext-link'

import blogStyles from '../../styles/blog.module.css'
import sharedStyles from '../../styles/shared.module.css'
import theme from '../../theme'
import { useColorMode } from 'theme-ui'

import {
  getBlogLink,
  getDateStr,
  postIsPublished,
} from '../../lib/blog-helpers'
import Footer from '../../components/footer'
import { textBlock } from '../../lib/notion/renderers'
import getNotionUsers from '../../lib/notion/getNotionUsers'
import getBlogIndex from '../../lib/notion/getBlogIndex'

export async function getStaticProps({ preview }) {
  const postsTable = await getBlogIndex()

  const authorsToGet: Set<string> = new Set()
  const posts: any[] = Object.keys(postsTable)
    .map(slug => {
      const post = postsTable[slug]
      // remove draft posts in production
      if (!preview && !postIsPublished(post)) {
        return null
      }
      post.Authors = post.Authors || []
      for (const author of post.Authors) {
        authorsToGet.add(author)
      }
      return post
    })
    .filter(Boolean)

  const { users } = await getNotionUsers([...authorsToGet])

  posts.map(post => {
    post.Authors = post.Authors.map(id => users[id].full_name)
  })

  return {
    props: {
      preview: preview || false,
      posts,
    },
    unstable_revalidate: 10,
  }
}

export default ({ posts = [], preview }) => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <body>
      <div className={blogStyles.gridContainer}>
        <div className={sharedStyles.header}>
          <Header titlePre="Blog" />
        </div>
        <div className={blogStyles.main}>
          {preview && (
            <div className={blogStyles.previewAlertContainer}>
              <div className={blogStyles.previewAlert}>
                <b>Note:</b>
                {` `}Viewing in preview mode{' '}
                <Link href={`/api/clear-preview`}>
                  <button className={blogStyles.escapePreview}>
                    Exit Preview
                  </button>
                </Link>
              </div>
            </div>
          )}
          <div className={`${sharedStyles.layout} ${blogStyles.blogIndex}`}>
            <h1>Glass of Sky Blog</h1>

            {posts.length === 0 && (
              <p className={blogStyles.noPosts}>There are no posts yet</p>
            )}
            {posts.map(post => {
              return (
                <Link href="/blog/[slug]" as={getBlogLink(post.Slug)} passHref>
                  <div
                    className={blogStyles.postPreview}
                    key={post.Slug}
                    style={{
                      backgroundColor:
                        colorMode === 'light'
                          ? theme.colors.cardBackground
                          : theme.colors.modes.dark.cardBackground,
                    }}
                  >
                    <div className={blogStyles.titleContainer}>
                      {!post.Published && (
                        <span className={blogStyles.draftBadge}>Draft</span>
                      )}
                      <h3>{post.Page}</h3>
                    </div>
                    {post.Authors.length > 0 && (
                      <div className="authors">
                        {' '}
                        By: {post.Authors.join(' ')}
                      </div>
                    )}
                    {post.Date && (
                      <div className="posted">
                        Posted: {getDateStr(post.Date)}
                      </div>
                    )}
                    <p>
                      {(!post.preview || post.preview.length === 0) &&
                        'No preview available'}
                      {(post.preview || []).map((block, idx) =>
                        textBlock(block, true, `${post.Slug}${idx}`)
                      )}
                    </p>
                  </div>
                </Link>
              )
            })}
            <h4>
              Powered by <ExtLink href="https://nextjs.org">Next.js</ExtLink>{' '}
              and <ExtLink href="https://notion.so">Notion</ExtLink>
            </h4>
          </div>
        </div>
        <footer className={blogStyles.footer}>
          <Footer />
        </footer>
      </div>
    </body>
  )
}
