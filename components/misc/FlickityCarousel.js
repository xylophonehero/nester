import React from 'react'
import Flickity from "react-flickity-component"
import "flickity/css/flickity.css"
import FigureDetailed from './FigureDetailed'
import tw, { styled, css } from "twin.macro"
import ColumnCard from './ColumnCard'
import StraightPathFigures from './StraightPathFigures'
import RiskCard from './RiskCard'
import CircleFigure from './CircleFigure'

const FlickityContainer = styled.div(({ layoutStyle }) => [
  tw`block pb-16 my-12 laptop:hidden`,
  { ".flickity-page-dots": tw`-bottom-16` },
  { ".dot": tw`w-5 h-5 bg-gray-1` },
  layoutStyle === "straight_path" && { ".flickity-page-dots .is-selected": tw`bg-blue` },
  layoutStyle !== "straight_path" && { ".flickity-page-dots .is-selected": tw`bg-purple` },
])

const FlickityCarousel = ({ items, layout }) =>
{
  return (
    <FlickityContainer layoutStyle={layout}>
      <Flickity
        options={{
          pageDots: true,
          prevNextButtons: false,
        }}
      >
        {items.map((item, index) =>
        {
          switch (layout)
          {
            case "row":
              return <div key={item.id} tw="w-full px-4">
                <FigureDetailed figure={item} />
              </div>
            // case "card_row":
            //   return <FigureCard key={figure.id} figure={figure} />
            case "column_card":
              return <div key={item.id} tw="w-full px-4">
                <ColumnCard card={item} />
              </div>
            // case "round_path":
            //   return <RoundPathFigures key={figure.id} figure={figure} index={index} />
            case "straight_path":
              return <div key={item.id} tw="w-full px-4">
                <StraightPathFigures figure={item} index={index} />
              </div>
            case "risk_cards":
              return <div key={item.id} tw="w-full px-4">
                <RiskCard card={item} index={index} />
              </div>
            case "circle_figures":
              return <div key={item.id} tw="w-full px-4">
                Hello
                <CircleFigure figure={item} />
              </div>
            // case "risk_cards":
            //   return <RiskCard key={figure.id} card={figure} index={index} />
            default:
              return <p>Not created yet</p>
          }
        })}
      </Flickity>
    </FlickityContainer>
  )
}

export default FlickityCarousel
