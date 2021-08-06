import dynamic from 'next/dynamic';
const PDF = dynamic(() => import('@/components/general/Document'), { ssr: false });

const Pdf = () =>
{
  return (

    <PDF />

  )
}

export default Pdf
