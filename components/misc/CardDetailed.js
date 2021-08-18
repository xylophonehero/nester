import React from 'react'
import { Button } from '@/components/general'
import { EggItem, EggList, H1, H4 } from '@/components/typography'
import "twin.macro"
import BasicAnimation from '../general/BasicAnimation'

const CardDetailed = ({ card, index, isCarousel }) => {
  return (
    <div tw="mx-auto max-width[585px] my-2   pt-16 pb-10 laptop:(pb-16 mx-0 flex-1) px-4 tablet:(px-8 text-center)">
      <BasicAnimation index={index} noAnimation={isCarousel} tw="shadow-card h-full rounded-3xl">
        <H1 as="h3" tw="text-center">{card.title}</H1>
        <H4 tw="normal-case">{card.subtitle}</H4>

        <EggList tw="text-left my-3.5 tablet:px-16 flex-1 w-full">
          {card.egg_list.map((item) => <EggItem tw="text-16 laptop:leading-7" key={item.id} color={card.button.color}>{item.text}</EggItem>)}
        </EggList>

        <H4 as="p" tw="tablet:px-16 normal-case">{card.after_egg_text}</H4>
        <Button button={card.button} tw="mx-0 laptop:(w-fit mx-auto)" />
      </BasicAnimation>
    </div>
  )
}

export default CardDetailed
