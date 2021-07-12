import Layout from '../components/layout/Layout'
import "../assets/fonts/fonts.css"
import GlobalStyles from '@/components/layout/GlobalStyles'
import "twin.macro"

function MyApp({ Component, pageProps })
{
  return <Layout>
    <GlobalStyles />
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
