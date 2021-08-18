import { Banner } from "assets"
import "twin.macro"
import { convertBrackets } from "utils"
import BasicAnimation from "../general/BasicAnimation"

const RiskCard = ({ card, index, isCarousel }) => {
  return (
    <div tw="flex-1 max-width[320px] mx-auto laptop:mx-0">
      <BasicAnimation index={index} noAnimation={isCarousel} tw=" flex flex-col h-full  border-2 border-color[#D3CFDA] rounded-lg px-12 py-16">
        <h3 tw="text-36 text-purple mb-2 font-bold">{card.title}</h3>
        <p tw="text-18 text-navy" dangerouslySetInnerHTML={{ __html: convertBrackets(card.description) }} />
        <div tw="flex space-x-6 mt-8 w-full items-end flex-1">
          {[ 1, 2, 3 ].map((x) => <div key={x} tw="flex-1 relative">
            {x === 3 ?
              <Banner tw="text-blue-1" />
              :
              <Banner tw="text-blue" />
            }
            <div tw="absolute top-4 left-0 text-center w-full uppercase font-bold text-navy text-21">
              {`${String.fromCharCode(97 + index)}${x}`}
            </div>
          </div>)}
        </div>
      </BasicAnimation>
    </div>
  )
}

export default RiskCard
