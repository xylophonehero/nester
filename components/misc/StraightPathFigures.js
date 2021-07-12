import React from 'react'
import StrapiImage from '../general/StrapiImage'
import { H3 } from '../typography/Typography'
import "twin.macro"

const StraightPathFigures = ({ figure, index }) =>
{
  return (
    <div tw="odd:self-start even:self-end width[300px] laptop:(width[600px] flex-row mb-32 mx-0) mb-0 flex flex-col  mx-auto">
      <div tw="flex-shrink-0 flex justify-center laptop:block">
        <StrapiImage image={figure.image} />
      </div>
      <div tw="flex-1 -mt-12 laptop:mt-16">
        <p tw="text-purple font-bold text-36">{`0${index + 1}`}</p>
        <H3 tw="text-blue">{figure.title}</H3>
        <p tw="text-16 max-width[300px] text-gray-1">{figure.description}</p>
      </div>
    </div>
  )
}

export default StraightPathFigures
