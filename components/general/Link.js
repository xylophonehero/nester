import React from 'react'
import NextLink from "next/link"

const Link = ({ children, link, ...rest }) =>
{
  if (!link) return <p>No link found</p>
  if (link.type === "internal") return (
    <NextLink href={link.url} {...rest}>
      <a>{children}</a>
    </NextLink>
  )
  if (link.type === "external") return (
    <a href={link.url} {...rest}>
      {children}
    </a>
  )
}

export default Link
