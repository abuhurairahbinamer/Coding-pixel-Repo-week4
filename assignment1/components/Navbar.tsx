'use client'
import Link from 'next/link'

export default function Navbar() {
 
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '10px', background: '#eee' }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/practice">practice portion</Link>
    </nav>
  )
}