import Footer from './Footer'
import Header from './Header'
import useShareStorage from 'hooks/useSharedStorage'
import { useEffect, useRef } from 'react'

const Layout = ({ children }) =>
{
  useShareStorage()
  const ref = useRef()
  useEffect(() =>
  {
    setTimeout(() =>
    {
      const win = ref.current.contentWindow
      win.postMessage("getUser", "http://localhost:3000")
      console.log("message sent from Next")
    }, 3000)

  }, [])
  return (
    <div tw="flex flex-col min-h-screen">
      <iframe ref={ref} tw="hidden" src="http://localhost:3000" id="ifr" />
      <Header />
      <main tw="flex-1" >
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
