import "twin.macro"
import StrapiImage from "../general/StrapiImage"
import { H4 } from "../typography/Typography"

const FigureDetailed = ({ figure }) =>
{
  return (
    <div tw="flex flex-col items-center text-center flex-1 max-width[300px] mx-auto">
      {figure.image && <StrapiImage image={figure.image} />}
      <H4 as="p" tw="h-12 mt-4 mb-2">{figure.title}</H4>
      <p tw="text-gray-2 text-16">{figure.description}</p>
    </div>
  )
}

export default FigureDetailed
