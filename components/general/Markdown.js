import React from 'react'
import ReactMarkdown from 'react-markdown'
import { A, H1, H2, H3, H4, LI, P, UL } from '../typography/Typography'

const Markdown = ({ text, components }) =>
{
  const defaultComponents = {
    h1: H1,
    // eslint-disable-next-line react/display-name
    h2: ({ children }) => <H1 as="h2">{children}</H1>,
    h3: H3,
    h4: H4,
    li: LI,
    ul: UL,
    p: P,
    a: A,
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
