import { H1 } from "@/components/typography"
import { Button, StrapiImage } from "@/components/general"
import tw, { styled } from "twin.macro"
import { convertBrackets } from "utils"
import { useInView } from "react-intersection-observer"

const Wrapper = styled.section(({ background_color }) => [
  tw`flex flex-col-reverse w-full text-white laptop:flex-row `,
  background_color === "navy" && tw`bg-navy`,
  background_color === "purple" && tw`bg-purple`,
])

const AnimationWrapper = styled.div(({ inView }) => [
  tw`transform opacity-100 (transition duration-700)`,
  !inView && tw`scale-90 opacity-0 translate-y-30`
])

const ImageText = ({ data, sectionId }) =>
{
  const [ref, inView] = useInView({
    rootMargin: "-150px 0px",
    triggerOnce: true
  })

  return (
    <Wrapper background_color={data.background_color} id={sectionId}>
      <AnimationWrapper ref={ref} tw="flex-1 flex flex-col justify-center" inView={inView}>
        <div tw="px-8 py-16 laptop:pl-20 desktop:(pl-32)">
          <H1 as="h2" tw="mb-4" dangerouslySetInnerHTML={{ __html: convertBrackets(data.title) }} />
          <p tw="mb-6 text-18 leading-7">{data.description}</p>
          <Button button={data.button} tw="mx-auto w-full laptop:(mx-0 width[fit-content])" />
        </div>
      </AnimationWrapper>
      <div tw="flex-1 relative w-full padding-top[95%] tablet:padding-top[60%] laptop:(min-height[50vh] pt-0) desktop:(min-height[75vh])">
        <StrapiImage image={data.image} layout="fill" objectFit="cover" quality={50} />
        {/* <Image src={data.image.name} alt={data.image.alternativeText} layout="fill" objectFit="cover" /> */}
      </div>
    </Wrapper>
  )
}

export default ImageText
