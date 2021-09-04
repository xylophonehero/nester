import React from 'react'
import NextImage from "next/image"
import { IMAGE_ENDPOINT } from 'lib/constants'

const StrapiImage = ({ image, layout, layoutStyle, ...rest }) =>
{
  const { hash, ext } = image
  const thumbnail = image.formats?.thumbnail

  if (!hash || !ext) return null

  return (
    <NextImage
      src={`${IMAGE_ENDPOINT}${hash}${ext}`}
      alt={image.alternativeText}
      layout={layout}
      width={layout ? null : image.width}
      height={layout ? null : image.height}
      placeholder={thumbnail ? "blur" : "empty"}
      {...(thumbnail && {blurDataURL: `${IMAGE_ENDPOINT}${thumbnail.hash}${thumbnail.ext}`})}
      {...rest}
    />
  )
}

export default StrapiImage
