import { createContext, useContext } from "react"

const BlogsContext = createContext([])

export const BlogsProvider = ({ children, allBlogs }) => <BlogsContext.Provider value={allBlogs}>
  {children}
</BlogsContext.Provider>


export const useBlogs = () => {
  const context = useContext(BlogsContext)
  if (!context) throw new Error("Only call useBlogs withtin an BlogsProvider")
  return context
}
