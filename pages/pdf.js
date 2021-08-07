import dynamic from 'next/dynamic';
const PdfDownload = dynamic(() => import('@/components/general/PdfDownload'), { ssr: false });

const Pdf = () =>
{
  return (
    <PdfDownload />
  )
}

export default Pdf
