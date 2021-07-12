import React from 'react'
import Container from '../general/Container'
import Figure from '../misc/Figure'
import { H1 } from '../typography/Typography'
import "twin.macro"

const FigureGrid = ({ data }) =>
{
  return (
    <Container data={data} tw="max-width[800px] mx-auto py-32">
      <div tw="flex flex-col tablet:(flex-row space-x-12 items-start space-y-0) space-y-8 justify-center items-center py-16">
        {data.figures.map((figure) => <Figure key={figure.id} figure={figure} />)}
      </div>
    </Container>
  )
}

export default FigureGrid
