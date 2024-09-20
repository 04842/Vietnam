// src/pages/blog.tsx

import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import BlogPostCard from '../components/blog/BlogPostCard'

interface BlogPageProps {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          id: string
          frontmatter: {
            title: string
            date: string
            author: string
            excerpt: string
            slug: string
          }
        }
      }>
    }
  }
}

const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="旅遊博客" description="探索我們的旅遊文章和專家攻略" />
      <h1>旅遊博客</h1>
      <div>
        {posts.map(({ node }) => (
          <BlogPostCard key={node.id} post={node.frontmatter} />
        ))}
      </div>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/blog/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            author
            excerpt
            slug
          }
        }
      }
    }
  }
`