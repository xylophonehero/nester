import React from 'react'
import StrapiImage from '../general/StrapiImage'
import { H3 } from '../typography/Typography'
import "twin.macro"

const RoundPathFigures = ({ figure, index }) =>
{
  return (
    <div tw="odd:self-start even:self-end width[350px]">
      <StrapiImage image={figure.image} />
      <p tw="text-blue font-bold text-18">{`STEP ${index + 1}`}</p>
      <H3>{figure.title}</H3>
      <p tw="text-16 max-width[300px] text-gray-4">{figure.description}</p>
    </div>
  )
}

export default RoundPathFigures
