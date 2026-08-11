'use client'
import Link from 'next/link'
import { useRef } from 'react'
export default function Navbar() {
  const ref=useRef(0);
  ref.current+=1;
console.log(`P3 task done with deeper :navbar rendered ${ref.current} times`)
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '10px', background: '#eee' }}>
      <Link  className='border-2 border-transparent focus:border-blue-800 rounded-2xl' href="/">Home</Link>
      <Link  className='border-2 border-transparent focus:border-blue-800 rounded-2xl' href="/about">About</Link>
      <Link  className='border-2 border-transparent focus:border-blue-800 rounded-2xl' href="/contact">Contact</Link>
      <Link  className='border-2 border-transparent focus:border-blue-800 rounded-2xl' href="/dashboard">Dashboard</Link>
      <Link  className='border-2 border-transparent focus:border-blue-800 rounded-2xl' href="/practice">practice portion</Link>
    </nav>
  )
}