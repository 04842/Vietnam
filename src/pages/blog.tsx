// src/pages/blog.tsx

import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import BlogPostCard from '../components/blog/BlogPostCard'

interface BlogPost {
  id: string
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    date: string
    author: string
    excerpt: string
  }
}

interface BlogPageData {
  allMarkdownRemark: {
    edges: Array<{
      node: BlogPost
    }>
  }
}

const BlogPage: React.FC<PageProps<BlogPageData>> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="旅遊博客" description="探索我們的旅遊文章和專家攻略" />
      <h1>旅遊博客</h1>
      <div>
        {posts.map(({ node }) => (
          <BlogPostCard 
            key={node.id} 
            post={{
              ...node.frontmatter, 
              slug: node.fields.slug
            }} 
          />
        ))}
      </div>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fields: { slug: { regex: "/blog/" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            author
            excerpt
          }
        }
      }
    }
  }
`