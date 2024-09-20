// src/context/LanguageCurrencyContext.tsx

import React, { createContext, useState, useContext, ReactNode } from 'react'
//import React, { createContext, useState, useContext, ReactNode, FC } from 'react'
//import React, { createContext, useState, useContext, PropsWithChildren } from 'react'

interface LanguageCurrencyContextType {
  language: string
  setLanguage: (lang: string) => void
  currency: string
  setCurrency: (curr: string) => void
}

const LanguageCurrencyContext = createContext<LanguageCurrencyContextType | undefined>(undefined)
//export const LanguageCurrencyProvider: FC<{ children: ReactNode }> = ({ children }) => {

export const LanguageCurrencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//export const LanguageCurrencyProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {

  const [language, setLanguage] = useState('zh-TW')
  const [currency, setCurrency] = useState('TWD')

  return (
    <LanguageCurrencyContext.Provider value={{ language, setLanguage, currency, setCurrency }}>
      {children}
    </LanguageCurrencyContext.Provider>
  )
}

export const useLanguageCurrency = () => {
  const context = useContext(LanguageCurrencyContext)
  if (context === undefined) {
    throw new Error('useLanguageCurrency must be used within a LanguageCurrencyProvider')
  }
  return context
}