// src/components/Layout.tsx

import React, { ReactNode } from 'react'
import { LanguageCurrencyProvider } from '../context/LanguageCurrencyContext'
import { NotificationProvider } from '../context/NotificationContext'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LanguageCurrencyProvider>
      <NotificationProvider>
        {/* 其他布局組件代碼 */}
        <main>{children}</main>
      </NotificationProvider>
    </LanguageCurrencyProvider>
  )
}

export default Layout