import React from 'react'
import tw, { styled } from "twin.macro"
import { convertBrackets } from 'utils/convertBrackets'
import { H1, H3 } from '../typography/Typography'
import Button from './Button'

const Wrapper = styled.div(({ backgroundColor, removeMargin }) => [
  tw`px-4 tablet:px-6`,
  removeMargin && tw`px-0 laptop:px-0`,
  backgroundColor === "navy" && tw`text-white bg-navy`,
  backgroundColor === "purple" && tw`text-white bg-purple`,
  backgroundColor === "gray" && tw`text-white bg-gray-0`,
])

const Container = ({ children, removeMargin, data = {}, ...rest }) =>
{
  return (
    <Wrapper backgroundColor={data.background_color} removeMargin={removeMargin}>
      <div {...rest} tw="mx-auto">
        {data.title && <H1 as="h2" tw="text-center mb-5">{data.title}</H1>}
        {data.subtitle && <H3 as="p" tw="text-center text-gray-2 whitespace-pre-line">{data.subtitle}</H3>}
        {data.description && <p tw="text-center max-width[65ch] mx-auto text-gray-4 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: convertBrackets(data.description) }} />}
        {children}
        {data.button && <Button button={data.button} fit tw="mx-auto" />}
      </div>
    </Wrapper>
  )
}

export default Container
