import React from 'react'
import { Container, Markdown } from '../general'
import { H3, P, LI } from '../typography'
import tw, { styled } from "twin.macro"

const MarkdownWrapper = styled.div(() => [
  {
    "ol": tw`counter-reset[list]`,
    "ol > li": tw`relative before:(absolute -ml-12 counter-increment[list] content["(" counter(list, lower-alpha) ")"])`,
    "ol ol > li": tw`relative before:(absolute -ml-12 counter-increment[list] content["(" counter(list, lower-roman) ")"])`,
    "ol ol ol > li": tw`relative before:(absolute -ml-12 counter-increment[list] content["(" counter(list, upper-alpha) ")"])`,
  }
])

const ClausesWrapper = styled.div(({ noClauses }) => [
  tw`ml-20 text-18`,
  noClauses && tw`ml-8`
])

const Article = ({ data, sectionId }) => {
  return <Container tw="max-w-6xl py-24" data={data} sectionId={sectionId} noAnimation>
    <div>
      {data.sections.map((section, sectionIndex) => <div key={section.id}>
        <H3 tw="my-8">{`${sectionIndex + 1}. ${section.title}`}</H3>
        <ClausesWrapper noClauses={section.no_clauses}>
          {section.clauses.map((clause, clauseIndex) => <MarkdownWrapper key={clause.id} tw="relative mb-4">
            {!section.no_clauses && <span tw="absolute top-0 -left-12">{`${sectionIndex + 1}.${clauseIndex + 1}`}</span>}
            <Markdown
              text={clause.text}
              components={{
                p: ({ children }) => <P tw="mb-4">{children}</P>,
                li: ({ children }) => <LI>{children}</LI>,
              }}
            />
          </MarkdownWrapper>
          )}
        </ClausesWrapper>
      </div>)}
    </div>
  </Container>
}

export default Article
