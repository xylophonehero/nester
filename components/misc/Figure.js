import React from 'react'
import { StrapiImage } from "@/components/general"
import "twin.macro"

const Figure = ({ figure }) =>
{
  return (
    <div tw="text-center text-purple max-width[200px] flex-1">
      <StrapiImage image={figure.image} />
      <p tw="font-black text-36">{figure.number}</p>
      <p tw="font-bold text-18">{figure.text}</p>
    </div>
  )
}

export default Figure
