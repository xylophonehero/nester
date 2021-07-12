import { Banner } from "assets/Banner"
import "twin.macro"
import { convertBrackets } from "utils/convertBrackets"

const RiskCard = ({ card, index }) =>
{
  return (
    <div tw="border-2 border-color[#D3CFDA] rounded-lg px-12 py-16 flex-1 flex flex-col max-width[320px] mx-auto">
      <h3 tw="text-36 text-purple mb-2 font-bold">{card.title}</h3>
      <p tw="text-18 text-navy" dangerouslySetInnerHTML={{ __html: convertBrackets(card.description) }} />
      <div tw="flex space-x-6 mt-8 w-full items-end flex-1">
        {[1, 2, 3].map((x) => <div key={x} tw="flex-1 relative">
          {x === 3 ?
            <Banner tw="text-blue-1" />
            :
            <Banner tw="text-blue" />
          }
          {/* <Image src={x === 3 ? "http://localhost:1337/uploads/Rectangle_36_047a510a09.svg" : "http://localhost:1337/uploads/Rectangle_34_4aa12e32c5.svg"} alt="" width={72} height={102} /> */}
          <div tw="absolute top-4 left-0 text-center w-full uppercase font-bold text-navy text-21">
            {`${String.fromCharCode(97 + index)}${x}`}
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default RiskCard
