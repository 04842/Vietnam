// src/pages/customer-service.tsx

import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import LiveChat from '../components/customer-service/LiveChat'
import FAQ from '../components/customer-service/FAQ'
import ContactForm from '../components/customer-service/ContactForm'
import PhoneSupport from '../components/customer-service/PhoneSupport'

const CustomerServicePage: React.FC = () => {
  return (
    <Layout>
      <SEO title="客戶服務" description="獲取幫助和支持" />
      <h1>客戶服務</h1>
      <LiveChat />
      <FAQ />
      <ContactForm />
      <PhoneSupport />
    </Layout>
  )
}

export default CustomerServicePage