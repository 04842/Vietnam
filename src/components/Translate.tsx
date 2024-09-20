// src/components/Translate.tsx

import React from 'react'
import { useLanguageCurrency } from '../context/LanguageCurrencyContext'
import { translate } from '../utils/translations'

interface TranslateProps {
  textKey: string
}

const Translate: React.FC<TranslateProps> = ({ textKey }) => {
  const { language } = useLanguageCurrency()
  return <>{translate(textKey, language)}</>
}

export default Translate