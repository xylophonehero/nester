import tw from "twin.macro"
import { Container, StrapiImage, Button, Markdown, Link } from "@/components/general"
import { FooterText } from "@/components/typography"
import footer from "data/footer.json"
import { useEffect, useState } from "react"
import { FaTimes } from "react-icons/fa"
import { StyledButton } from "../general/Button"

const Column = tw.div`laptop:(pl-6) border-white border-opacity-60 flex flex-col justify-center font-bold`

const Footer = () => {
  const [ showRiskBanner, setShowRiskBanner ] = useState(false)
  const [ showCookieBanner, setShowCookieBanner ] = useState(false)

  const handleCloseCookieBanner = () => {
    setShowCookieBanner(false)
    window.localStorage.setItem("seenCookieBanner", "true")
  }

  const handleCloseRiskBanner = () => {
    setShowRiskBanner(false)
    window.localStorage.setItem("seenRiskBanner", "true")
  }

  useEffect(() => {
    const seenCookieBanner = window.localStorage.getItem("seenCookieBanner") || false
    const seenRiskBanner = window.localStorage.getItem("seenRiskBanner") || false
    if (!seenCookieBanner) setShowCookieBanner(true)
    if (!seenRiskBanner) setShowRiskBanner(true)
  }, [])

  return (

    <footer tw="bg-navy w-full pt-20 pb-4 tablet:pb-44 laptop:pb-36 relative z-30">
      <Container noAnimation>
        <div tw="bg-navy max-width[1200px] mx-auto">
          <div tw="flex flex-col space-y-8 laptop:(divide-x space-x-6 flex-row space-y-0) ">
            <div tw="flex-1">
              <StrapiImage image={footer.logo} />
              <FooterText tw="text-opacity-60 mt-8 text-14">{footer.description}</FooterText>
            </div>
            <FooterText tw="laptop:hidden text-white text-opacity-60 mt-3.5 text-14">{footer.copywright}</FooterText>
            <Column >

              <FooterText tw="block w-full mb-4.5 uppercase ">{footer.menu_text}</FooterText>

              <div tw="grid grid-cols-2 gap-2.5">
                {footer.menu_links.map((item) => <Link key={item.id} link={item.link}>
                  <FooterText tw="text-opacity-60 text-14">{item.text}</FooterText>
                </Link>)}
              </div>
            </Column>
            <Column>
              <Button button={footer.join_button} fit tw="mx-auto" />
            </Column>
          </div>
          <FooterText tw="hidden laptop:block text-white text-opacity-60 mt-3.5 text-14">{footer.copywright}</FooterText>
        </div>
      </Container>
      {showRiskBanner && <div tw="relative pt-8 laptop:(fixed pt-0) bottom-0 bg-navy bg-opacity-80 w-full z-40 px-4 tablet:px-6">
        <div tw="text-white font-bold text-14 py-2  w-full max-width[1200px] mx-auto">
          <Markdown text={footer.bottom_text} components={{ p: FooterText }} />
        </div>
        <button tw="absolute top-4 right-4 text-white text-21" onClick={handleCloseRiskBanner}>
          <FaTimes />
        </button>
      </div>}
      {showCookieBanner && <div tw="fixed bottom-4 laptop:bottom[200px] bg-purple rounded-2xl shadow-lg text-white max-w-3xl width[80vw] margin-right[10vw] margin-left[10vw] p-6">
        <div tw="mb-4">
          We use cookies to improve user experience, and analyze website traffic. For these reasons, we may share your site usage data with our social media, and analytics partners. By clicking “Accept Cookies,” you consent to store on your device all the technologies described in our Cookie Policy. You can change your cookie settings at any time by clicking “Cookie Preferences.”
        </div>
        <StyledButton as="button" size="small" color="blue_white" onClick={handleCloseCookieBanner}>
          Accept
        </StyledButton>
      </div>}
    </footer>
  )
}

export default Footer
