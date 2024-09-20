// src/components/account/PointsAndCoupons.tsx

import React, { useState, useEffect } from 'react'

interface Coupon {
  id: number;
  code: string;
  discount: string;
}

const PointsAndCoupons: React.FC = () => {
  const [points, setPoints] = useState<number | null>(null);
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 這裡應該從後端 API 獲取積分和優惠券信息
        // 假設的 API 調用
        const data = await fetch('/api/points-and-coupons').then(res => res.json());
        setPoints(data.points);
        setCoupons(data.coupons);
      } catch (err) {
        setError('無法載入數據。請稍後再試。');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <div>加載中...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>積分與優惠券</h2>
      {points !== null && <p>您當前的積分: {points}</p>}
      <h3>可用優惠券:</h3>
      {coupons.length > 0 ? (
        <ul>
          {coupons.map(coupon => (
            <li key={coupon.id}>
              {coupon.code} - 折扣: {coupon.discount}
            </li>
          ))}
        </ul>
      ) : (
        <p>目前沒有可用的優惠券。</p>
      )}
    </div>
  )
}

export default PointsAndCoupons