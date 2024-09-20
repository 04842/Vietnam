// src/utils/translations.ts

const translations: { [key: string]: { [key: string]: string } } = {
    'zh-TW': {
      welcome: '歡迎',
      home: '首頁',
      about: '關於我們',
      contact: '聯繫我們',
    },
    'en': {
      welcome: 'Welcome',
      home: 'Home',
      about: 'About Us',
      contact: 'Contact Us',
    },
    'ja': {
      welcome: 'ようこそ',
      home: 'ホーム',
      about: '当社について',
      contact: 'お問い合わせ',
    },
  }
  
  export const translate = (key: string, language: string): string => {
    return translations[language]?.[key] || key
  }