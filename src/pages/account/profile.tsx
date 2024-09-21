// src/pages/account/profile.tsx

import React from 'react'
import Layout from '../../components/Layout'
import seo from '../../components/seo'
import ProfileForm from '../account/ProfileForm'
import OrderHistory from '../account/OrderHistory'
import PointsAndCoupons from '../account/PointsAndCoupons'

const ProfilePage: React.FC = () => {
  return (
    <Layout>
      <seo title="個人資料" description="管理您的個人資料和訂單" />
      <h1>個人資料</h1>
      <ProfileForm />
      <OrderHistory />
      <PointsAndCoupons />
    </Layout>
  )
}

export default ProfilePage