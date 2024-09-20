// src/utils/currencyConverter.ts

const exchangeRates: { [key: string]: number } = {
    TWD: 1,
    USD: 0.033,
    JPY: 3.67,
  }
  
  export const convertCurrency = (amount: number, fromCurrency: string, toCurrency: string): number => {
    const fromRate = exchangeRates[fromCurrency] || 1
    const toRate = exchangeRates[toCurrency] || 1
    return (amount / fromRate) * toRate
  }