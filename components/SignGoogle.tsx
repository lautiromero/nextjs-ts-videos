import { FcGoogle } from 'react-icons/fc'
import React from 'react'

type Props = {}

const SignGoogle = (props: Props) => {
  return (
    <button className="mb-3 py-2 text-sm text-th-primary-medium border border-th-primary-soft rounded w-full hover:ring-1 ring-th-primary-soft">
      <FcGoogle className='inline h-4 w-4 text-blue-400' />
      <span className="ml-2 align-middle">Sign in with Google</span>
    </button>
  )
}

export default SignGoogle