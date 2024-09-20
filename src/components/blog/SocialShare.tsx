// src/components/blog/SocialShare.tsx

import React from 'react'

interface SocialShareProps {
  title: string
}

const SocialShare: React.FC<SocialShareProps> = ({ title }) => {
  const encodedTitle = encodeURIComponent(title)
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <div>
      <h3>分享這篇文章</h3>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`} target="_blank" rel="noopener noreferrer">
        在 Facebook 上分享
      </a>
      <a href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${currentUrl}`} target="_blank" rel="noopener noreferrer">
        在 Twitter 上分享
      </a>
    </div>
  )
}

export default SocialShare