import DynamicComponent from "@/components/DynamicComponent"
import pages from "../../data/pages.json"

const BlogIndex = ({ data }) =>
{
  return data.sections.map((section, index) => <DynamicComponent section={section} key={section.__component + section.id} sectionId={`section-${index}`} />)

}

export default BlogIndex

export async function getStaticProps()
{
  // const allBlogsRes = await fetch("http://localhost:1337/blogs")
  // const allBlogs = await allBlogsRes.json()
  let data
  if (process.env.NODE_ENV === "development")
  {
    const pageRes = await fetch("http://localhost:1337/pages?slug=blog")
    data = await pageRes.json()
  } else
  {
    // const res = await fetch("https://raw.githubusercontent.com/xylophonehero/nestor-holdings/main/public/pages.json?token=AQOM4DWHRN2ZZSGLLLRKTH3A5NHRM")
    data = pages.filter((page) => page.slug === "blog")
  }
  return {
    props: { data: data[0] },
  }
}
