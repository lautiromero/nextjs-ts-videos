import React from "react";

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
    <div ref={ref} className='bg-th-background-secondary shadow-md rounded p-8 flex flex-col' style={modalStyle}>
      <div className='mb-3'>
        <input className='shadow appearance-none rounded w-full py-2 px-3 text-sm text-th-primary bg-th-background-primary focus:outline-3 outline-th-primary-medium' id='username' type='text' placeholder='Username' />
        {/* <p className='text-red text-xs p-1'>Username is required.</p> */}
      </div>
      <div className='mb-5'>
        <input className='shadow appearance-none border-red rounded w-full py-2 px-3 text-sm text-th-primary bg-th-background-primary focus:outline-3 outline-th-primary-medium' id='password' type='password' placeholder='Password' />
        {/* <p className='text-red text-xs p-1'>Password is required.</p> */}
      </div>
      <div className='mb-4'>
        <a className='inline-block align-baseline underline font-bold text-sm text-blue hover:text-blue-darker' href='#'>
          Forgot Password
        </a>
      </div>
      <div className='flex items-center'>
        <div className='w-full'>
          <button className='bg-red-500 text-white font-bold py-2 px-4 rounded w-full' type='button'>
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
});

export default LoginModal