import React from 'react'
import StrapiImage from '../general/StrapiImage'
import { H3 } from '../typography/Typography'
import tw, { styled } from "twin.macro"
import { LeftToRightLine } from 'assets/LeftToRightLine'
import { RightToLeftLine } from 'assets/RightToLeftLine'

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

const StraightPathFigures = ({ figure, index, backgroundColor }) =>
{
  return (<div tw="odd:self-start even:self-end">
    {index !== 0 && <div tw="hidden laptop:block">
      {index % 2 === 0 ?
        <div tw="ml-64">
          <RightToLeftLine />
        </div>
        :
        <div tw="-ml-8">
          <LeftToRightLine />
        </div>
      }
    </div>}
    <div tw=" width[300px] laptop:(width[600px] flex-row mx-0) mb-0 flex flex-col  mx-auto">
      <div tw="flex-shrink-0 flex justify-center laptop:block">
        <StrapiImage image={figure.image} />
      </div>
      <div tw="flex-1 -mt-12 laptop:mt-16">
        <p tw="text-purple font-bold text-28 tablet:text-36 mb-3">{`0${index + 1}`}</p>
        <Title backgroundColor={backgroundColor}>{figure.title}</Title>
        <Text backgroundColor={backgroundColor}>{figure.description}</Text>
      </div>
    </div>
  </div>
  )
}

export default StraightPathFigures
