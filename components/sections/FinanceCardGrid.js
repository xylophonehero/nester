import "twin.macro"
import { Container } from '@/components/general'
import { FinanceCard } from '@/components/misc'

const FinanceCardGrid = ({ data, sectionId }) =>
{
  return (
    <Container data={data} tw="max-w-5xl py-32" sectionId={sectionId}>
      <div tw="grid gap-12 grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 my-20">
        {data.cards.map((card) => <FinanceCard card={card} key={card.id} />)}
      </div>
    </Container>
  )
}

export default FinanceCardGrid
