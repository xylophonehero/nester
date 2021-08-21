import { useState } from 'react'
import "twin.macro"
import { Tabs, Container } from '@/components/general'
import { BlogCard } from '@/components/misc'
import { useBlogs } from 'context'

const Blog = ({ data, sectionId }) =>
{
  const [tabIndex, setTabIndex] = useState(0)
  const blogs = useBlogs()
  return (
    <Container tw="max-w-7xl py-24" sectionId={sectionId}>
      <Tabs tabs={data.tags} tabIndex={tabIndex} setTabIndex={setTabIndex} />
      <div tw="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-8">
        {blogs.filter((blog) => blog.tags.some((tag) => tag.name === data.tags[tabIndex].tag.name)).map((blog) => <BlogCard key={blog.id} blog={blog} />)}
      </div>
    </Container>
  )
}

export default Blog
