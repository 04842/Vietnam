// src/components/account/PointsAndCoupons.tsx

import React from 'react'

const PointsAndCoupons: React.FC = () => {
  // 這裡應該從後端 API 獲取積分和優惠券信息
  const points = 1000
  const coupons = [
    { id: 1, code: 'SUMMER10', discount: '10%' },
    { id: 2, code: 'WELCOME50', discount: '$50' },
  ]

  return (
    <div>
      <h2>積分與優惠券</h2>
      <p>您當前的積分: {points}</p>
      <h3>可用優惠券:</h3>
      <ul>
        {coupons.map(coupon => (
          <li key={coupon.id}>
            {coupon.code} - 折扣: {coupon.discount}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PointsAndCoupons