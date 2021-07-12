import React from 'react'
import StrapiImage from "@/components/general/StrapiImage"
import "twin.macro"

const FigureCard = ({ figure }) =>
{
  return (
    <div tw="text-center text-purple  flex-1 shadow-light-card py-8">
      <StrapiImage image={figure.image} />
      <p tw="font-black text-36 mb-2">{figure.title}</p>
      <p tw="font-bold text-18 whitespace-pre-line">{figure.description}</p>
    </div>
  )
}

export default FigureCard