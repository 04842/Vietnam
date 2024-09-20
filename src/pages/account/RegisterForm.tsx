// src/components/account/RegisterForm.tsx

import React, { useState } from 'react'

interface RegisterFormProps {
  onSuccess: () => void
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // 這裡應該實現實際的註冊邏輯，包括與後端 API 的交互
    console.log('註冊:', { name, email, password })
    // 假設註冊成功
    onSuccess()
  }

  return (
    <form onSubmit={handleSubmit}>
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
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="密碼"
        required
      />
      <button type="submit">註冊</button>
    </form>
  )
}

export default RegisterForm