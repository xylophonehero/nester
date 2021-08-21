import React from 'react'
import NextImage from "next/image"

const StrapiImage = ({ image, layout, layoutStyle, ...rest }) =>
{
  const thumbnail = image.formats?.thumbnail?.url

  return (
    <NextImage
      src={`${image.url}`}
      alt={image.alternativeText}
      layout={layout}
      width={layout ? null : image.width}
      height={layout ? null : image.height}
      placeholder={thumbnail ? "blur" : "empty"}
      blurDataURL={thumbnail}
      {...rest}
    />
  )
}

export default StrapiImage
