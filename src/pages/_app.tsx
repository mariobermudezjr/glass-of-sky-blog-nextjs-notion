import '../styles/global.css'
import Footer from '../components/footer'

import theme from '../theme'
import { ThemeProvider } from 'theme-ui'

export default ({ Component, pageProps }) => (
  <>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  </>
)
