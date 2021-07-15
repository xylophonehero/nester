import React from 'react'
import StrapiImage from '../general/StrapiImage'
import { H3 } from '../typography/Typography'
import "twin.macro"
import { LeftToRightLine } from 'assets/LeftToRightLine'
import { RightToLeftLine } from 'assets/RightToLeftLine'

const StraightPathFigures = ({ figure, index }) =>
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
        <p tw="text-purple font-bold text-36">{`0${index + 1}`}</p>
        <H3 tw="text-blue">{figure.title}</H3>
        <p tw="text-16 max-width[300px] text-gray-1">{figure.description}</p>
      </div>
    </div>
  </div>
  )
}

export default StraightPathFigures
