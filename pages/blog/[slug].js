import { Markdown, StrapiImage } from "@/components/general"
import { H1, H4 } from "@/components/typography"
import { STRAPI_API_ENDPOINT } from "lib/constants"

import "twin.macro"

const BlogPage = ({ data }) => {
  return (
    <div tw="px-4 tablet:px-6">
      <div tw="max-w-4xl mx-auto my-20">
        <H1>{data.title}</H1>
        <H4>BY {data.author.username} - {data.published_on}</H4>
        <div tw="my-8 flex space-x-4">
          {data.tags.map((tag) => <div tw="px-6 py-2 bg-gray-0 rounded-full width[fit-content]" key={tag.id}>
            {tag.name}
          </div>)}
        </div>
        <div tw="flex justify-center my-8">
          <StrapiImage tw=" rounded-3xl overflow-hidden" image={data.cover_image} />
        </div>
        <div>
          <Markdown
            text={data.body}
          />
        </div>
      </div>
    </div>
  )
}

export default BlogPage


export async function getStaticPaths() {
  const res = await fetch(`${STRAPI_API_ENDPOINT}blogs`)
  const data = await res.json()

  const paths = data.map((blog) => ({ params: { slug: blog.slug } }))
  return {
    paths: paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const slug = params?.slug ? params.slug[0] : "home"
  const res = await fetch(`${STRAPI_API_ENDPOINT}blogs?slug=${slug}`)
  const data = await res.json()
  return {
    props: { data: data[0] },
  }
}