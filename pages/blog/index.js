import DynamicComponent from "@/components/DynamicComponent"
import { BlogsProvider } from "context"
import { STRAPI_API_ENDPOINT } from "lib/constants"

const BlogIndex = ({ data, allBlogs }) => {
  return <BlogsProvider allBlogs={allBlogs}>
    {data.sections.map((section, index) => <DynamicComponent section={section} key={section.__component + section.id} sectionId={`section-${index}`} />)}
  </BlogsProvider>
}

export default BlogIndex

export async function getStaticProps() {
  const allBlogsRes = await fetch(`${STRAPI_API_ENDPOINT}blogs`)
  const allBlogs = await allBlogsRes.json()

  const pageRes = await fetch(`${STRAPI_API_ENDPOINT}pages?slug=blog`)
  const data = await pageRes.json()

  return {
    props: { data: data[0], allBlogs: allBlogs },
  }
}
