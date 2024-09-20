// src/components/customer-service/ContactForm.tsx

import React, { useState } from 'react'

const ContactForm: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // 這裡應該實現實際的表單提交邏輯，包括與後端 API 的交互
    console.log('提交表單:', { name, email, message })
    // 重置表單
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>聯繫我們</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="您的姓名"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="您的電子郵件"
        required
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="您的訊息"
        required
      />
      <button type="submit">發送</button>
    </form>
  )
}

export default ContactForm