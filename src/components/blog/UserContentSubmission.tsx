// src/components/blog/UserContentSubmission.tsx

import React, { useState } from 'react'

const UserContentSubmission: React.FC = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 這裡應該實現提交邏輯，可能需要與後端 API 集成
    console.log('提交的內容:', { title, content })
    // 重置表單
    setTitle('')
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>分享您的旅行故事</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="標題"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="分享您的旅行經歷..."
        required
      />
      <button type="submit">提交</button>
    </form>
  )
}

export default UserContentSubmission