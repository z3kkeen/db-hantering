import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    host: process.env.HOST
})

export const db = (text: string, params?: any, callback?: any) => {
    return pool.query(text, params, callback)
}