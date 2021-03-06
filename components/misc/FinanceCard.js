import "twin.macro"
import { StrapiImage } from '@/components/general'
import { Display, H3 } from "@/components/typography"
import BasicAnimation from "../general/BasicAnimation"

const FinanceCard = ({ card, index }) => {
  return (
    <div tw="flex-1  w-full max-width[320px] mx-auto">
      <BasicAnimation index={index} tw="shadow-header px-6 py-8 border border-gray-3 flex flex-col items-start text-white h-full">
        <StrapiImage image={card.image} />
        <div tw="flex-1 flex flex-col justify-end">
          <H3 tw="my-4">{card.title}</H3>
        </div>
        <p tw="font-bold text-16 text-gray-2 uppercase">{card.small_text}</p>
        <p tw="text-blue">
          <Display as="span">{card.blue_text}</Display>
          <span tw="font-bold text-21 ml-2">{card.small_blue_text}</span>
        </p>
      </BasicAnimation>
    </div>
  )
}

export default FinanceCard
