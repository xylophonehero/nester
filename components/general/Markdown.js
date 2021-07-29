import React from 'react'
import ReactMarkdown from 'react-markdown'
import { A, H1, H3, H4, LI, P, UL, OL } from '@/components/typography'
import Link from 'next/link'
import gfm from 'remark-gfm'
import "twin.macro"

const Markdown = ({ text, components }) =>
{
  const defaultComponents = {
    h1: H1,
    h2: ({ children }) => <H1 as="h2">{children}</H1>,
    h3: H3,
    h4: H4,
    li: LI,
    ol: OL,
    ul: UL,
    p: P,
    del: ({ children }) => <span tw="underline">{children}</span>,
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
      remarkPlugins={[gfm]}
    >
      {text}
    </ReactMarkdown>
  )
}

export default Markdown
