// src/components/SearchBar.tsx

import React, { useState } from 'react'
import { navigate } from 'gatsby'

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`)
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="搜索目的地、酒店、航班、活動..."
        aria-label="搜索"
      />
      <button type="submit">搜索</button>
    </form>
  )
}

export default SearchBar