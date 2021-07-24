import "twin.macro"
import { Container } from '@/components/general'
import { CardDetailed } from '@/components/misc'

const CardDetailedGrid = ({ data }) =>
{
  return (
    <Container data={data} tw="max-w-7xl my-20">
      <div tw="flex mt-8">
        {data.cards.map((card) => <CardDetailed card={card} key={card.id} />)}
      </div>
    </Container>
  )
}

export default CardDetailedGrid
