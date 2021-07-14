import Link from "next/link"
import "twin.macro"
import { blogDateFormat } from "utils/formatDate"
import StrapiImage from '../general/StrapiImage'
import { H2, H4 } from "../typography/Typography"

const BlogCard = ({ blog }) =>
{
  return (
    <div tw="rounded-b-2xl overflow-hidden pb-4">
      <div tw="relative height[329px] mb-8 ">
        <StrapiImage image={blog.cover_image} layout="fill" objectFit="cover" />
      </div>
      <p tw="text-18 text-gray-2 mb-2.5">{blogDateFormat(blog.published_on)}</p>
      <H2 tw="text-purple mb-2.5">{blog.title}</H2>
      <H4 tw="mb-6">by {blog.author.username}</H4>
      <p tw="text-21 mb-2">{blog.description}</p>
      <p tw="text-purple text-21"><Link href={`localhost:3000/blog/${blog.slug}`}>Read more</Link></p>
    </div>
  )
}

export default BlogCard
