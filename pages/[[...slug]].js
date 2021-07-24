import DynamicComponent from "@/components/DynamicComponent"
import pages from "data/pages.json"
import IframeResizer from "iframe-resizer-react"
import "twin.macro"

const REACT_APP = "http://localhost:3000/"

const Home = ({ data }) =>
{
  if (data.is_embed) return <IframeResizer
    id="embed"
    src={`${REACT_APP}${data.slug}`}
    tw="w-full"
    heightCalculationMethod="min"
  />
  // <iframe id="embed" src={`${REACT_APP}${data.slug}`} tw="w-full h-full flex-1" />

  return data.sections.map((section, index) => <DynamicComponent
    section={section}
    key={section.__component + section.id}
    sectionId={`section-${index}`}
  />)

}

export default Home

export async function getStaticPaths()
{
  let data
  if (process.env.FORCE_LOCAL === "true")
  {
    // Get data from local file
    data = pages
  } else
  {
    // Get data from Strapi
    const res = await fetch("http://localhost:1337/pages")
    data = await res.json()
    // fs.writeFileSync("data/pages.json", JSON.stringify(data))
  }
  const paths = data.filter((page) => page.slug !== "blog")
    .map((page) => ({ params: { slug: page.slug === "home" ? [] : [page.slug] } }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params })
{
  let data
  const slug = params?.slug ? params.slug[0] : "home"
  if (process.env.FORCE_LOCAL === "true")
  {
    data = pages.filter((page) => page.slug === slug)
    // const resHeader = await fetch("http://localhost:1337/header")
    // const header = await resHeader.json()
    // fs.writeFileSync("public/header.json", JSON.stringify(header))
    // const resFooter = await fetch("http://localhost:1337/footer")
    // const footer = await resFooter.json()
    // fs.writeFileSync("public/footer.json", JSON.stringify(footer))
  } else
  {
    const res = await fetch(`http://localhost:1337/pages/?slug=${slug}`)
    data = await res.json()
  }
  return {
    props: { data: data[0] }, // will be passed to the page component as props
  }
}