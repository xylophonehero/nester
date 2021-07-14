import Markdown from "@/components/general/Markdown"
import StrapiImage from "@/components/general/StrapiImage"
import { H1, H4 } from "@/components/typography/Typography"
import fs from "fs"

import "twin.macro"

const Blog = ({ data }) =>
{
  return (
    <div tw="max-w-4xl mx-auto my-20">
      <H1>{data.title}</H1>
      <H4>BY {data.author.username} - {data.published_on}</H4>
      <div tw="my-8">
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
  )
}

export default Blog


export async function getStaticPaths()
{
  let data
  if (process.env.NODE_ENV === "development")
  {
    const res = await fetch("http://localhost:1337/blogs")
    data = await res.json()
    fs.writeFileSync("data/blogs.json", JSON.stringify(data))
  } else
  {
    data = pages
  }
  const paths = data.map((blog) => ({ params: { slug: blog.slug } }))
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
    const res = await fetch(`http://localhost:1337/blogs/?slug=${slug}`)
    data = await res.json()
  } else
  {
    data = pages.filter((page) => page.slug === slug)
  }
  return {
    props: { data: data[0] }, // will be passed to the page component as props
  }
}