'use client'
import Link from 'next/link'
import { useRef } from 'react'
import { isActive } from '@/app/practice_questions/p6/p6';
import { usePathname } from 'next/navigation';
export default function Navbar() {
  const pathname = usePathname();
  const heightlight='border-2 border-blue-800 rounded-2xl'
  const ref=useRef(0);
  ref.current+=1;
console.log(`P3 task done with deeper :navbar rendered ${ref.current} times`)
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '10px', background: '#eee' }}>
      <Link  className={`${isActive(pathname,'/')?heightlight:''}`} href="/">Home</Link>
      <Link  className={`${isActive(pathname,'/about')?heightlight:''} `} href="/about">About</Link>
      <Link  className={`${isActive(pathname,'/contact')?heightlight:''} `} href="/contact">Contact</Link>
      <Link  className={`${isActive(pathname,'/dashboard')?heightlight:''} `} href="/dashboard">Dashboard</Link>
      <Link  className={`${isActive(pathname,'/practice')?heightlight:''} `} href="/practice">practice portion</Link>
    </nav>
  )
}