import React from 'react'
import NextImage from "next/image"

const imageEndpoint = process.env.NEXT_PUBLIC_CLOUDFRONT_ENDPOINT || "https://nester-strapi-dev.s3.eu-west-1.amazonaws.com/"

const StrapiImage = ({ image, layout, layoutStyle, ...rest }) =>
{
  const { hash, ext } = image
  const thumbnail = image.formats?.thumbnail

  if (!hash || !ext) return null

  return (
    <NextImage
      src={`${imageEndpoint}${hash}${ext}`}
      alt={image.alternativeText}
      layout={layout}
      width={layout ? null : image.width}
      height={layout ? null : image.height}
      placeholder={thumbnail ? "blur" : "empty"}
      {...(thumbnail && {blurDataURL: `${imageEndpoint}${thumbnail.hash}${thumbnail.ext}`})}
      {...rest}
    />
  )
}

export default StrapiImage
