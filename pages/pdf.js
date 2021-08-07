import { Container } from '@/components/general';
import { H1 } from '@/components/typography';
import "twin.macro"
import dynamic from 'next/dynamic';
const PdfDownload = dynamic(
  () => import('@/components/general/PdfDownload'), {
  ssr: false,
  loading: () => <p>Loading...</p>
});

const Pdf = () =>
{
  return (
    <Container tw="max-w-2xl py-16 flex flex-col items-center">
      <H1 tw="mb-8">Donwload statement</H1>
      <PdfDownload />
    </Container>
  )
}

export default Pdf
