import "twin.macro"
import { Container } from "@/components/general"

const BlockQuote = ({ data, sectionId }) =>
{
  return (
    <Container tw="max-w-4xl py-24" data={data} sectionId={sectionId}>
      <blockquote tw="text-purple text-28 tablet:text-36 font-bold mb-10">{`"${data.quote}"`}</blockquote>
      <p tw="text-28 tablet:text-36 text-navy font-bold">{data.quotee}</p>
      <p tw="text-21 tablet:text-28 text-purple font-bold">{data.quotee_function}</p>
    </Container>
  )
}

export default BlockQuote
