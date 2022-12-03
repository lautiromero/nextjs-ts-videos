import { HiMoon, HiSun } from 'react-icons/hi'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

type Theme = 'dark' | 'light'

export default function ThemeSwitcher() {
  const [ mounted, setMounted ] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleTheme = (e: React.FormEvent<HTMLInputElement>) => {
    resolvedTheme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <>
      <label className='inline-flex relative items-center cursor-pointer'>
        <input type='checkbox' className='sr-only peer'
          checked={resolvedTheme === 'dark'}
          onChange={handleTheme} />
        <div className='w-11 h-6 mr-2 bg-th-secondary-soft rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all'></div>
        {/* <span className='ml-2 text-sm font-medium text-gray-900'>{resolvedTheme}</span> */}
        {
          resolvedTheme === 'dark' ? <HiMoon /> : <HiSun className='text-gray-800' />
        }
      </label>

    </>
   
  )
}