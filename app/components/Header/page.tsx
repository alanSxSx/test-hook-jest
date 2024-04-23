import Link from 'next/link'
import React from 'react'
import SignInButton from '../SignInButton'

export default function Header() {
  return (
    <div className="flex w-full items-center justify-center gap-10 pt-10" data-testid="headerComponent">
    <Link href="/" className='py-2 px-4 rounded-md hover:border'>Home</Link>
    <Link href="/server" className='py-2 px-4 rounded-md hover:border'>Server</Link>
    <Link href="/client" className='py-2 px-4 rounded-md hover:border'>Client</Link>
    <SignInButton/>
  </div>
  )
}
