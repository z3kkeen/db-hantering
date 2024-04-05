'use client'
import React from 'react'
import { addTransaction } from '@/utils/handleDatabase'

function buy(symbol: string, price: string) {
    const count = prompt(`How many ${symbol}?`);
    addTransaction(Number(count), symbol, price);
}

export default function BuyButton(props: {symbol:string; price: string}) {
  return (
    <div>
      <button onClick={() => buy(props.symbol, props.price)}
        className="bg-emerald-300 text-slate-600 px-2 rounded border-2 border-slate-600"
      ><b>BUY</b></button>
    </div>
  )
}
