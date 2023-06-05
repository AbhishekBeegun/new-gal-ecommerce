import React from 'react'
import { useState } from "react"
import {IoSearch} from "react-icons/io5"
const SearchBar = () => {
  const [SearchQuery, setSearchQuery] = useState()
  return (
    <form className="px-10 py-1 rounded-full border border-red-600
    flex justify-between w-1/2">
      <input
      className="w-full bg-transparent text-white"
      placeholder="Searching for . . ."
      value={SearchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <button className="text-white rounded-lg bg-red-600 p-2"><IoSearch /></button>
    </form>
  )
}

export default SearchBar