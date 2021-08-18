import { ApprovalPurple } from "assets/ApprovalPurple"
import { StraightPath } from "assets/StraightPath"
import StrapiImage from "@/components/general/StrapiImage"
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
      "strokeDashoffset": inView ? "150" : "0px",
      "transition": "stroke-dashoffset 300ms ease-in",
    }
  }
])

const ColumnCard = ({ card, first, index, isCarousel }) => {
  const [ ref, inView ] = useInView({
    rootMargin: "-200px 0px",
    triggerOnce: true
  })

  return <div ref={ref} tw="flex w-full justify-center mx-auto">
    <div tw="hidden laptop:flex items-center flex-1 relative">
      {!first && <div tw="absolute bottom-full left[30px] text-purple">
        <StraightPath />
      </div>}
      {!first && <PathWrapper inView={inView} tw="text-navy">
        <StraightPath strokeDasharray="150" strokeWidth={8} />
      </PathWrapper>}
      <ApprovalWrapper inView={isCarousel || inView} >
        <ApprovalPurple />
      </ApprovalWrapper>
    </div>

    <CardWrapper inView={isCarousel || inView} tw="bg-gray-1 rounded-2.5xl flex flex-col mx-auto laptop:(flex-row) items-center relative max-width[560px] px-8 py-4 laptop:pr-16">
      <div tw="flex-shrink-0">
        <StrapiImage image={card.image} />
      </div>
      <div tw="flex-1 pl-4 text-center laptop:text-left">
        <h3 tw="font-bold text-18 text-purple mb-1">{card.title}</h3>
        <p tw="text-16 text-gray-4">{card.description}</p>
      </div>
    </CardWrapper>
    <div tw="hidden laptop:block flex-1" />
  </div>
}

export default ColumnCard
