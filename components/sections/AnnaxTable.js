import React from 'react'
import tw, { styled } from "twin.macro"
import { H4, LI, OL, P, UL } from "@/components/typography"
import { Markdown } from '../general'

const StyledList = styled(OL)(() => [
  tw`counter-reset[list] space-y-6 my-8`,
  {
    "li": tw`relative before:(absolute -ml-12 counter-increment[list] content["(" counter(list, lower-alpha) ")"])`,
  }
])

const AnnaxTable = ({ data }) => <div tw="px-4 tablet:px-6">
  <div tw="max-w-6xl mx-auto my-16 overflow-x-auto">
    <H4 tw="text-gray-2 normal-case">{data.title}</H4>
    <table tw="w-full min-width[800px]">
      <thead>
        {data.header_row.map((cell) => <td tw="px-4 py-2 border-gray-0 border font-bold" key={cell.id}>
          {cell.text}
        </td>)}
      </thead>
      <tbody>
        {data.table_row.map((row) =>
        {
          console.log(row)
          return <tr key={row.id}>
            {[...Array(data.header_row.length).keys()].map((index) => <td tw="align-top p-4 border border-gray-0" key={index}>
              {row.cell[index]?.text && <Markdown
                text={row.cell[index].text}
                components={{
                  p: ({ children }) => <P tw="mb-8">{children}</P>,
                  ul: ({ children }) => <UL tw="mb-8">{children}</UL>,
                  ol: ({ children }) => <StyledList>{children}</StyledList>,
                  li: ({ children }) => <LI>{children}</LI>,
                }} />}
            </td>)}
          </tr>
        })}
      </tbody>
    </table>
  </div>
</div>


export default AnnaxTable
