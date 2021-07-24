import "twin.macro"
import { Container } from '@/components/general'
import { Card } from "@/components/misc"

const CardGrid = ({ data, sectionId }) =>
{
  return (
    <Container data={data} tw="max-w-7xl" sectionId={sectionId}>
      <div tw="grid max-w-7xl mx-auto grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 my-20">
        {data.cards.map((card) => <Card card={card} key={card.id} />)}
      </div>
    </Container>
  )
}

export default CardGrid
