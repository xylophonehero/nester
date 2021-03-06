import React from 'react'
import { StrapiImage } from "@/components/general"
import "twin.macro"
import BasicAnimation from '../general/BasicAnimation'

const FigureCard = ({ figure, index, isCarousel }) => {
  return (
    <div tw="flex-1 max-width[280px] desktop:max-width[360px] mx-auto laptop:mx-0">
      <BasicAnimation index={index} noAnimation={isCarousel} tw="text-center text-purple  shadow-light-card pt-8 pb-6 my-2 h-full">
        <StrapiImage image={figure.image} />
        <p tw="font-black text-36 my-2 desktop:my-6">{figure.title}</p>
        <p tw="font-bold desktop:text-21 text-18 whitespace-pre-line">{figure.description}</p>
      </BasicAnimation>
    </div>
  )
}

export default FigureCard