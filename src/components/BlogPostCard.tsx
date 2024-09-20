// src/components/blog/BlogPostCard.tsx

import React from 'react'
import { Link } from 'gatsby'

interface BlogPostCardProps {
  post: {
    title: string
    date: string
    author: string
    excerpt: string
    slug: string
  }
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div>
      <h2>
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <p>作者：{post.author} | 發布日期：{post.date}</p>
      <p>{post.excerpt}</p>
    </div>
  )
}

export default BlogPostCard