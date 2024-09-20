// src/templates/blog-post.tsx

import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import SocialShare from '../components/blog/SocialShare'

interface BlogPostProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        date: string
        author: string
      }
      html: string
    }
  }
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.frontmatter.excerpt} />
      <article>
        <h1>{post.frontmatter.title}</h1>
        <p>作者：{post.frontmatter.author} | 發布日期：{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <SocialShare title={post.frontmatter.title} />
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        excerpt
      }
    }
  }
`