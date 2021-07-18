import DynamicComponent from "../components/DynamicComponent"
import fs from "fs"
import pages from "../data/pages.json"

const Home = ({ data }) =>
{
  return data.sections.map((section, index) => <DynamicComponent section={section} key={section.__component + section.id} sectionId={`section-${index}`} />)

}

export default Home


export async function getStaticPaths()
{
  let data
  if (process.env.NODE_ENV === "development")
  {
    const res = await fetch("http://localhost:1337/pages")
    data = await res.json()
    fs.writeFileSync("data/pages.json", JSON.stringify(data))
  } else
  {
    // const res = await fetch("https://raw.githubusercontent.com/xylophonehero/nestor-holdings/main/public/pages.json?token=AQOM4DWHRN2ZZSGLLLRKTH3A5NHRM")
    data = pages
  }
  const paths = data.filter((page) => page.slug !== "blog")
    .map((page) => ({ params: { slug: page.slug === "home" ? [] : [page.slug] } }))
  return {
    paths: paths,
    fallback: false
  }
}

export async function getStaticProps({ params })
{
  let data
  const slug = params?.slug ? params.slug[0] : "home"
  if (process.env.NODE_ENV === "development")
  {
    const res = await fetch(`http://localhost:1337/pages/?slug=${slug}`)
    data = await res.json()
    // const resHeader = await fetch("http://localhost:1337/header")
    // const header = await resHeader.json()
    // fs.writeFileSync("public/header.json", JSON.stringify(header))
    // const resFooter = await fetch("http://localhost:1337/footer")
    // const footer = await resFooter.json()
    // fs.writeFileSync("public/footer.json", JSON.stringify(footer))
  } else
  {
    // const res = await fetch("https://raw.githubusercontent.com/xylophonehero/nestor-holdings/main/public/pages.json?token=AQOM4DWHRN2ZZSGLLLRKTH3A5NHRM")
    data = pages.filter((page) => page.slug === slug)
  }
  return {
    props: { data: data[0] }, // will be passed to the page component as props
  }
}