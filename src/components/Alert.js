import React from 'react'

export default function Alert({ message }) {
  return (
    <div className='relative z-20 bg-red-100 border border-red-400 
    text-red-700 px-4 py-3 rounded relative mb-2 text-center'>
      <span className='sm:inline block'>{message}</span>
    </div>
  )
}
