import Layout from '../components/layout/Layout'
import "../assets/fonts/fonts.css"
import GlobalStyles from '@/components/layout/GlobalStyles'
import { GlobalStyles as MacroStyles } from "twin.macro"

import UserContextProvider from 'context/UserContext'

function MyApp({ Component, pageProps })
{

  return <UserContextProvider>
    <Layout>
      <MacroStyles />
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  </UserContextProvider>
}

export default MyApp
