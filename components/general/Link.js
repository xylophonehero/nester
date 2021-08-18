import React from 'react'
import NextLink from "next/link"

const Link = ({ children, link, fit, ...rest }) => {
  if (!link) return <p>No link found</p>

  if (link.type === "internal") return <NextLink href={link.url} {...rest}>
    <a  {...rest}>{children}</a>
  </NextLink>

  if (link.type === "external") return <a href={link.url} target="_blank" rel="noreferrer" {...rest}>
    {children}
  </a>

  if (link.type === "email") return <a href={`mailto:${link.url}`} {...rest}>
    {children}
  </a>
}

export default Link
