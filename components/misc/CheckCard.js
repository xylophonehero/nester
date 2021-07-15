import { ApprovalBlue } from "assets/ApprovalBlue"
import { LongStraightPath } from "assets/LongStraightPath"
import { BsChevronRight } from "react-icons/bs"
import "twin.macro"
import Markdown from "../general/Markdown"
import StrapiImage from "../general/StrapiImage"

const CheckCard = ({ card, first }) =>
{
  return (

    <div tw="bg-white rounded-2.5xl relative max-width[760px] px-8 py-12 border-4 border-blue shadow-check-card">
      <div tw="flex flex-col tablet:(flex-row space-x-8 pl-8)">
        <div tw="flex flex-col flex-1 items-center tablet:items-start">
          <StrapiImage image={card.image} />
          <Markdown text={card.text} />
        </div>
        <div tw="flex space-x-2.5 tablet:(flex-col space-y-2.5 space-x-0) justify-center my-8">
          {card.logos.map((logo) => <div tw="py-2 px-4 shadow-2 h-14 flex flex-col justify-center rounded-lg" key={logo.id}>
            <StrapiImage image={logo} />
          </div>)}
        </div>
      </div>
      <p tw="uppercase text-blue mt-8 text-center tablet:(pl-8 text-left)">Learn more<BsChevronRight tw="inline ml-2" /></p>
      <div tw="hidden desktop:block absolute top-1/2 -left-48 -translate-y-1/2 transform">
        <ApprovalBlue />
      </div>
      {!first && <div tw="absolute hidden desktop:block bottom-3/4 left[-148px] ">
        <LongStraightPath />
      </div>}
    </div>
  )
}

export default CheckCard