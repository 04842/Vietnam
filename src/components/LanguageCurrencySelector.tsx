// src/components/LanguageCurrencySelector.tsx

import React, { useState } from 'react'

const LanguageCurrencySelector: React.FC = () => {
  const [language, setLanguage] = useState('zh-TW')
  const [currency, setCurrency] = useState('TWD')

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value)
    // 這裡可以添加更改網站語言的邏輯
  }

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value)
    // 這裡可以添加更改貨幣的邏輯
  }

  return (
    <div>
      <select value={language} onChange={handleLanguageChange}>
        <option value="zh-TW">繁體中文</option>
        <option value="en">English</option>
        <option value="ja">日本語</option>
      </select>
      <select value={currency} onChange={handleCurrencyChange}>
        <option value="TWD">新台幣 (TWD)</option>
        <option value="USD">美元 (USD)</option>
        <option value="JPY">日圓 (JPY)</option>
      </select>
    </div>
  )
}

export default LanguageCurrencySelector