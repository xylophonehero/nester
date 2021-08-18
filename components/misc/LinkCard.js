import React from 'react'
import "twin.macro"
import { StrapiImage, Link } from '@/components/general'
import { BsChevronRight } from "react-icons/bs"
import BasicAnimation from '../general/BasicAnimation'

const LinkCard = ({ card, index, isCarousel }) => {
  return (
    <div tw="max-width[380px] mx-auto w-full">
      <BasicAnimation index={index} noAnimation={isCarousel}>
        <div tw="flex flex-col items-center w-full pt-16 pb-12 my-8 transition-shadow duration-300 shadow-card laptop:hover:shadow-card-hover rounded-3xl laptop:my-0">
          <div tw="mb-4">
            <StrapiImage image={card.image} />
          </div>
          <h3 tw="text-21 text-purple font-bold text-center whitespace-pre-line mb-10">{card.title}</h3>
          <div tw="flex-1" />
          <Link link={card.link}><p tw="uppercase">Learn more<BsChevronRight tw="inline ml-4" /></p></Link>
        </div>
      </BasicAnimation>
    </div>
  )
}

export default LinkCard
