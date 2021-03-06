import React from 'react'
import { Container } from '@/components/general'
import tw, { styled } from "twin.macro"
import {
  FigureDetailed,
  ColumnCard,
  RoundPathFigures,
  StraightPathFigures,
  RiskCard,
  FigureCard,
  FlickityCarousel,
  LinkCard,
  CardDetailed,
} from '@/components/misc'

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


const FigureDetailedGrid = ({ data, forceLayout, sectionId }) => {
  const layout = forceLayout || data.layout

  return (
    <Container data={data} tw="max-w-7xl py-16 laptop:py-32" sectionId={sectionId}>
      <ComponentWrapper layout={layout}>
        {data.figures.map((figure, index) => {
          switch (layout) {
            case "row":
              return <FigureDetailed key={figure.id} figure={figure} index={index} />
            case "card_row":
              return <FigureCard key={figure.id} figure={figure} index={index} />
            case "column_card":
              return <ColumnCard key={figure.id} card={figure} first={index === 0} index={index} />
            case "round_path":
              return <RoundPathFigures key={figure.id} figure={figure} index={index} />
            case "straight_path":
              return <StraightPathFigures key={figure.id} figure={figure} index={index} backgroundColor={data.background_color} />
            case "risk_cards":
              return <RiskCard key={figure.id} card={figure} index={index} />
            case "link_cards":
              return <LinkCard key={figure.id} card={figure} index={index} />
            case "card_detailed":
              return <CardDetailed key={figure.id} card={figure} index={index} />
            default:
              return <p>Not created yet</p>

          }
        })}
      </ComponentWrapper>
      {[ "row", "risk_cards", "straight_path", "column_card", "card_row", "link_cards", "card_detailed" ].includes(layout) && <FlickityCarousel items={data.figures} layout={layout} backgroundColor={data.background_color} />}
    </Container>
  )
}

export default FigureDetailedGrid
