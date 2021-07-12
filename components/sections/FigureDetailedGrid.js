import React from 'react'
import Container from '../general/Container'
import tw, { styled } from "twin.macro"
import FigureDetailed from '../misc/FigureDetailed'
import ColumnCard from '../misc/ColumnCard'
import RoundPathFigures from '../misc/RoundPathFigures'
import StraightPathFigures from '../misc/StraightPathFigures'
import RiskCard from '../misc/RiskCard'
import FigureCard from '../misc/FigureCard'
import Carousel from '../misc/Carousel'
import FlickityCarousel from "../misc/FlickityCarousel"

const ComponentWrapper = styled.div(({ layout }) => [
  layout === "row" && tw`hidden py-16 space-x-16 laptop:flex`,
  layout === "risk_cards" && tw`hidden py-16 space-x-8 laptop:flex`,
  layout === "column_card" && tw`flex-col items-center hidden py-8 space-y-32 laptop:flex`,
  layout === "round_path" && tw`flex flex-col items-center max-w-3xl mx-auto space-y-12 laptop:space-y-0`,
  layout === "straight_path" && tw`flex-col hidden max-w-4xl mx-auto laptop:flex`,
  layout === "card_row" && tw`flex max-w-4xl py-16 mx-auto space-x-8`,
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
      {["row", "risk_cards", "straight_path", "column_card"].includes(data.layout) && <FlickityCarousel items={data.figures} layout={data.layout} />}
    </Container>
  )
}

export default FigureDetailedGrid
