import DynamicComponent from "@/components/DynamicComponent"

const BlogIndex = ({ data, allBlogs }) =>
{
  return data.sections.map((section, index) => <DynamicComponent section={section} key={section.__component + section.id} sectionId={`section-${index}`} />)

}

export default BlogIndex

export async function getStaticProps()
{
  const allBlogsRes = await fetch("http://localhost:1337/blogs")
  const allBlogs = await allBlogsRes.json()

  const pageRes = await fetch("http://localhost:1337/pages?slug=blog")
  const data = await pageRes.json()

  return {
    props: {
      data: data[0],
      allBlogs,
    }
  }

}
