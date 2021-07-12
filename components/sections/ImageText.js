import Image from "next/image"
import { H2 } from "@/components/typography/Typography"
import Button from "@/components/general/Button"
import tw, { styled } from "twin.macro"
import StrapiImage from "../general/StrapiImage"

const Wrapper = styled.div(({ background_color }) => [
  tw`flex flex-row w-full text-white min-height[75vh]`,
  background_color === "navy" && tw`bg-navy`,
  background_color === "purple" && tw`bg-purple`,
])

const ImageText = ({ data }) =>
{
  return (
    <Wrapper background_color={data.background_color}>
      <div tw="flex-1 flex flex-col justify-center">
        <div tw="py-32 pl-32 pr-8">
          <H2 tw="mb-4">{data.title}</H2>
          <p tw="mb-6">{data.description}</p>
          <Button button={data.button} fit />
        </div>
      </div>
      <div tw="flex-1 relative ">
        <StrapiImage image={data.image} layout="fill" objectFit="cover" />
        {/* <Image src={data.image.name} alt={data.image.alternativeText} layout="fill" objectFit="cover" /> */}
      </div>
    </Wrapper>
  )
}

export default ImageText
