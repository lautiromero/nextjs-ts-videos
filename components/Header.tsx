import { IoMdArrowDropdown } from 'react-icons/io'

import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import Search from './Search'
import ThemeSwitcher from './ThemeSwitcher'
import RegisterModal from './LoginModal'
import Auth from './Auth'

type Props = {}

export default function Header({}: Props) {

    const [ modalState, setModalState ] = useState<boolean | undefined>(false);

  return (
    <div className='w-full py-2 px-[3.5%] bg-th-background-secondary'>
      <div className='grid grid-cols-12 gap-7'>
        <div className='col-span-2'><Logo /></div>
        <div className='h-11 flex justify-between items-center col-span-7'>
          <Search />
        </div>
        <div className='flex justify-between items-center col-span-1'>
          <ThemeSwitcher />
        </div>
        <div className='col-span-2'>
          <Auth />
        </div>
      </div>
    </div>
  )
}