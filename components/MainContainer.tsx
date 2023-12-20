import React, { ReactNode } from 'react'

export default function MainContainer({ children, className }: { children?: ReactNode, className?: string }) {
  return (
    <main className={`flex flex-col px-2 md:px-4 lg:px-28 py-4 mb-auto ${className}`}>{children}</main>
  )
}
