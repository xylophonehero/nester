import tw, { styled } from "twin.macro"
import { Display, H1, H2, H4 } from "@/components/typography/Typography"
import Button from "../general/Button"
import StrapiImage from "../general/StrapiImage"
import { convertBrackets } from "utils/convertBrackets"
import { BsChevronCompactDown } from "react-icons/bs"
import CircleFigures from "../misc/CircleFigures"

const Wrapper = styled.div(({ layout }) => [
  tw`w-full px-4 tablet:px-6 laptop:px-32 flex flex-row justify-center py-32 relative h-screen max-height[calc(100vh - 60px)] desktop:max-height[calc(100vh - 80px)]`,
])

const TextWrapper = styled.div(({ layout }) => [
  tw`relative flex flex-col justify-center text-center flex[2 1 0%]`,
  layout === "center" && tw`items-center`,
  layout === "left_with_clip" && tw`items-center tablet:(text-left items-start)`
])

const BackgroundImage = styled(StrapiImage)(({ layoutStyle }) => [
  layoutStyle === "center" && tw`opacity-40`,
])

const Title = styled(H1)(({ layout }) => [
  tw`mb-8`,
  layout === "center" && tw`text-purple`,
  layout === "left_with_clip" && tw`max-width[18ch]`,
])

const Hero = ({ data }) =>
{
  return (
    <Wrapper layout={data.layout}>
      {data.background_image && <BackgroundImage layoutStyle={data.layout} image={data.background_image} layout="fill" objectFit="cover" objectPosition="center" />}
      <TextWrapper layout={data.layout}>
        <Title layout={data.layout}>{data.title}</Title>
        {data.subtitle && data.subtitle_size === "display" && <Display tw="mb-8 max-width[24ch]">{data.subtitle}</Display>}
        {data.subtitle && data.subtitle_size === "medium" && <H2 as="p" tw="mb-8 max-width[40ch]">{data.subtitle}</H2>}
        {data.circle_figures.length > 0 && <CircleFigures figures={data.circle_figures} />}
        {data.description && <p tw="mb-8 max-width[60ch] text-18" dangerouslySetInnerHTML={{ __html: convertBrackets(data.description) }} />}
        {data.button_group.length > 0 && <div tw="flex flex-col space-y-4 items-center tablet:(flex-row space-x-4 space-y-0)">
          {data.button_group.map((button) => <Button key={button.id} button={button} fit />)}
        </div>}
      </TextWrapper>
      {data.arrow_text && <div tw="absolute bottom-8 w-full flex flex-col items-center">
        <H4 as="p">{data.arrow_text}</H4>
        <BsChevronCompactDown tw="text-28" />
      </div>}
      {data.layout === "left_with_clip" && <div tw="laptop:flex-1" />}
    </Wrapper>
  )
}

export default Hero
