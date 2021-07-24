/* eslint-disable react/display-name */
import { ApprovalBlue, LongStraightPath } from "assets"
import { BsChevronRight } from "react-icons/bs"
import "twin.macro"
import { Link, Markdown, StrapiImage } from "@/components/general"
import { H3 } from "@/components/typography"

const CheckCard = ({ card, first }) =>
{
  return (

    <div tw="flex w-full justify-center ">
      <div tw="hidden laptop:flex items-center flex-1 w-full relative">
        {!first && <div tw="absolute bottom[calc(70%)] left[42px] ">
          <LongStraightPath />
        </div>}
        <div tw="my-8">
          <ApprovalBlue />
        </div>
      </div>
      <div tw="bg-white rounded-2.5xl relative max-width[714px] laptop:flex-shrink-0 px-8 py-12 border-4 border-blue shadow-check-card">
        <div tw="flex flex-col tablet:(flex-row space-x-8 pl-8) mb-8">
          <div tw="flex flex-col flex-1 items-center tablet:items-start">
            <StrapiImage image={card.image} />
            <Markdown text={card.text} components={{
              h3: ({ children }) => <H3 tw="text-28 tablet:text-36 mb-6">{children}</H3>
            }} />
          </div>
          <div tw="flex space-x-2.5 tablet:(flex-col space-y-2.5 space-x-0 -mb-6) justify-center my-4">
            {card.logos.map((logo) => <div tw="py-2 px-4 shadow-2 h-14 flex flex-col justify-center rounded-lg" key={logo.id}>
              <StrapiImage image={logo} />
            </div>)}
          </div>
        </div>
        <Link link={card.link} tw="uppercase text-blue text-center tablet:(pl-8 text-left) text-18">
          Learn more<BsChevronRight tw="inline ml-2" />
        </Link >
      </div>
      <div tw="hidden laptop:block flex-1 w-full" />
    </div>
  )
}

export default CheckCard