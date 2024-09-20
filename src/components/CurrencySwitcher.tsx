// src/components/CurrencySwitcher.tsx

import React from 'react'
import { useLanguageCurrency } from '../context/LanguageCurrencyContext'

const currencies = [
  { code: 'TWD', symbol: 'NT$' },
  { code: 'USD', symbol: '$' },
  { code: 'JPY', symbol: '¥' },
]

const CurrencySwitcher: React.FC = () => {
  const { currency, setCurrency } = useLanguageCurrency()

  return (
    <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
      {currencies.map((curr) => (
        <option key={curr.code} value={curr.code}>
          {curr.code} ({curr.symbol})
        </option>
      ))}
    </select>
  )
}

export default CurrencySwitcher