import tw from "twin.macro"
import Container from "../general/Container"
import StrapiImage from "../general/StrapiImage"
import footer from "../../public/footer.json"
import { FooterText } from "../typography/Typography"
import Button from "../general/Button"
import Markdown from "../general/Markdown"
import Link from "@/components/general/Link"

const Column = tw.div`laptop:(pl-6) border-white border-opacity-60 flex flex-col justify-center font-bold`

const Footer = () =>
{
  return (

    <div tw="bg-navy w-full pt-20 pb-36">
      <Container>
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
      <div tw="fixed bottom-0 bg-navy bg-opacity-80 w-full">
        <div tw="text-white font-bold text-14 py-2  w-full max-width[1200px] mx-auto">
          <Markdown text={footer.bottom_text} components={{ p: FooterText }} />
        </div>
      </div>
    </div>
  )
}

export default Footer
