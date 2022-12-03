import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Dropdown from "./Dropdown";


type Props = {}

export default function Search({}: Props) {
  
  const [ dropState, setDropState ] = useState<boolean | undefined>(false);

  const openDrop = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (!dropState) {
      setDropState(true)
      document.addEventListener('click', closeDrop)
    } else {
      closeDrop()
    }
  }

  const closeDrop = () => {
    setDropState(false)
    document.removeEventListener('click', closeDrop)
  }

  return (  
  <form className="w-full position-relative" autoComplete="off">
      <div className="flex">
          {/* <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label> */}
          <button id="dropdown-button" onClick={openDrop} className="flex-shrink-0 z-30 inline-flex items-center py-2 pl-4 pr-3 text-sm font-medium text-center text-th-primary-medium bg-th-secondary-soft rounded-l-lg focus:outline-none" type="button">All categories <IoMdArrowDropdown className='mt-0.5' /></button>
          {
            dropState && <Dropdown /> 
          }
          <div className="relative w-full">
              <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-th-primary bg-th-background-primary rounded-r-lg focus:outline-4 outline-th-primary-medium" placeholder="Search for videos..." required />
              <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white rounded-r-lg focus:outline-none focus:ring-blue-300">
                  <svg aria-hidden="true" className="w-5 h-5 text-th-primary-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"  strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  <span className="sr-only">Search</span>
              </button>
          </div>
      </div>
  </form>
)
}