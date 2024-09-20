// src/components/account/LoginForm.tsx

import React, { useState } from 'react'

interface LoginFormProps {
  onSuccess: () => void
}

const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // 這裡應該實現實際的登入邏輯，包括與後端 API 的交互
    console.log('登入:', { email, password })
    // 假設登入成功
    onSuccess()
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">登入</button>
    </form>
  )
}

export default LoginForm