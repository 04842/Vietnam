// src/components/account/ProfileForm.tsx

import React, { useState, FormEvent } from 'react'

interface ProfileData {
  name: string;
  email: string;
  phone: string;
}

const ProfileForm: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 這裡應該實現實際的更新邏輯，包括與後端 API 的交互
    console.log('更新資料:', profileData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>個人資料</h2>
      {Object.entries(profileData).map(([key, value]) => (
        <input
          key={key}
          type={key === 'email' ? 'email' : key === 'phone' ? 'tel' : 'text'}
          name={key}
          value={value}
          onChange={handleChange}
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          required={key !== 'phone'}
        />
      ))}
      <button type="submit">更新資料</button>
    </form>
  )
}

export default ProfileForm