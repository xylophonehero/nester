import { H1 } from "@/components/typography/Typography"
import Button from "@/components/general/Button"
import tw, { styled } from "twin.macro"
import StrapiImage from "../general/StrapiImage"

const Wrapper = styled.div(({ background_color }) => [
  tw`flex flex-col w-full text-white laptop:flex-row `,
  background_color === "navy" && tw`bg-navy`,
  background_color === "purple" && tw`bg-purple`,
])

const ImageText = ({ data }) =>
{
  return (
    <Wrapper background_color={data.background_color}>
      <div tw="flex-1 flex flex-col justify-center">
        <div tw="px-8 py-16 text-center laptop:(text-left pl-32)">
          <H1 as="h2" tw="mb-4">{data.title}</H1>
          <p tw="mb-6 text-18 leading-7">{data.description}</p>
          <Button button={data.button} fit tw="mx-auto laptop:mx-0" />
        </div>
      </div>
      <div tw="flex-1 relative w-full padding-top[100%] tablet:padding-top[75%] laptop:(min-height[50vh] pt-0) desktop:(min-height[75vh])">
        <StrapiImage image={data.image} layout="fill" objectFit="cover" />
        {/* <Image src={data.image.name} alt={data.image.alternativeText} layout="fill" objectFit="cover" /> */}
      </div>
    </Wrapper>
  )
}

export default ImageText
