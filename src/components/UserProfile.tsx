// src/components/UserProfile.tsx

import React from 'react'

interface UserProfileProps {
  username: string
  bio: string
  reviews: number
  followers: number
  following: number
}

const UserProfile: React.FC<UserProfileProps> = ({ username, bio, reviews, followers, following }) => {
  return (
    <div>
      <h2>{username}</h2>
      <p>{bio}</p>
      <div>
        <span>評價: {reviews}</span>
        <span>關注者: {followers}</span>
        <span>正在關注: {following}</span>
      </div>
      <button>關注</button>
    </div>
  )
}

export default UserProfile