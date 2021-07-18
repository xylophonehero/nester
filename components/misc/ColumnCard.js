import { ApprovalPurple } from "assets/ApprovalPurple"
import { StraightPath } from "assets/StraightPath"
import "twin.macro"
import StrapiImage from "../general/StrapiImage"

const ColumnCard = ({ card, first }) =>
{
  return (

    <div tw="flex w-full justify-center mx-auto">
      {/* <div tw="hidden laptop:block absolute top-1/2 -left-32 -translate-y-1/2 transform">
          <ApprovalPurple />
        </div> */}
      <div tw="hidden laptop:flex items-center flex-1 relative">
        {!first && <div tw="absolute bottom-full left[30px] ">
          <StraightPath />
        </div>}
        <ApprovalPurple />
      </div>

      <div tw="bg-gray-1 rounded-2.5xl flex flex-col mx-auto laptop:(flex-row) items-center relative max-width[560px] p-8 laptop:pr-16">
        <div tw="flex-shrink-0">
          <StrapiImage image={card.image} />
        </div>
        <div tw="flex-1 pl-4 text-center laptop:text-left">
          <h3 tw="font-bold text-18 text-purple mb-1">{card.title}</h3>
          <p tw="text-16 text-gray-4">{card.description}</p>
        </div>
      </div>
      <div tw="hidden laptop:block flex-1" />
    </div>
  )
}

export default ColumnCard
