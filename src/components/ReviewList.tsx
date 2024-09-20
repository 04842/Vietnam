// src/components/ReviewList.tsx

import React from 'react'

interface ReviewItem {
  id: string
  author: string
  rating: number
  comment: string
  date: string
}

interface ReviewListProps {
  reviews: ReviewItem[]
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  return (
    <div>
      <h3>評價列表</h3>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>評分: {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
          <p>{review.comment}</p>
          <p>by {review.author} on {review.date}</p>
        </div>
      ))}
    </div>
  )
}

export default ReviewList