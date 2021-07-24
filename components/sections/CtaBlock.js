/* eslint-disable react/display-name */
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { EggItem, EggList, H1, H3, H4 } from '@/components/typography'
import { Container, StrapiImage } from '@/components/general'
import tw from 'twin.macro'


const StyledP = tw.p`text-16 tablet:text-21 mb-8`

const CtaBlock = ({ data, sectionId }) =>
{
  return (
    <Container data={data} sectionId={sectionId} tw="py-20 max-w-4xl mx-auto font-bold text-white">
      <div tw="mb-8 flex justify-center"><StrapiImage image={data.image} /></div>
      <div tw="mb-12">
        <ReactMarkdown
          components={{
            h1: H1,
            h2: ({ children }) => <H1 as="h2">{children}</H1>,
            h3: H3,
            h4: H4,
            li: ({ children }) => <EggItem color="blue" >{children}</EggItem>,
            p: StyledP,
            ul: EggList,
          }}
        >
          {data.text}
        </ReactMarkdown>
      </div>
    </Container>
  )
}

export default CtaBlock
