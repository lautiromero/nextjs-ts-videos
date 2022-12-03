import Link from "next/link";
import React from "react";
import SignGoogle from "./SignGoogle";
import SignTwitter from "./SignTwitter";

const modalStyle = {
  position: 'absolute',
  width: '350px',
  right: 0,
  top: 0,
  margin: '0px',
  transform: 'translate3d(0px, 65px, 1px)'
} as React.CSSProperties;

const LoginModal = React.forwardRef<HTMLDivElement>((_props,ref) => {
  return (
    <div ref={ref} className='bg-th-background-secondary shadow-md rounded px-7 py-6 flex flex-col' style={modalStyle}>
      <div className='w-full pb-4'>
        <SignTwitter />
        <SignGoogle />
      </div>
      <div className='mb-3'>
        <input className='border border-th-primary-soft appearance-none rounded w-full py-2 px-3 text-sm text-th-primary bg-th-background-primary outline-none focus:ring-1 ring-th-primary-dark' id='username' type='text' placeholder='Username' />
        {/* <p className='text-red text-xs p-1'>Username is required.</p> */}
      </div>
      <div className='mb-5'>
        <input className='border border-th-primary-soft appearance-none rounded w-full py-2 px-3 text-sm text-th-primary bg-th-background-primary outline-none focus:ring-1 ring-th-primary-dark' id='password' type='password' placeholder='Password' />
        {/* <p className='text-red text-xs p-1'>Password is required.</p> */}
      </div>
      <div className='flex justify-between mb-4'>
        <div className="inline-flex items-center mb-4">
            <input id="remember" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-1" />
            <label htmlFor="remember" className="ml-2 align-baseline text-sm text-th-primary">Remember me</label>
        </div>
        <Link href='/pass-recovery' legacyBehavior>
          <a className='inline-block align-baseline underline font-medium text-sm'>
            Forgot Password
          </a>
        </Link>
      </div>
        <div className='w-full'>
          <button className='bg-red-800 bg-opacity-80 border border-red-800 hover:bg-opacity-100 text-white font-bold py-2 px-4 rounded w-full' type='button'>
            Sign In
          </button>
        </div>


    </div>
  )
});

LoginModal.displayName = 'LoginModal'

export default LoginModal