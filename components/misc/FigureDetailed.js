import "twin.macro"
import { StrapiImage } from "@/components/general"
import { H4 } from "@/components/typography"
import BasicAnimation from "../general/BasicAnimation"

const FigureDetailed = ({ figure, index, isCarousel }) => {
  return (
    <div tw="flex-1 max-width[300px]  mx-auto laptop:mx-0">
      <BasicAnimation index={index} noAnimation={isCarousel} tw="flex flex-col items-center text-center">
        {figure.image && <StrapiImage image={figure.image} />}
        <H4 as="p" tw="h-12 mt-4 mb-2">{figure.title}</H4>
        <p tw="text-gray-2 text-16">{figure.description}</p>
      </BasicAnimation>
    </div>
  )
}

export default FigureDetailed
