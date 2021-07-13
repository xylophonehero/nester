import Layout from '../components/layout/Layout'
import "../assets/fonts/fonts.css"
import GlobalStyles from '@/components/layout/GlobalStyles'
import { GlobalStyles as MacroStyles } from "twin.macro"

function MyApp({ Component, pageProps })
{
  return <Layout>
    <MacroStyles />
    <GlobalStyles />
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
