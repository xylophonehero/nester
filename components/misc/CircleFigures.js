import "twin.macro"
import CircleFigure from "./CircleFigure"
import FlickityCarousel from "./FlickityCarousel"

const CircleFigures = ({ figures }) =>
{
  return (
    <>
      <div tw="hidden laptop:flex flex-row space-x-16 desktop:space-x-28 mx-auto mt-10 mb-20">
        {figures.map((figure) => <CircleFigure key={figure.id} figure={figure} />)}
      </div>
      <FlickityCarousel items={figures} layout="circle_figures" />
    </>
  )
}

export default CircleFigures
