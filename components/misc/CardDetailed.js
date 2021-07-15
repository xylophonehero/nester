import React from 'react'
import Button from '../general/Button'
import { EggItem, EggList, H1, H4 } from '../typography/Typography'
import "twin.macro"

const CardDetailed = ({ card }) =>
{
  return (
    <div tw="shadow-card flex flex-col items-center py-16 px-8 rounded-2xl text-center">
      <H1 as="h3">{card.title}</H1>
      <H4 tw="normal-case">{card.subtitle}</H4>

      <EggList tw="text-left my-3.5 tablet:px-16 flex-1 w-full">
        {card.egg_list.map((item) => <EggItem tw="text-16" key={item.id} color={card.button.color}>{item.text}</EggItem>)}
      </EggList>

      <H4 as="p" tw="px-16 normal-case">{card.after_egg_text}</H4>
      <Button button={card.button} />
    </div>
  )
}

export default CardDetailed