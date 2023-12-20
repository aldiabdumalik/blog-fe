'use client'
import React from 'react'
import Tag from './Tag'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='flex flex-col px-2 md:px-4 lg:px-28 pt-4 gap-2 bg-white dark:bg-darkBody'>
      <div className='flex flex-row gap-8 items-center'>
        <Link href={'/'}>
          <h1 className='text-dark dark:text-light text-4xl font-bold'>INKAR</h1>
        </Link>
        <div className='flex items-center flex-1 relative border border-dark dark:border-light h-12 rounded-lg gap-2'>
          <p className='text-dark dark:text-white px-2 border-r border-dark dark:border-white'>Cari Artikel</p>
          <input
            type="text"
            className='h-full flex-1 bg-white dark:bg-darkBody text-darkBody dark:text-white mr-1 outline-none'
            placeholder='Prabowo Bilang Begini...'
            autoComplete='off'
          />
        </div>
      </div>
      <div className='flex items-center gap-12'>
        <div className='dropdown'>
          <div tabIndex={0} role="button" className='flex items-center gap-2 border-t border-x rounded-t-lg px-2 pt-2 pb-1 bg-light dark:bg-darkBody'>
            <div className='grid grid-cols-2 items-center justify-center gap-0.5'>
              <div className='h-2 w-2 rounded-sm border border-darkBody dark:border-light'></div>
              <div className='h-2 w-2 rounded-sm border border-darkBody dark:border-light'></div>
              <div className='h-2 w-2 rounded-sm border border-darkBody dark:border-light'></div>
              <div className='h-2 w-2 rounded-sm border border-darkBody dark:border-light'></div>
            </div>
            <p className='text-sm text-darkBody dark:text-white'>Kategori</p>
          </div>
          <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-[60vw] h-[35vw] mt-2 p-2 shadow bg-primary text-primary-content">
            <div className="card-body">
              <h3 className="card-title">Card title!</h3>
              <p>you can use any element as a dropdown.</p>
            </div>
          </div>
        </div>
        <div className='flex gap-2 spx-[9.5rem]'>
          <Tag text={'Teknologi'} />
          <Tag text={'Politik'} color='bg-green-700 text-white' />
          <Tag text={'Sepak Bola'} color='bg-primary text-white' />
        </div>
      </div>
    </nav>
  )
}
