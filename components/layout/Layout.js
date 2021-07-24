import { Header, Footer } from "@/components/layout"

const Layout = ({ children }) =>
{
  return (
    <div tw="flex flex-col min-h-screen">
      <Header />
      <main tw="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
