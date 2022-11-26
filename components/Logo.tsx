import Image from 'next/image'
import Link from 'next/link'

type Props = {}

export default function Logo({}: Props) {
  return (
    <Link href='/'>
      <div className='inline-flex items-center h-full relative'>
        <Image src='/logo.png' alt='Logo' width={150} height={0} />
      </div>
    </Link>
  )
}