import tw from "twin.macro"
import { Container, StrapiImage, Button, Markdown, Link } from "@/components/general"
import { FooterText } from "@/components/typography"
import footer from "data/footer.json"

const Column = tw.div`laptop:(pl-6) border-white border-opacity-60 flex flex-col justify-center font-bold`

const Footer = () =>
{
  return (

    <footer tw="bg-navy w-full pt-20 pb-4 tablet:pb-44 laptop:pb-36 relative z-30">
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
      <div tw="relative pt-8 laptop:(fixed pt-0) bottom-0 bg-navy bg-opacity-80 w-full z-40 px-4 tablet:px-6">
        <div tw="text-white font-bold text-14 py-2  w-full max-width[1200px] mx-auto">
          <Markdown text={footer.bottom_text} components={{ p: FooterText }} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
