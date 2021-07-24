import React from 'react'
import { StrapiImage } from '@/components/general'
import { Body, H3 } from '@/components/typography'
import "twin.macro"
import { LeftToRightCurve, RightToLeftCurve } from 'assets'

const RoundPathFigures = ({ figure, index }) =>
{
  return (
    <div tw="laptop:odd:self-start laptop:even:self-end w-full max-width[350px] relative">
      <StrapiImage image={figure.image} />
      <p tw="text-blue font-bold text-18 mb-2">{`STEP ${index + 1}`}</p>
      <H3 tw="desktop:text-28">{figure.title}</H3>
      <Body tw="max-width[320px] text-gray-4">{figure.description}</Body>
      {index % 2 === 0 &&
        (index % 4 === 0 ?
          <div tw="hidden laptop:block absolute left-full bottom-8"><LeftToRightCurve /></div>
          :
          <div tw="hidden laptop:block absolute left-full top-8"><RightToLeftCurve /></div>
        )
      }
    </div >
  )
}

export default RoundPathFigures
