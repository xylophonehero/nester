import { useState } from 'react'
import "twin.macro"
import Tabs from '../general/Tabs'
import allBlogs from "../../data/blogs.json"
import BlogCard from '../misc/BlogCard'
import Container from '../general/Container'

const Blog = ({ data }) =>
{
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <Container tw="max-w-7xl py-24">
      <Tabs tabs={data.tags} tabIndex={tabIndex} setTabIndex={setTabIndex} />
      <div tw="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-8">
        {allBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
      </div>
    </Container>
  )
}

export default Blog
