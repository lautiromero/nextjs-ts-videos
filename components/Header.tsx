import React from 'react'
import Logo from './Logo'
import ThemeSwitcher from './ThemeSwitcher'

type Props = {}

export default function Header({}: Props) {


  return (
    <div className='w-full py-2 px-[3.5%] bg-fuchsia-1000'>
      <div className='grid grid-cols-12 gap-7'>
        <div className='col-span-2'><Logo /></div>
        <div className='h-11 bg-gray-100 col-span-7'>
        </div>
        <div className='flex justify-between items-center col-span-1'>
          <ThemeSwitcher />
        </div>
        <div className='h-11 bg-gray-100 col-span-2'></div>
      </div>
    </div>
  )
}