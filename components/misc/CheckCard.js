import { ApprovalBlue, LongStraightPath } from "assets"
import { BsChevronRight } from "react-icons/bs"
import { Link, Markdown, StrapiImage } from "@/components/general"
import { H3 } from "@/components/typography"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"
import tw from "twin.macro"

const ApprovalWrapper = styled.div(({ inView }) => [
  tw`transform opacity-100 (transition duration-500 ease-in-out delay-300)`,
  !inView && tw`scale-50 opacity-0`,
])

const CardWrapper = styled.div(({ inView }) => [
  tw`transform opacity-100 (transition duration-500 ease-in-out delay-300)`,
  !inView && tw`translate-x-1/2 opacity-0`,
])

const PathWrapper = styled.div(({ inView }) => [
  tw`absolute bottom-full left[30px] `,
  {
    "path": {
      "strokeDashoffset": inView ? "491" : "0px",
      "transition": "stroke-dashoffset 300ms ease-in",
    }
  }
])

const CheckCard = ({ card, first, isCarousel }) => {
  const [ ref, inView ] = useInView({
    rootMargin: "-200px 0px",
    triggerOnce: true
  })

  return (

    <div ref={ref} tw="flex w-full justify-center ">
      <div tw="hidden laptop:flex items-center flex-1 w-full relative">
        {!first && <div tw="absolute bottom[calc(70%)] left[42px] text-blue">
          <LongStraightPath />
        </div>}
        {!first && <PathWrapper tw="absolute bottom[calc(70%)] left[42px] text-white" inView={inView}>
          <LongStraightPath strokeDasharray="491" strokeWidth={8} />
        </PathWrapper>}
        <ApprovalWrapper inView={isCarousel || inView} tw="my-8">
          <ApprovalBlue />
        </ApprovalWrapper>
      </div>
      <CardWrapper inView={isCarousel || inView} tw="bg-white rounded-2.5xl relative max-width[714px] laptop:flex-shrink-0 px-8 py-12 border-4 border-blue shadow-check-card">
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
      </CardWrapper>
      <div tw="hidden laptop:block flex-1 w-full" />
    </div>
  )
}

export default CheckCard