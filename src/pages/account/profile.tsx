// src/pages/account/profile.tsx

import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import ProfileForm from '../../components/account/ProfileForm'
import OrderHistory from '../../components/account/OrderHistory'
import PointsAndCoupons from '../../components/account/PointsAndCoupons'

const ProfilePage: React.FC = () => {
  return (
    <Layout>
      <SEO title="個人資料" description="管理您的個人資料和訂單" />
      <h1>個人資料</h1>
      <ProfileForm />
      <OrderHistory />
      <PointsAndCoupons />
    </Layout>
  )
}

export default ProfilePage