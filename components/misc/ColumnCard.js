import { ApprovalPurple } from "assets/ApprovalPurple"
import "twin.macro"
import StrapiImage from "../general/StrapiImage"

const ColumnCard = ({ card }) =>
{
  return (

    <div tw="bg-gray-1 rounded-2.5xl flex items-center relative max-width[560px] p-8 pr-16">
      <div tw="flex-shrink-0">
        <StrapiImage image={card.image} />
      </div>
      <div tw="flex-1 pl-4">
        <h3 tw="font-bold text-18 text-purple mb-1">{card.title}</h3>
        <p tw="text-16 text-gray-4">{card.description}</p>
      </div>
      <div tw="absolute top-1/2 -left-32 -translate-y-1/2 transform">
        <ApprovalPurple />
      </div>
    </div>
  )
}

export default ColumnCard
