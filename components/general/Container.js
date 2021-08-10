import React from 'react'
import tw, { styled } from "twin.macro"
import { convertBrackets } from 'utils/convertBrackets'
import { Body, H1, H2 } from '@/components/typography'
import { Button } from "@/components/general"
import { useInView } from 'react-intersection-observer'

const Wrapper = styled.section(({ backgroundColor, removeMargin }) => [
  tw`px-4 tablet:px-6`,
  removeMargin && tw`px-0 laptop:px-0`,
  backgroundColor === "navy" && tw`text-white bg-navy`,
  backgroundColor === "purple" && tw`text-white bg-purple`,
  backgroundColor === "gray" && tw`text-white bg-gray-0`,
])

const AnimationWrapper = styled.div(({ inView }) => [
  tw`transform opacity-100 mx-auto (transition duration-700)`,
  !inView && tw`translate-y-48 opacity-0`
])

const Container = ({ children, removeMargin, data = {}, sectionId, noAnimation = false, ...rest }) =>
{
  const [ref, inView] = useInView({
    rootMargin: "-200px 0px",
    triggerOnce: true
  })

  return (
    <Wrapper backgroundColor={data.background_color} removeMargin={removeMargin} id={sectionId}>
      <AnimationWrapper ref={ref} {...rest} inView={noAnimation || inView}>
        {data.title && <H1 as="h2" tw="text-center mb-5 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: convertBrackets(data.title) }} />}
        {data.subtitle && <H2 as="p" tw="desktop:text-28 text-center text-gray-2 whitespace-pre-line mb-4" dangerouslySetInnerHTML={{ __html: convertBrackets(data.subtitle) }} />}
        {data.description && <Body tw="text-center mx-auto text-gray-4 laptop:whitespace-pre-line" dangerouslySetInnerHTML={{ __html: convertBrackets(data.description) }} />}
        {children}
        {data.button && <Button button={data.button} tw="mx-0 laptop:(w-fit mx-auto) mt-8" />}
      </AnimationWrapper>
    </Wrapper>
  )
}

export default Container
