import Layout from '../components/layout/Layout'
import "../assets/fonts/fonts.css"
import GlobalStyles from '@/components/layout/GlobalStyles'
import { GlobalStyles as MacroStyles } from "twin.macro"

import UserContextProvider from 'context/UserContext'
import { useEffect } from 'react'

function MyApp({ Component, pageProps })
{
  const slug = pageProps.data?.slug

  useEffect(() =>
  {
    const scrollToTop = () =>
    {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'auto',
      })
    }
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    if (isIOS)
    {
      setTimeout(() =>
      {
        scrollToTop()
      }, 5)
    }
  }, [slug])

  return <UserContextProvider>
    <Layout>
      <MacroStyles />
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  </UserContextProvider>
}

export default MyApp
