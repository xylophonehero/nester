/* eslint-disable react/display-name */
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { A, H1, H3, H4, LI, P, UL } from '@/components/typography'
import Link from 'next/link'

const Markdown = ({ text, components }) =>
{
  const defaultComponents = {
    h1: H1,
    h2: ({ children }) => <H1 as="h2">{children}</H1>,
    h3: H3,
    h4: H4,
    li: LI,
    ul: UL,
    p: P,
    a: ({ children, href }) =>
    {
      if (href[0] === "/") return <Link href={href} passHref>
        <A>{children}</A>
      </Link>
      return <A href={href}>{children}</A>
    },
  }

  return (
    <ReactMarkdown
      components={{ ...defaultComponents, ...components }}
    >
      {text}
    </ReactMarkdown>
  )
}

export default Markdown
