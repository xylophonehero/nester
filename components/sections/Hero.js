import tw, { styled } from "twin.macro"
import { Display, H1, H2, H4 } from "@/components/typography"
import { Button, StrapiImage } from "@/components/general"
import { convertBrackets } from "utils"
import { BsChevronCompactDown } from "react-icons/bs"
import { CircleFigures } from "@/components/misc"
import { useEffect, useState } from "react"

const Wrapper = styled.section(({ layout }) => [
  tw`w-full flex flex-col justify-end laptop:(flex-row justify-center)  relative  min-height[calc(100vh - 60px)] desktop:min-height[calc(100vh - 80px)]`,
])

const TextWrapper = styled.div(({ layout, inView }) => [
  tw`relative flex flex-col justify-center px-5 desktop:px-36 (transition duration-700) transform opacity-100`,
  layout === "center" && tw`items-center flex-1 my-16 text-center`,
  layout === "left_with_clip" && tw`justify-end items-center pb-14 bg-white to-white-60 laptop:(px-30 flex[2 1 0%] text-left items-start justify-center bg-transparent)`,
  !inView && tw`scale-90 opacity-0 translate-y-30`
])

const BackgroundImage = styled.div(({ layout }) => [
  tw`absolute inset-0`,
  layout === "center" && tw`opacity-50`,
  layout === "left_with_clip" && tw`max-height[60vh] -mt-12 laptop:(max-height[100vh] mt-0)`,
  {
    "img": layout === "center" ? tw`object-center` : tw`object-position[90%] laptop:object-position[24%]`
  },
])

const Title = styled(H1)(({ layout }) => [
  tw`mb-8`,
  layout === "center" && tw`text-purple`,
  layout === "left_with_clip" && tw`laptop:max-width[18ch] text-32 tablet:text-48 desktop:text-64`,
])

const Description = styled.p(({ layout }) => [
  tw`mb-7 text-16 tablet:text-18 `,
  layout === "left_with_clip" && tw`laptop:(text-18 max-width[40ch]) desktop:(font-bold text-28 max-width[30ch])`,
  layout === "center" && tw`tablet:whitespace-pre-line laptop:(text-21 max-width[60ch])`,
])

const ButtonGroup = styled.div(({ layout }) => [
  tw`w-full flex flex-col space-y-4 items-stretch laptop:(flex-row space-x-4 space-y-0 justify-center)`,
  layout === "left_with_clip" && tw`laptop:justify-start`
])

const Fade = styled.div(({ layout }) => [
  layout === "left_with_clip" && tw`relative flex-shrink-0 block w-full h-32 mt-32 bg-gradient-to-t from-white laptop:hidden`
])

const Hero = ({ data, sectionId }) =>
{
  const [inView, setInView] = useState(false)
  useEffect(() =>
  {
    setInView(true)
  }, [])
  return (
    <Wrapper id={sectionId} layout={data.layout}>
      {data.background_image && <BackgroundImage layout={data.layout}  >
        <StrapiImage image={data.background_image} layout="fill" objectFit="cover" priority />
        <div tw="absolute bottom-0 w-full">
          <Fade layout={data.layout} />
        </div>
      </BackgroundImage>}
      <Fade layout={data.layout} />
      <TextWrapper layout={data.layout} inView={inView}>
        <Title layout={data.layout}>{data.title}</Title>
        {data.subtitle && data.subtitle_size === "display" && <Display tw="mb-7 max-width[24ch]">{data.subtitle}</Display>}
        {data.subtitle && data.subtitle_size === "medium" && <H2 as="p" tw="mb-7 max-width[40ch] ">{data.subtitle}</H2>}
        {data.circle_figures.length > 0 && <CircleFigures figures={data.circle_figures} />}
        {data.description && <Description layout={data.layout} dangerouslySetInnerHTML={{ __html: convertBrackets(data.description) }} />}
        {data.button_group.length > 0 && <ButtonGroup layout={data.layout}>
          {data.button_group.map((button) => <Button tw="w-full laptop:w-fit " key={button.id} button={button} />)}
        </ButtonGroup>}
      </TextWrapper>
      {data.arrow_text && <div tw="absolute bottom-8 w-full flex flex-col items-center">
        <H4 as="p">{data.arrow_text}</H4>
        <BsChevronCompactDown tw="text-28" />
      </div>}
      {/* {data.layout === "left_with_clip" && <div tw="laptop:flex-1" />} */}
    </Wrapper>
  )
}

export default Hero
