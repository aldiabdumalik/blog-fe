'use client'
import React from 'react'
interface TagProps {
  text: string;
  color?: string;
  url?: string;
}
export default function Tag({ text, color, url }: TagProps) {
  return (
    <button
      type='button'
      className={`flex items-center justify-center px-2.5 py-0.5 rounded-md text-xs  ${color ? color : 'bg-red-500 text-white'}`}
    >
      #{text}
    </button>
  )
}
