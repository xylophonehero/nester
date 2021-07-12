import "twin.macro"
import StrapiImage from '../general/StrapiImage'
import { Display, H3 } from "../typography/Typography"

const FinanceCard = ({ card }) =>
{
  return (
    <div tw="text-white flex-1 shadow-header px-6 py-8 border border-gray-3 flex flex-col items-start">
      <StrapiImage image={card.image} />
      <div tw="flex-1 flex flex-col justify-end">
        <H3 tw="my-4">{card.title}</H3>
      </div>
      <p tw="font-bold text-16 text-gray-2 uppercase">{card.small_text}</p>
      <p tw="text-blue">
        <Display as="span">{card.blue_text}</Display>
        <span tw="font-bold text-21 ml-2">{card.small_blue_text}</span>
      </p>

    </div>
  )
}

export default FinanceCard
