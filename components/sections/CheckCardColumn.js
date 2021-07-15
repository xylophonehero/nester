import "twin.macro"
import Container from '../general/Container'
import CheckCard from "../misc/CheckCard"

const CheckCardColumn = ({ data }) =>
{
  return (
    <Container data={data} tw="max-w-5xl py-32">
      <div tw="flex flex-col items-center py-8 space-y-20 laptop:space-y-64">
        {data.cards.map((card, index) => <CheckCard key={card.id} card={card} first={index === 0} />)}
      </div>
    </Container>
  )
}

export default CheckCardColumn
