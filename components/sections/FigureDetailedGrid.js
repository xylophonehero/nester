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
import Card from '../misc/Card'
import CardDetailed from '../misc/CardDetailed'

const ComponentWrapper = styled.div(({ layout }) => [
  layout === "row" && tw`hidden py-16 laptop:(flex justify-center space-x-32)`,
  layout === "risk_cards" && tw`hidden py-16 laptop:(flex justify-center space-x-8)`,
  layout === "card_row" && tw`hidden py-16 laptop:(flex justify-center space-x-14)`,
  layout === "column_card" && tw`flex-col items-center hidden py-8 space-y-32 laptop:(flex max-w-3xl mx-auto)`,
  layout === "round_path" && tw`flex flex-col items-center max-w-3xl mx-auto space-y-12 laptop:-space-y-8`,
  layout === "straight_path" && tw`flex-col hidden max-w-4xl mx-auto laptop:flex`,
  layout === "link_cards" && tw`laptop:(grid gap[30px] grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3) hidden`,
  layout === "card_detailed" && tw`hidden laptop:(flex space-x-8) justify-center`,
])


const FigureDetailedGrid = ({ data, forceLayout, sectionId }) =>
{
  const layout = forceLayout || data.layout

  return (
    <Container data={data} tw="max-w-7xl py-16 laptop:py-32" sectionId={sectionId}>
      <ComponentWrapper layout={layout}>
        {data.figures.map((figure, index) =>
        {
          switch (layout)
          {
            case "row":
              return <FigureDetailed key={figure.id} figure={figure} />
            case "card_row":
              return <FigureCard key={figure.id} figure={figure} />
            case "column_card":
              return <ColumnCard key={figure.id} card={figure} first={index === 0} />
            case "round_path":
              return <RoundPathFigures key={figure.id} figure={figure} index={index} />
            case "straight_path":
              return <StraightPathFigures key={figure.id} figure={figure} index={index} backgroundColor={data.background_color} />
            case "risk_cards":
              return <RiskCard key={figure.id} card={figure} index={index} />
            case "link_cards":
              return <Card key={figure.id} card={figure} />
            case "card_detailed":
              return <CardDetailed key={figure.id} card={figure} />
            default:
              return <p>Not created yet</p>

          }
        })}
      </ComponentWrapper>
      {["row", "risk_cards", "straight_path", "column_card", "card_row", "link_cards", "card_detailed"].includes(layout) && <FlickityCarousel items={data.figures} layout={layout} />}
    </Container>
  )
}

export default FigureDetailedGrid
