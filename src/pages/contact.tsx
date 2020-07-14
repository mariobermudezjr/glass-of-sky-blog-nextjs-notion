import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Footer from '../components/footer'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'

const contact1 = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/MarioBermudezJ1',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/mariobermudezjr',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/mario-bermudez/',
  },
]

const contact2 = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/glassofsky_',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/lasriajs/',
  },
]

export default () => (
  <body>
    <div className={contactStyles.gridContainer}>
      <div className={contactStyles.header}>
        <Header titlePre="Contact" />
      </div>

      <div className={contactStyles.main}>
        <div className={sharedStyles.layout}>
          <img
            src="/avatar.png"
            alt="avatar with gos logo"
            height="100"
            width="100"
          />
          <h1>Contact</h1>
          <div className={contactStyles.name}>Mario Bermudez JR</div>
          <div className={contactStyles.name}>Remote SWE in</div>
          <div className={contactStyles.nameStyled}>
            <ExtLink href="https://mariobermudezjr.com">Los Angeles</ExtLink>
          </div>
          <div className={contactStyles.links}>
            {contact1.map(({ Comp, link, alt }) => {
              return (
                <ExtLink key={link} href={link} aria-label={alt}>
                  <Comp height={32} />
                </ExtLink>
              )
            })}
          </div>
          <div className={contactStyles.name}>Lasria Joynetta Sartika</div>{' '}
          <div className={contactStyles.name}>Remote PM in</div>
          <div className={contactStyles.nameStyled}>
            <ExtLink href="https://glass-of-sky.vercel.app/">Jakarta</ExtLink>
          </div>
          <div className={contactStyles.links}>
            {contact2.map(({ Comp, link, alt }) => {
              return (
                <ExtLink key={link} href={link} aria-label={alt}>
                  <Comp height={32} />
                </ExtLink>
              )
            })}
          </div>
        </div>
      </div>
      <footer className={contactStyles.footer}>
        <Footer />
      </footer>
    </div>
  </body>
)
