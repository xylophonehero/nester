import DynamicComponent from "@/components/DynamicComponent"
import pages from "data/pages.json"

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
  if (process.env.FORCE_LOCAL === "true")
  {
    data = pages.filter((page) => page.slug === "blog")
  } else
  {
    const pageRes = await fetch("http://localhost:1337/pages?slug=blog")
    data = await pageRes.json()
  }
  return {
    props: { data: data[0] },
  }
}
