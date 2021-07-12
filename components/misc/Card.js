import React from 'react'
import "twin.macro"
import StrapiImage from '../general/StrapiImage'
import { BsChevronRight } from "react-icons/bs"
import Link from '../general/Link'

const Card = ({ card }) =>
{
  return (
    <Link link={card.link}>
      <a tw="shadow-card hover:shadow-card-hover transition-shadow duration-300 rounded-3xl w-full flex flex-col items-center pt-16 pb-12 px-16">
        <div tw="mb-4">
          <StrapiImage image={card.image} />
        </div>
        <h3 tw="text-21 text-purple font-bold text-center whitespace-pre-line flex-1 mb-10">{card.title}</h3>
        <p tw="uppercase">Learn more<BsChevronRight tw="inline ml-4" /></p>
      </a>
    </Link>
  )
}

export default Card
