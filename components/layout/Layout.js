import { Header, Footer } from "@/components/layout"

const Layout = ({ children, noRender }) =>
{
  if (noRender) return <main>
    {children}
  </main>

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
