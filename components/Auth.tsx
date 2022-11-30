import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io';
import LoginModal from './LoginModal';

type Props = {}

export default function Auth({}: Props) {
  
  const [modalState, setModalState] = useState<Boolean>(false)

  const modalDiv = useRef<HTMLDivElement>(null);
  
  const openModal = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (!modalState) {
      setModalState(true)
      document.addEventListener('click', closeRegModal)
    } else {
      setModalState(false)
      document.removeEventListener('click', closeRegModal)
    }
  }

  const closeRegModal = ({target}: MouseEvent) => {
    // Take the target from the dom event and check if it's clicked outside of the modal div 
    const { current } = modalDiv;
    if (current && !current.contains(target as Node)) {
      setModalState(false)
      document.removeEventListener('click', closeRegModal)
    }
  }

  useEffect(() => {
    // console.log(modalDiv.current)  
  }, [])
  

  return (
    <div className='relative flex justify-around items-center h-full'>
        <button onClick={openModal} className='inline-flex items-center text-white font-medium text-sm py-2'>
            Login <IoMdArrowDropdown className='inline mt-0.5' />
        </button>
        <Link href='/register'>
          <button type='button' className='text-white bg-red-500 hover:bg-red-700 font-medium rounded-full text-sm px-4 pb-1.5 pt-1 text-center'>
            Sign up
          </button>
        </Link>
        {
          modalState && <LoginModal ref={modalDiv} />
        }
    </div>
  )
}

