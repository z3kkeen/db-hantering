'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useState } from 'react'

export default function FilterComponent({data}: {data:any[]}) {
  const router = useRouter()
  const [quotes, setQuotes] = useState(data)

  function handleSort() {
    const sortedData = quotes.sort((a:any, b:any)=> b.id - a.id)
    setQuotes(sortedData)
    console.log(sortedData);

    router.refresh()
  }

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-2">
      <h1>Filter</h1>
      {data.map((d)=>(
        <div className="w-1/3 border-2 border-white " key={d.id}>
          <h1>{d.quote}</h1>
          <h3>{d.author}</h3>
        </div>
      ))}
      <button onClick={handleSort}>Sort</button>
    </div>
  )
}
