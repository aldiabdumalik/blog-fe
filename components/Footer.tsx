import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className='flex flex-col w-full bottom-0 px-2 md:px-4 lg:px-28 pt-8 pb-2 gap-2 shadow'>
      <div className='flex flex-col md:flex-row md:gap-8 md:justify-between items-start border-b border-dark pb-2'>
        <div className="flex flex-col flex-1 gap-2">
          <h2 className='text-2xl text-darkBody font-bold'>INKAR</h2>
          <p className='text-sm text-darkBody'>
            Website ini menyajikan berbagai macam informasi mulai dari keseharian sampai sepak bola ada disini
          </p>
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <h2 className='text-2xl text-darkBody font-bold'>Hubungi Kami</h2>
          <div className="flex items-center gap-2">
            <Image src={'/assets/icon/dark/whatsapp.svg'} width={18} height={18} alt='icon-footer' />
            <p className='text-sm text-darkBody'>Kirim Pesan</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={'/assets/icon/dark/whatsapp.svg'} width={18} height={18} alt='icon-footer' />
            <p className='text-sm text-darkBody'>Whatsaap</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={'/assets/icon/dark/email.svg'} width={18} height={18} alt='icon-footer' />
            <p className='text-sm text-darkBody'>hi@inkar.com</p>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <h2 className='text-2xl text-darkBody font-bold'>Tautan</h2>
          <p className='text-sm text-darkBody'>About</p>
          <p className='text-sm text-darkBody'>Privacy Policy</p>
          <p className='text-sm text-darkBody'>Terms of Service</p>
        </div>
      </div>
      <div className="flex w-full justify-start">

        <h4 className='text-darkBody font-semibold text-sm'>&copy; Copyright 2024 - Team Inkar</h4>
      </div>
    </footer>
  )
}
