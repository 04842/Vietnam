// src/components/Review.tsx

import React, { useState } from 'react'

interface ReviewProps {
  productId: string
  onSubmit: (review: { rating: number; comment: string }) => void
}

const Review: React.FC<ReviewProps> = ({ productId, onSubmit }) => {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ rating, comment })
    setRating(0)
    setComment('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>寫評價</h3>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
          >
            ★
          </span>
        ))}
      </div>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="寫下您的評價..."
        required
      />
      <button type="submit">提交評價</button>
    </form>
  )
}

export default Review