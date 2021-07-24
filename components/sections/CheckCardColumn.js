import "twin.macro"
import { Container } from '@/components/general'
import { CheckCard } from "@/components/misc"

const CheckCardColumn = ({ data, sectionId }) =>
{
  return (
    <Container data={data} tw="max-w-6xl py-32" sectionId={sectionId}>
      <div tw="flex flex-col items-center pb-8 pt-16 space-y-20 laptop:(space-y-52 pt-28)">
        {data.cards.map((card, index) => <CheckCard key={card.id} card={card} first={index === 0} />)}
      </div>
    </Container>
  )
}

export default CheckCardColumn
