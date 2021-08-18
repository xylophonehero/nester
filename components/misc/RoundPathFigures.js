import React from 'react'
import { StrapiImage } from '@/components/general'
import { Body, H3 } from '@/components/typography'
import { LeftToRightCurve, RightToLeftCurve } from 'assets'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import tw from 'twin.macro'

const PathAnimationWrapper = styled.div(({ inView }) => [
  {
    "path": {
      "strokeDashoffset": inView ? "322" : "0",
      "transition": "stroke-dashoffset 300ms ease-in",
    }
  }
])

const PathAnimationWrapperAlt = styled.div(({ inView }) => [
  {
    "path": {
      "strokeDashoffset": inView ? "350" : "0",
      "transition": "stroke-dashoffset 300ms ease-in",
    }
  }
])

const AnimationWrapper = styled.div(({ inView }) => [
  tw`transform opacity-100 mx-auto (transition duration-500)`,
  !inView && tw`scale-90 translate-y-48 opacity-0`
])

const RoundPathFigures = ({ figure, index }) => {
  const [ ref, inView ] = useInView({
    rootMargin: "-100px 0px",
    triggerOnce: true
  })
  return (
    <div tw="laptop:odd:self-start laptop:even:self-end w-full max-width[350px] relative">
      <AnimationWrapper ref={ref} inView={inView}>
        <StrapiImage image={figure.image} />
        <p tw="text-blue font-bold text-18 mb-2">{`STEP ${index + 1}`}</p>
        <H3 tw="desktop:text-28">{figure.title}</H3>
        <Body tw="max-width[320px] text-gray-4">{figure.description}</Body>
      </AnimationWrapper>
      {index === 1 && <div tw="hidden laptop:block absolute bottom-full -left-8 text-blue">
        <LeftToRightCurve />
        <PathAnimationWrapper inView={inView} tw="absolute top-0 text-white">
          <LeftToRightCurve strokeDasharray="322" strokeWidth={8} />
        </PathAnimationWrapper>
      </div>}

      {index === 2 && <div tw="hidden laptop:block absolute left-full top-8 text-blue">
        <RightToLeftCurve />
        <PathAnimationWrapperAlt inView={inView} tw="absolute top-0 text-white">
          <RightToLeftCurve strokeDasharray="350" strokeWidth={8} />
        </PathAnimationWrapperAlt>
      </div>}

    </div >
  )
}

export default RoundPathFigures
