import tw from "twin.macro"
import Container from "../general/Container"
import StrapiImage from "../general/StrapiImage"
import footer from "../../public/footer.json"
import { FooterText } from "../typography/Typography"
import Button from "../general/Button"
import Markdown from "../general/Markdown"
import Link from "@/components/general/Link"

const Column = tw.div`pl-6 border-white border-opacity-60 flex flex-col justify-center font-bold`

const Footer = () =>
{
  return (
    <div tw="bg-navy w-full py-20">
      <Container>
        <div tw="bg-navy max-width[1200px] mx-auto">
          <div tw="flex divide-x space-x-6 ">
            <div tw="flex-1">
              <StrapiImage image={footer.logo} />
              <FooterText tw="text-opacity-60 mt-8 text-14">{footer.description}</FooterText>
            </div>
            <Column >

              <FooterText tw="block w-full mb-4.5 uppercase ">{footer.menu_text}</FooterText>

              <div tw="grid grid-cols-2 gap-2.5">
                {footer.menu_links.map((item) => <Link key={item.id} link={item.link}>
                  <FooterText as="a" tw="text-opacity-60 text-14">{item.text}</FooterText>
                </Link>)}
              </div>
            </Column>
            <Column>
              <Button button={footer.join_button} />
            </Column>
          </div>
          <FooterText tw="mb-9 text-white text-opacity-60 mt-3.5 text-14">{footer.copywright}</FooterText>
          <div tw="text-white font-bold text-14">
            <Markdown text={footer.bottom_text} components={{ p: FooterText }} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
