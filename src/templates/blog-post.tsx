// src/templates/blog-post.tsx

import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import seo from '../components/seo'
import SocialShare from '../components/blog/SocialShare'

interface BlogPostProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        date: string
        author: string
        excerpt: string
      }
      html: string
      slug: string  // 添加這一行
    }
  }
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <seo 
        title={post.frontmatter.title} 
        description={post.frontmatter.excerpt || ''}
      />
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
    markdownRemark(slug: { eq: $slug }) {
      html
      slug
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
      }
    }
  }
`