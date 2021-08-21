import React from 'react'
import { StrapiImage } from '@/components/general'
import { H3 } from '@/components/typography'
import tw, { styled } from "twin.macro"
import { LeftToRightLine, RightToLeftLine } from 'assets'
import { useInView } from 'react-intersection-observer'

const Title = styled(H3)(({ backgroundColor }) => [
  tw`laptop:whitespace-pre-line`,
  backgroundColor === "white" && tw`text-purple`,
  backgroundColor === "navy" && tw`text-blue`,
])

const Text = styled.p(({ backgroundColor }) => [
  tw`mb-4 text-16 tablet:text-18`,
  backgroundColor === "white" && tw`text-gray-4`,
  backgroundColor === "navy" && tw`text-gray-1`,
])

const AnimationWrapper = styled.div(({ inView }) => [
  tw`transform opacity-100 mx-auto (transition duration-500)`,
  !inView && tw`scale-90 translate-y-48 opacity-0`
])

const PathAnimationWrapper = styled.div(({ inView, backgroundColor }) => [
  backgroundColor === "white" && tw`text-white`,
  backgroundColor === "navy" && tw`text-navy`,
  {
    "path": {
      "strokeDashoffset": inView ? "272" : "0",
      "transition": "stroke-dashoffset 300ms ease-in",
    }
  }
])

const StraightPathFigures = ({ figure, index, backgroundColor, isCarousel }) => {
  const [ ref, inView ] = useInView({
    rootMargin: "-200px 0px",
    triggerOnce: true
  })
  return (<div tw="odd:self-start even:self-end">
    {index !== 0 && <div tw="hidden laptop:block">
      {index % 2 === 0 ?
        <div tw="ml-64 relative text-purple">
          <RightToLeftLine />
          <PathAnimationWrapper inView={isCarousel || inView} backgroundColor={backgroundColor} tw="absolute top-0">
            <RightToLeftLine strokeDasharray="272" strokeWidth={8} />
          </PathAnimationWrapper>
        </div>
        :
        <div tw="-ml-8 relative text-purple">
          <LeftToRightLine />
          <PathAnimationWrapper inView={isCarousel || inView} backgroundColor={backgroundColor} tw="absolute top-0">
            <LeftToRightLine strokeDasharray="272" strokeWidth={8} />
          </PathAnimationWrapper>
        </div>
      }
    </div>}
    <AnimationWrapper ref={ref} inView={isCarousel || inView} tw=" width[300px] laptop:(width[700px] flex-row mx-0 space-x-4)  mb-0 flex flex-col  mx-auto z-10 relative">
      <div tw="flex-shrink-0 flex justify-center laptop:block">
        <StrapiImage image={figure.image} />
      </div>
      <div tw="flex-1 -mt-12 laptop:mt-16">
        <p tw="text-purple font-bold text-28 tablet:text-36 mb-3">{`0${index + 1}`}</p>
        <Title backgroundColor={backgroundColor}>{figure.title}</Title>
        <Text backgroundColor={backgroundColor}>{figure.description}</Text>
      </div>
    </AnimationWrapper>
  </div>
  )
}

export default StraightPathFigures
