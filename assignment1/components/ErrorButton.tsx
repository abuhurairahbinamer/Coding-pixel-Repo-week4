'use client'

import { useState } from 'react'

export default function ErrorButton({message=null}:{message:string | null}) {
  const [shouldError, setShouldError] = useState(false)

  if (shouldError) {
    throw new Error('Forced error from button click in Layout.tsx!')
  }
  const mess=message?message:"Force Error"
  return (
    <button className='p-3 bg-red-600 hover:bg-red-600/80 cursor-pointer rounded-2xl' onClick={() => setShouldError(true)}>
      {mess}
    </button>
  )
}
