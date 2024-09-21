// src/pages/account/login.tsx

import React, { useState } from 'react'
import { navigate } from 'gatsby'
import Layout from '../../components/Layout'
import seo from '../../components/seo'
import LoginForm from '../account/LoginForm'
import RegisterForm from '../account/RegisterForm'

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true)

  const handleSuccessfulAuth = () => {
    // 在實際應用中，這裡應該設置用戶的登入狀態
    navigate('/account/profile')
  }

  return (
    <Layout>
      <Seo title={isLogin ? "登入" : "註冊"} description="登入或註冊您的帳戶" />
      <h1>{isLogin ? "登入" : "註冊"}</h1>
      {isLogin ? (
        <LoginForm onSuccess={handleSuccessfulAuth} />
      ) : (
        <RegisterForm onSuccess={handleSuccessfulAuth} />
      )}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "還沒有帳戶？註冊" : "已有帳戶？登入"}
      </button>
    </Layout>
  )
}

export default LoginPage