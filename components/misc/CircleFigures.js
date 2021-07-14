import "twin.macro"
import { H2, H4 } from "../typography/Typography"
import CircleFigure from "./CircleFigure"
import FlickityCarousel from "./FlickityCarousel"

const CircleFigures = ({ figures }) =>
{
  return (
    <>
      <div tw="hidden laptop:flex flex-row space-x-36 max-width[900px] mx-auto mt-10 mb-20">
        {figures.map((figure) => <CircleFigure key={figure.id} figure={figure} />)}
      </div>
      <FlickityCarousel items={figures} layout="circle_figures" />
    </>
  )
}

export default CircleFigures
