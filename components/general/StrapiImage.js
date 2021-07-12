import React from 'react'
import NextImage from "next/image"

const strapiUrl = "http://localhost:1337"

const StrapiImage = ({ image, layout, ...rest }) =>
{
  return (
    <NextImage src={`${image.url}`} alt={image.alternativeText} layout={layout} {...rest} width={layout ? null : image.width} height={layout ? null : image.height} />
  )
}

export default StrapiImage
