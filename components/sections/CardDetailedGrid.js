import "twin.macro"
import Container from '../general/Container'
import CardDetailed from '../misc/CardDetailed'
import { H1 } from "../typography/Typography"

const CardDetailedGrid = ({ data }) =>
{
  return (
    <Container data={data} tw="max-w-7xl my-20">
      <div tw="grid gap[30px] grid-cols-1 laptop:grid-cols-2 mt-8">
        {data.cards.map((card) => <CardDetailed card={card} key={card.id} />)}
      </div>
    </Container>
  )
}

export default CardDetailedGrid
