import "twin.macro"
import { H2, H4 } from "@/components/typography"

const CircleFigure = ({ figure }) =>
{
  return (
    <div tw="text-center laptop:(flex-1 width[270px]) width[220px] mx-auto" key={figure.id}>
      <div tw="rounded-full bg-white border-4 border-purple laptop:(height[222px] width[222px]) relative mb-6 mx-auto  width[180px] height[180px]">
        <div tw="absolute flex justify-center items-center inset-0">
          <H2 tw="text-purple mb-0" as="p">
            {figure.circle_text}
          </H2>
        </div>
      </div>
      <H4 as="p" tw="mb-0">{figure.description}</H4>
    </div>
  )
}

export default CircleFigure
