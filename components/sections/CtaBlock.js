import React from 'react'
import ReactMarkdown from 'react-markdown'
import { EggItem, EggList, H1, H2, H3, H4 } from '../typography/Typography'
import Container from '../general/Container'
import tw from 'twin.macro'
import StrapiImage from '../general/StrapiImage'
import Button from "@/components/general/Button"


const StyledP = tw.p`text-21 mb-4`

const CtaBlock = ({ data }) =>
{
  return (
    <div tw="bg-navy text-white">
      <Container>
        <div tw="max-w-4xl mx-auto py-20">
          <div tw="mb-8 flex justify-center"><StrapiImage image={data.image} /></div>
          <ReactMarkdown
            components={{
              h1: H1,
              // eslint-disable-next-line react/display-name
              h2: ({ children }) => <H1 as="h2">{children}</H1>,
              h3: H3,
              h4: H4,
              li: EggItem,
              p: StyledP,
            }}
          >
            {data.text}
          </ReactMarkdown>
          <div tw="flex justify-center mt-12">
            <Button button={data.button} />

          </div>
        </div>
      </Container>
    </div>
  )
}

export default CtaBlock
