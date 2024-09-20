// src/components/Price.tsx

import React from 'react'
import { useLanguageCurrency } from '../context/LanguageCurrencyContext'
import { convertCurrency } from '../utils/currencyConverter'

interface PriceProps {
  amount: number
  originalCurrency: string
}

const Price: React.FC<PriceProps> = ({ amount, originalCurrency }) => {
  const { currency } = useLanguageCurrency()
  const convertedAmount = convertCurrency(amount, originalCurrency, currency)

  return <>{currency} {convertedAmount.toFixed(2)}</>
}

export default Price