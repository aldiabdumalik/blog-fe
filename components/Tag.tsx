'use client'
import React from 'react'
interface TagProps {
  text: string;
  color?: string;
  url?: string;
  size?: string;
}
export default function Tag({ text, color, url, size = 'px-2.5 py-0.5 text-xs rounded-md' }: TagProps) {
  return (
    <button
      type='button'
      className={`flex items-center justify-center  ${color ? color : 'bg-red-500 text-white'} ${size}`}
    >
      #{text}
    </button>
  )
}
