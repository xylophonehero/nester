import "twin.macro"
import { H2, H4 } from "../typography/Typography"

const CircleFigures = ({ figures }) =>
{
  return (
    <div tw="flex flex-row space-x-36 max-width[900px] mx-auto mt-10 mb-20">
      {figures.map((figure) => <div tw="text-center flex-1 " key={figure.id}>
        <div tw="rounded-full bg-white border-4 border-purple padding-top[100%] relative mb-6">
          <div tw="absolute flex justify-center items-center inset-0">
            <H2 tw="text-purple mb-0" as="p">
              {figure.circle_text}
            </H2>
          </div>
        </div>
        <H4 as="p">{figure.description}</H4>
      </div>)}
    </div>
  )
}

export default CircleFigures
