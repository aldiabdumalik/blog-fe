'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Tag from '../Tag'

export default function ProductCard() {
  return (
    <div className='flex flex-col w-full bg-white p-2 rounded-xl shadow-md gap-2'>
      <Link href={'/'} className='flex flex-col rounded-md overflow-hidden relative'>
        <Image src={'/dump/example.jpeg'} width={300} height={300} alt='img' className='object-cover w-full h-40' />
        <div className={`absolute left-0 bottom-0 w-full bg-gradient-to-b from-transparent to-dark z-10 h-16`} />
        <div className='absolute z-10 bottom-0 left-0 flex flex-wrap-reverse gap-1 p-1'>
          <Tag text={'Teknologi'} size='text-[10px] px-0.5 rounded-sm' />
          <Tag text={'Politik'} size='text-[10px] px-0.5 rounded-sm' />
          <Tag text={'Sepak Bola'} size='text-[10px] px-0.5 rounded-sm' />
          <Tag text={'Sepak Bola'} size='text-[10px] px-0.5 rounded-sm' />
          <Tag text={'Sepak Bola'} size='text-[10px] px-0.5 rounded-sm' />
        </div>
      </Link>
      <div className='flex flex-col gap-1 w-full'>
        <Link href={'/'}>
          <h4 className='text-darkBody dark:text-white text-md'>Lorem ipsum dolor, sit amet consectetur adipisicing elit</h4>
        </Link>
        <p className='text-[#777] text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quisquam consectetur fugiat...</p>
        <div className='flex justify-end'>
          <p className='text-[#777] text-[10px]'>20 April 2024 13:00 WIB</p>
        </div>
      </div>
    </div>
  )
}
