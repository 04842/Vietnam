// src/components/account/ProfileForm.tsx

import React, { useState } from 'react'

const ProfileForm: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // 這裡應該實現實際的更新邏輯，包括與後端 API 的交互
    console.log('更新資料:', { name, email, phone })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>個人資料</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="姓名"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="電子郵件"
        required
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="電話號碼"
      />
      <button type="submit">更新資料</button>
    </form>
  )
}

export default ProfileForm