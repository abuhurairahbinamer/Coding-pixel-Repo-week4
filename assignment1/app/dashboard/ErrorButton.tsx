'use client'

import { useState } from 'react'

export default function ErrorButton() {
  const [shouldError, setShouldError] = useState(false)

  if (shouldError) {
    throw new Error('Forced error from button click!')
  }
  
  return (
    <button onClick={() => setShouldError(true)}>
      Force Error
    </button>
  )
}
