'use client'
import React from 'react'
import { useState, useEffect } from 'react'

export default function FilterComponent({data}: {data:any[]}) {
  const [quotes, setQuotes] = useState(data)
  const [search, setSearch] = useState('')
  const [filteredQuotes, setFilteredQuotes] = useState(data);
  const [sortBy, setSortBy] = useState('author');

  useEffect(() => {
    setFilteredQuotes(
      quotes.filter((quote) =>
        quote.author.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, quotes]);

  function handleSort() {
    const sortedData = [...filteredQuotes].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    setFilteredQuotes(sortedData);
  }

  return (
    <div className="min-h-screen w-full bg-opacity-90 bg-yellow-500 py-10 flex justify-center items-center flex-col gap-2">
      <h1 className="text-2xl tracking-wider text-yellow-700"><b>Filter</b></h1>
      <div>
        <input type="text" defaultValue={search} onChange={(e) => {setSearch(e.target.value)}} className="text-white px-2 py-1 rounded border-2 border-yellow-100 bg-gray-800" placeholder="Search for author" />
      </div>
      {filteredQuotes.map((quote) => (
        <div
          className="w-2/6 border-2 border-yellow-100 bg-gray-800 flex flex-col justify-center items-center rounded p-3 flex-wrap"
          key={quote.id}
        >
          <h1>
            <b>"{quote.quote}"</b>
          </h1>
          <h3>- {quote.author}</h3>
        </div>
      ))}
      <button onClick={handleSort} className="border-white border-2 bg-yellow-700 py-1 px-3 rounded text-yellow-100">Sort</button>
    </div>
  )
}
