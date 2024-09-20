// src/components/LanguageSwitcher.tsx

import React from 'react'
import { useLanguageCurrency } from '../context/LanguageCurrencyContext'

const languages = [
  { code: 'zh-TW', name: '繁體中文' },
  { code: 'en', name: 'English' },
  { code: 'ja', name: '日本語' },
]

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguageCurrency()

  return (
    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  )
}

export default LanguageSwitcher