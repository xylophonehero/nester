import DynamicComponent from "@/components/DynamicComponent"
import IframeResizer from "iframe-resizer-react"
import "twin.macro"
import { STRAPI_API_ENDPOINT } from "lib/constants"

const REACT_APP = "https://app.nestertest.com/"

const Home = ({ data }) =>
{
  if (data.is_embed) return <IframeResizer
    id="embed"
    src={`${REACT_APP}${data.slug}`}
    tw="w-full"
    heightCalculationMethod="min"
  />

  return data.sections.map((section, index) => <DynamicComponent
    section={section}
    key={section.__component + section.id}
    sectionId={`section-${index}`}
  />)

}

export default Home

export async function getStaticPaths()
{
  const res = await fetch(`${STRAPI_API_ENDPOINT}pages`)
  const data = await res.json()

  const paths = data.filter((page) => page.slug !== "blog")
    .map((page) => ({ params: { slug: page.slug === "home" ? [] : [page.slug] } }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params })
{
  const slug = params?.slug ? params.slug[0] : "home"
  const res = await fetch(`${STRAPI_API_ENDPOINT}pages/?slug=${slug}`)
  const data = await res.json()
  return {
    props: { data: data[0] }, // will be passed to the page component as props
  }
}