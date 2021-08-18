import React from 'react'
import Flickity from "react-flickity-component"
import "flickity/css/flickity.css"
import {
  FigureDetailed,
  ColumnCard,
  StraightPathFigures,
  RiskCard,
  CircleFigure,
  FigureCard,
  LinkCard,
  CardDetailed,
} from "@/components/misc"
import tw, { styled } from "twin.macro"


const FlickityContainer = styled.div(({ layoutStyle }) => [
  tw`block w-full pb-16 mt-16 laptop:hidden`,
  { ".flickity-page-dots": tw`-bottom-12` },
  { ".dot": tw`w-5 h-5 bg-gray-2` },
  layoutStyle === "straight_path" && { ".flickity-page-dots .is-selected": tw`bg-blue` },
  layoutStyle !== "straight_path" && { ".flickity-page-dots .is-selected": tw`bg-purple` },
  layoutStyle === "circle_figures" && tw`mb-12`
])

const FlickityCarousel = ({ items, layout }) => {
  return (
    <FlickityContainer layoutStyle={layout}>
      <Flickity
        options={{
          pageDots: true,
          prevNextButtons: false,
        }}
      >
        {items.map((item, index) => {
          switch (layout) {
            case "row":
              return <div key={item.id} tw="w-full px-4">
                <FigureDetailed figure={item} isCarousel />
              </div>
            case "card_row":
              return <div key={item.id} tw="w-full px-4">
                <FigureCard figure={item} isCarousel />
              </div>
            case "column_card":
              return <div key={item.id} tw="w-full px-4">
                <ColumnCard card={item} isCarousel />
              </div>
            case "straight_path":
              return <div key={item.id} tw="w-full px-4">
                <StraightPathFigures figure={item} index={index} isCarousel />
              </div>
            case "risk_cards":
              return <div key={item.id} tw="w-full px-4">
                <RiskCard card={item} index={index} isCarousel />
              </div>
            case "circle_figures":
              return <div key={item.id} tw="w-full px-4">
                <CircleFigure figure={item} isCarousel />
              </div>
            case "link_cards":
              return <div key={item.id} tw="w-full px-4">
                <LinkCard card={item} isCarousel />
              </div>
            case "card_detailed":
              return <div key={item.id} tw="w-full px-4">
                <CardDetailed card={item} isCarousel />
              </div>
            default:
              return <p>Not created yet</p>
          }
        })}
      </Flickity>
    </FlickityContainer>
  )
}

export default FlickityCarousel
