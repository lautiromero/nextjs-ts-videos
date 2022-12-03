import { AiOutlineTwitter } from 'react-icons/ai'
import React from 'react'

type Props = {}

const SignTwitter = (props: Props) => {
  return (
    <button className="mb-2 py-2 text-sm text-th-primary-medium border border-th-primary-soft rounded w-full hover:ring-1 ring-th-primary-soft">
      <AiOutlineTwitter className='inline h-4 w-4 text-blue-400' />
      <span className="ml-2 align-middle">Sign in with Twitter</span>
    </button>
  )
}

export default SignTwitter