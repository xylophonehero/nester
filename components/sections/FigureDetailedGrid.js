import React from 'react'
import Container from '../general/Container'
import tw, { styled } from "twin.macro"
import FigureDetailed from '../misc/FigureDetailed'
import ColumnCard from '../misc/ColumnCard'
import RoundPathFigures from '../misc/RoundPathFigures'
import StraightPathFigures from '../misc/StraightPathFigures'
import RiskCard from '../misc/RiskCard'
import FigureCard from '../misc/FigureCard'

const ComponentWrapper = styled.div(({ layout }) => [
  tw`flex`,
  layout === "row" && tw`flex py-16 space-x-16`,
  layout === "risk_cards" && tw`flex py-16 space-x-8`,
  layout === "column_card" && tw`flex-col items-center py-8 space-y-32`,
  layout === "round_path" && tw`flex-col max-w-3xl mx-auto`,
  layout === "straight_path" && tw`flex-col max-w-4xl mx-auto`,
  layout === "card_row" && tw`max-w-4xl py-16 mx-auto space-x-8`,
])


const FigureDetailedGrid = ({ data }) =>
{
  return (
    <Container data={data} tw="max-w-5xl py-32">
      <ComponentWrapper layout={data.layout}>
        {data.figures.map((figure, index) =>
        {
          switch (data.layout)
          {
            case "row":
              return <FigureDetailed key={figure.id} figure={figure} />
            case "card_row":
              return <FigureCard key={figure.id} figure={figure} />
            case "column_card":
              return <ColumnCard key={figure.id} card={figure} />
            case "round_path":
              return <RoundPathFigures key={figure.id} figure={figure} index={index} />
            case "straight_path":
              return <StraightPathFigures key={figure.id} figure={figure} index={index} />
            case "risk_cards":
              return <RiskCard key={figure.id} card={figure} index={index} />
            default:
              return <p>Not created yet</p>

          }
        })}
      </ComponentWrapper>
    </Container>
  )
}

export default FigureDetailedGrid
