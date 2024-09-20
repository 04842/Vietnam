// src/components/BudgetCalculator.tsx

import React, { useState, useEffect } from 'react'

interface BudgetCalculatorProps {
  itinerary: {
    days: Array<{
      day: number
      activities: string[]
    }>
  }
  destination: string
}

const BudgetCalculator: React.FC<BudgetCalculatorProps> = ({ itinerary, destination }) => {
  const [totalBudget, setTotalBudget] = useState(0)

  useEffect(() => {
    // 這裡應該實現實際的預算計算邏輯
    // 現在我們只是用一個簡單的計算來模擬
    const daysCount = itinerary.days.length
    const averageDailyCost = 1000 // 假設平均每天花費1000
    setTotalBudget(daysCount * averageDailyCost)
  }, [itinerary, destination])

  return (
    <div>
      <h2>預估預算</h2>
      <p>總預算: NT$ {totalBudget}</p>
      <p>這個預算包括了住宿、交通和餐飲的估計成本。實際花費可能會有所不同。</p>
    </div>
  )
}

export default BudgetCalculator