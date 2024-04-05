'use server'
import { db } from './db';

export async function addTransaction(
    count: number, 
    symbol: string, 
    price: string
) {
    console.log('buying', count, 'of', symbol, "at", price);

    await db(
        "INSERT INTO transactions (units, symbol, purchaseprice) VALUES ($1, $2, $3)", [count, symbol, Number.parseFloat(price)]
    )

    return 'Saved successfully!';
}

export async function getTransactions() {
    const res = await db('SELECT * FROM transactions');
    return res.rows
}